import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.IMAGE_BUCKET_DOMAIN || "",
                port: "",
                pathname: "/**",
                search: "",
            },
        ],
        loader: "custom",
        loaderFile: "./lib/image-loader.ts",
    },
    agentRules: false,
};

export default nextConfig;
