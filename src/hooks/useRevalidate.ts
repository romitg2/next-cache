'use client';

import { useState } from "react";

export function useRevalidate() {
    const [isRevalidating, setIsRevalidating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const revalidate = async (tags: string[] | string) => {
        try {
            setIsRevalidating(true);
            setError(null);
            if(Array.isArray(tags)) {
                await Promise.all(tags.map(tag => fetch(`/api/revalidate`, {
                    method: "POST",
                    body: JSON.stringify({ tag: tag })
                })));
            } else {
                await fetch(`/api/revalidate`, {
                    method: "POST",
                    body: JSON.stringify({ tag: tags })
                });
            }
        } catch (error) {
            setError("error revalidating tags");
        } finally {
            setIsRevalidating(false);
        }
    }

    return {
        isRevalidating,
        error,
        revalidate
    }
}