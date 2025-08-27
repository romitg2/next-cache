import { NextRequest, NextResponse } from "next/server";
import { blogs, availableTags, type Blog } from "./tech_blogs";

async function getBlogs(tags: string[]) {
  const filteredBlogs = blogs.filter((blog) => {
    return tags.every((tag) => blog.tags.includes(tag));
  });
  return Promise.resolve(filteredBlogs);
}

async function createBlog(blog: Blog) {
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };
  blogs.push(newBlog);
  return Promise.resolve(newBlog);
}

async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tags = searchParams.get("tags");
  const blogs = await getBlogs(tags ? tags.split(",") : []);

  return NextResponse.json(blogs);
}

async function POST(req: NextRequest) {
  try {
    const blog = await req.json();
    const newBlog = await createBlog(blog);
    return NextResponse.json(newBlog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

export { GET, POST };
