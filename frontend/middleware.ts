import { NextRequest, NextResponse } from "next/server"

const allowedOrigins = ["https://qilin.cafe", "https://api.qilin.cafe"]
const allowedOriginsDev = ["http://localhost:3333", "http://localhost:3000"]

const corsOptions = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin") ?? ""
    const originsToUse =
        process.env.NODE_ENV === "development"
            ? allowedOriginsDev
            : allowedOrigins
    const isAllowedOrigin = originsToUse.includes(origin)

    const isPreflight = request.method === "OPTIONS"

    if (isPreflight) {
        const preflightHeaders = {
            ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
            ...corsOptions,
        }
        return NextResponse.json({}, { headers: preflightHeaders })
    }

    const response = NextResponse.next()

    if (isAllowedOrigin) {
        response.headers.set("Access-Control-Allow-Origin", origin)
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value)
    })

    return response
}

export const config = {
    matcher: ["/:path*", "/"],
}
