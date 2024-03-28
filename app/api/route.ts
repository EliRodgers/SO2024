import { competitors } from "./data";

export async function GET() {
  return Response.json(competitors);
}

export async function POST() {
  return new Response("");
}
