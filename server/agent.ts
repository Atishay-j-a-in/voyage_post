import { OpenAIAgentsProvider } from '@corsair-dev/mcp';
import { Agent, run, tool, setOpenAIAPI, setTracingDisabled } from '@openai/agents';
import { corsair } from '@/lib/corsair';
import { db } from '@/db/db';
import { contactAlias } from '@/db/schema';
import { eq } from 'drizzle-orm';
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

  const contacts = await db
    .select({ name: contactAlias.name, email: contactAlias.emailid })
    .from(contactAlias)
    .where(eq(contactAlias.tenantid, tenantId));

  const contactsBlock = contacts.length > 0
    ? `The user has the following saved contacts:\n${contacts.map(c => `- ${c.name} <${c.email}>`).join("\n")}`
    : "The user has no saved contacts yet.";

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

CONTACTS

${contactsBlock}

When the user mentions a person by name (e.g. "find emails from John"), match the name against the contacts list above to get their email address. Then use that email in your corsair tool calls.

AVAILABLE TOOLS

You have exactly TWO tools:

1. list_operations — call with no arguments to discover available operations.
2. run_script — call with a "code" argument containing JavaScript to execute.

IMPORTANT: Do NOT call get_schema. All schemas are provided below. Go directly to run_script.

WORKFLOW

1. Understand the user's request.
2. Look up the operation below and its code pattern.
3. Execute using run_script with the correct code.
4. Return the final answer immediately.
5. Stop.

CODE PATTERNS — GMAIL

List messages:
return await corsair.gmail.api.messages.list({ maxResults: 10, q: "newer_than:30d" });

Get a message by id:
return await corsair.gmail.api.messages.get({ id: "MESSAGE_ID", format: "metadata", metadataHeaders: ["Subject", "From", "Date"] });

Send an email:
return await corsair.gmail.api.messages.send({
  to: "recipient@example.com",
  subject: "Subject line",
  body: "Email body text"
});

Search messages:
return await corsair.gmail.api.messages.list({ q: "from:example@example.com", maxResults: 10 });

CODE PATTERNS — GOOGLE CALENDAR

List events:
return await corsair.googlecalendar.api.events.list({ timeMin: "2025-01-01T00:00:00Z", timeMax: "2025-01-31T23:59:59Z", maxResults: 10 });

Create an event:
return await corsair.googlecalendar.api.events.create({
  summary: "Meeting Title",
  description: "Meeting description",
  start: { dateTime: "2025-01-15T10:00:00+05:30", timeZone: "Asia/Kolkata" },
  end: { dateTime: "2025-01-15T11:00:00+05:30", timeZone: "Asia/Kolkata" },
  attendees: [{ email: "attendee@example.com" }]
});

Get an event:
return await corsair.googlecalendar.api.events.get({ eventId: "EVENT_ID" });

RULES

- Always use run_script for operations. Never use corsair.execute(...).
- Call operations directly on corsair (e.g. corsair.gmail.api.messages.send(...)).
- If list_operations is needed to discover an operation not listed above, call it once.

AUTHENTICATION

- Do not assume authentication is missing.
- Only report an authentication issue if a tool explicitly returns an authentication or authorization error.

ERROR HANDLING

- Read tool errors carefully.
- Retry at most one time.
- Never enter retry loops.

RESPONSE RULES

- Be concise and accurate.
- Summarize large datasets.
- Do not expose internal reasoning.
- Do not explain tool usage unless the user asks.
- Once the requested information has been obtained, provide the final answer immediately.

PRIORITY

1. Correctness
2. Minimal tool calls
3. Concise answers
`,
    tools,
  });

  const stream = await run(agent,userMssg, {stream:true});

  return stream
}

