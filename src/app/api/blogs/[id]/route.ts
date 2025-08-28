import { NextRequest, NextResponse } from "next/server";
import { blogs } from "../tech_blogs";

async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const delay = 5000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const { id } = await params;
  const blog = blogs.find((blog) => blog.tags.includes(id));
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json(blog);
}

export { GET };