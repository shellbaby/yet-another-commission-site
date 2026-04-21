import { APIResponse } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    const cookieStore = await cookies()
    cookieStore.delete("qilin_token")
    return NextResponse.json<APIResponse>({
        statusCode: HttpStatus.OK,
        success: true,
    })
}
