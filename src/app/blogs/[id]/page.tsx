
export default async function Blog({ params }: { params: { id: string } }) {
  console.log("Blog page");
  const { id } = await params;
  const blog = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    next: {
        revalidate: 1,
        tags: ["blog"]
    }
  }).then((res) => res.json());
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}