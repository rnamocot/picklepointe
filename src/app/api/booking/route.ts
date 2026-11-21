import { NextResponse } from "next/server";

// TODO(system): persist bookings, check court availability and notify staff.
// For now this validates the request and returns a reference number.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const { date, hour, name, phone } = body as { date?: string; hour?: number; name?: string; phone?: string };
  if (!date || typeof hour !== "number" || !name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }
  const reference = `PP-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  console.info("[booking:request]", reference, body);
  return NextResponse.json({ ok: true, reference });
}
