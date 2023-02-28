import { NextRequest, NextResponse } from "next/server";
import getData from "./get-data";

export async function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const page = parseInt(searchParams.get("page") ?? "1");
  return NextResponse.json(await getData(page));
}
