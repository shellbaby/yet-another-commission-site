import { APIResponse } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { token } = await request.json()

    if (!token) {
        return NextResponse.json<APIResponse>({
            errors: [{ message: "Token is required" }],
            statusCode: HttpStatus.BAD_REQUEST,
            success: false,
        })
    }

    const cookieStore = await cookies()

    cookieStore.set("qilin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    })

    return NextResponse.json<APIResponse>({
        statusCode: HttpStatus.OK,
        success: true,
    })
}
