import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  return NextResponse.json({ ok: true, message: "you get'ed" });
};

export const POST = async (request: Request) => {
  return NextResponse.json({ ok: true, message: "you post'ed" });
};
