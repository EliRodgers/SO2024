import { competitorsExample } from "./data";

export async function GET() {
  return Response.json(competitorsExample);
}

export async function POST() {
  return new Response("");
}
