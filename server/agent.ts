import { OpenAIAgentsProvider } from '@corsair-dev/mcp';
import { Agent, run, tool, setOpenAIAPI, setTracingDisabled } from '@openai/agents';
import { corsair } from '@/lib/corsair';
import { GoogleGenAI } from "@google/genai";


setOpenAIAPI('chat_completions');


const embeddingModel = new GoogleGenAI({
  apiKey: process.env.OPENAI_API_KEY!,

});

export async function generateEmbedding(text: string[]) {

 const embed= await embeddingModel.models.embedContent({
  model: "gemini-embedding-2",
  contents:text,
});
  return embed?.embeddings?.[0].values;
}
setTracingDisabled(true);
export async function ai(userMssg:string, tenantId:string) {
  const tenantCorsair = corsair.withTenant(tenantId);
  const provider = new OpenAIAgentsProvider();
  const tools = provider.build({ corsair: tenantCorsair, tool });
  for (const t of tools as any[]) {
    if (t.name === "run_script") {
      t.parameters = {
        type: "object",
        properties: {
          code: {
            type: "string",
          },
        },
        required: ["code"],
        additionalProperties: false,
      };
    }

    if (t.name === "get_schema") {
      t.parameters = {
        type: "object",
        properties: {
          path: {
            type: "string",
          },
        },
        required: ["path"],
        additionalProperties: false,
      };
    }

    if (t.name === "list_operations") {
      t.parameters = {
        type: "object",
        properties: {},
        additionalProperties: false,
      };
    }

    if (t.name === "corsair_setup") {
      t.parameters = {
        type: "object",
        properties: {},
        additionalProperties: false,
      };
    }
  }
  const agent = new Agent({
    name: 'corsair-agent',
    model: 'gemma-4-31b-it',
    modelSettings:{
      reasoning:{
        effort:"high"
      }
    },
    instructions: `
You are a Corsair-powered assistant.

Your objective is to help the user using Corsair tools while minimizing tool calls and avoiding unnecessary retries.

WORKFLOW

1. Understand the user's request.
2. If you do not know which operation to use, call list_operations.
3. If you know the operation but do not know its parameters, call get_schema.
4. Execute the operation using run_script.
5. Return the final answer immediately.
6. Stop.

TOOL RULES

list_operations:
- Use only to discover available operations.
- Do not call repeatedly.
- Do not call after the correct operation has already been identified.
- Do not call after data has already been retrieved.

get_schema:
- Use only when parameter requirements are unknown.
- Always provide:
  {
    "path": "<operation_path>"
  }
- Example:
  {
    "path": "gmail.api.messages.list"
  }
- Never use any other format.

run_script:
- Use only to execute Corsair operations.
- Always provide:
  {
    "code": "<javascript>"
  }
- Example:
  {
    "code": "return await corsair.gmail.api.messages.list({ maxResults: 10 });"
  }
- Never use:
  {
    "script": "..."
  }
- Never use corsair.execute(...).
- Always call operations directly.

Examples:
await corsair.gmail.api.messages.list(...)
await corsair.gmail.api.messages.get(...)
await corsair.gmail.api.messages.send(...)
await corsair.googlecalendar.api.events.create(...)
await corsair.googlecalendar.api.events.get(...)
await corsair.github.api.repositories.list(...)

AUTHENTICATION

- Do not assume authentication is missing.
- Only report an authentication issue if a tool explicitly returns an authentication or authorization error.
- If a tool succeeds, continue normally.

ERROR HANDLING

- Read tool errors carefully.
- If a schema issue is likely, call get_schema once.
- Retry at most one time.
- Never enter retry loops.
- Maximum retries: 1.

RESPONSE RULES

- Be concise and accurate.
- Summarize large datasets.
- Do not expose internal reasoning.
- Do not explain tool usage unless the user asks.
- Do not dump raw JSON unless the user explicitly requests it.
- Once the requested information has been obtained, provide the final answer immediately.
- if a user wants to do something with mail but he dont mention any email just a person name then you have to look for the name in contacts .

TOOL LOOP PREVENTION

Never:
- call list_operations twice for the same request
- call get_schema twice for the same operation
- call run_script repeatedly with equivalent code
- perform discovery after data retrieval

PRIORITY

1. Correctness
2. Minimal tool calls
3. Tool efficiency
4. Concise answers
5. Completeness
`,
    tools,
  });

  const stream = await run(agent,userMssg, {stream:true});

  return stream
}

