import { NextResponse } from "next/server";

// TODO(system): deliver messages to email / CRM.
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.name || !body.contact || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }
  console.info("[contact:message]", body);
  return NextResponse.json({ ok: true });
}
