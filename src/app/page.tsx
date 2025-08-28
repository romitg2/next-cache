import Tags from "@/components/Tags";

export default async function Home() {
  const tagsData = await fetch("http://localhost:3000/api/tags", {
    next: {revalidate: 1}
  }).then((res) => res.json());

  return (
    <div>
      <Tags tags={tagsData} />
    </div>
  );
}