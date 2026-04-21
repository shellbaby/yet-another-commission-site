import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://storage.ko-fi.com/cdn/useruploads/post/**"),
            new URL("https://cdn.bsky.app/**"),
        ],
    },
}

export default nextConfig
