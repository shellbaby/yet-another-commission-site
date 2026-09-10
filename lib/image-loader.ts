"use client";

export default function imageLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    const isDev = process.env.NODE_ENV === "development";
    const domain = process.env.IMAGE_BUCKET_DOMAIN;

    const path = src.startsWith("/") ? src : `/${src}`;

    if (isDev) {
        return `/api/image?path=${encodeURIComponent(path)}&w=${width}&q=${quality || 75}`;
    }

    return `https://${domain}${path}`;
}
