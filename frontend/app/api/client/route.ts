"use server"

import { StoreClientDTO } from "@/types/clients"
import { HttpStatus } from "@shellbaby/shared/http-status"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const CLIENT_API = `${process.env.API_URL}/client`

// Store client (sign up) //
export async function POST(request: NextRequest) {
    const data = (await request.json()) as StoreClientDTO
    console.log(data)
    const response = await fetch(CLIENT_API, {
        method: "POST",
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        return NextResponse.json(
            {},
            { status: response.status, statusText: response.statusText }
        )
    }

    const setCookieHeader = response.headers.getSetCookie()
    const rawSignupStatus = setCookieHeader.find((cookie) =>
        cookie.startsWith("signup_status=")
    )

    if (!rawSignupStatus) {
        return NextResponse.json(
            {},
            {
                status: HttpStatus.FORBIDDEN,
                statusText: "Status not found",
            }
        )
    }

    const value = rawSignupStatus.split(";")[0].split("=")[1]
    const cookieStore = await cookies()
    cookieStore.set("signup_status", decodeURIComponent(value), {
        httpOnly: true,
        maxAge: 3600,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    })

    return NextResponse.json(
        {},
        { status: HttpStatus.OK, statusText: "Client created, check email" }
    )
}

// Show client (get client info) //
// export async function GET(request: NextRequest) {
//     const cookieStore = await cookies()
//     const token = cookieStore.get("qilin_token")?.value

//     const response = await fetch(CLIENT_API, {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })

//     if (!response.ok) {
//         if (response.status === HttpStatus.UNAUTHORIZED) {
//             return NextResponse.json(
//                 { data: {} },
//                 {
//                     status: HttpStatus.OK,
//                 }
//             )
//         }

//         return NextResponse.json(
//             {},
//             { status: response.status, statusText: response.statusText }
//         )
//     }

//     return NextResponse.json(
//         {
//             data: response.body,
//         },
//         { status: HttpStatus.OK }
//     )
// }
