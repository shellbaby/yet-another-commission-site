"use server"

import { SigninClientDTO } from "@/types/clients"
import { APIResponse } from "@shellbaby/shared/api-response"
import { cookies } from "next/headers"
import { customFetch } from "../base-service"

export const SessionStore = async (data: SigninClientDTO) => {
    return customFetch<APIResponse<{ token: string; type: "bearer" }>>(
        "auth/signin",
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    )
}

export const SessionDestroy = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get("qilin_token")?.value

    return customFetch<APIResponse>("auth/signout", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
