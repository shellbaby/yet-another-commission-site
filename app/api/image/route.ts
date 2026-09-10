import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    if (process.env.NODE_ENV !== "development") {
        return new NextResponse("Not Found", { status: 404 });
    }

    const path = req.nextUrl.searchParams.get("path");
    if (!path) {
        return new NextResponse("No 'path' param", { status: 400 });
    }

    const secret = process.env.ANTI_HOTLINKING_SECRET;
    const domain = process.env.IMAGE_BUCKET_DOMAIN;
    const url = `https://${domain}${path}`;
    console.log(url)

    try {
        const res = await fetch(url, {
            headers: {
                "X-Anti-Hotlinking-Dev": secret || "",
            },
        });

        if (!res.ok) {
            return new NextResponse(`Fetch failed: ${res.statusText}`, {
                status: res.status,
            });
        }

        return new NextResponse(res.body, {
            headers: {
                "Content-Type":
                    res.headers.get("Content-Type") ||
                    "image/png,image/jpeg,image/webp",
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    }
}
