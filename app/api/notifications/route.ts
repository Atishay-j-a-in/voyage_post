import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/db";
import { notifications } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

/**
 * GET /api/notifications
 * Returns the most recent notifications for the current tenant
 * (email summaries, mailbox updates, etc.).
 */
export async function GET(): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(notifications)
    .where(eq(notifications.tenantId, userId))
    .orderBy(desc(notifications.createdAt))
    .limit(10);

  return NextResponse.json({ notifications: rows });
}
