import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return new Response(`${request.ip} from ${JSON.stringify(request.geo)}`);
}
