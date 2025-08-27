export default async function Home() {
  const tagsData = await fetch("http://localhost:3000/api/tags", {
    next: {revalidate: 1}
  }).then((res) => res.json());

  return (
    <div>
      {tagsData && tagsData.length > 0 ? (
        tagsData.map((tag: string, index: number) => (
          <div key={index}>
            <button>{tag}</button>
          </div>
        ))
      ) : (
        <p>No tags available</p>
      )}
    </div>
  );
}
