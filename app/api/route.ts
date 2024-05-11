import type { NextRequest } from "next/server";

const perPage = 7;
const data = new Array(80).fill(null).map((_, i) => (i + 1).toString());

function getPage(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  if (!page) return 0;
  const parsed = parseInt(page, 10);
  if (isNaN(parsed)) return 0;
  return parsed;
}

export function GET(request: NextRequest) {
  const page = getPage(request);
  const query = request.nextUrl.searchParams.get("query");
  const filteredData = query
    ? data.filter((item) => item.includes(query))
    : data;
  const start = page * perPage;
  const end = start + perPage;
  const pageData = filteredData.slice(start, end);
  return Response.json(pageData);
}

export const revalidate = 0;
