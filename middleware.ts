import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.ip);
  console.log(request.geo);
}
