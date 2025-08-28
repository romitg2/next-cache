'use client';

import { useRevalidate } from "@/hooks/useRevalidate";
import { useRouter } from "next/navigation";

export default function Tags({ tags }: { tags: string[] }) {
    const { isRevalidating, error, revalidate } = useRevalidate();
    const router = useRouter();

    return (
        <div>
            {
                tags.map((tag) => (
                    <div key={tag}>
                        <h1>Tag: {tag}</h1>
                        <div>
                            <button disabled={isRevalidating} onClick={() => revalidate(tag)}>Revalidate</button>
                        </div>
                        <div>
                            <button onClick={() => router.push(`/blogs/${tag}`)}>go</button>
                        </div>
                        <h1>------- </h1>
                    </div>
                ))
            }
            {error && <p>{error}</p>}
        </div>
    )
}