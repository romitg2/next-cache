import { NextRequest, NextResponse } from "next/server";
import { availableTags } from "../blogs/tech_blogs";

async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return NextResponse.json(availableTags);
}

export { GET };
