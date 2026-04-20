"use server"

import { ShowClientDTO, StoreClientDTO, UpdateClientDTO } from "@/types/clients"
import { APIResponse } from "@shellbaby/shared/api-response"
import { cookies } from "next/headers"
import { customFetch } from "../base-service"

const root = "client"

export const ClientStore = async (data: StoreClientDTO) => {
    return customFetch<APIResponse<{ message: string }>>(root, {
        method: "POST",
        body: JSON.stringify(data),
    })
}

export const ClientShow = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get("qilin_token")?.value

    return customFetch<APIResponse<ShowClientDTO>>(root, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const ClientUpdate = async (data: UpdateClientDTO) => {
    return customFetch<UpdateClientDTO>(root, {
        method: "PATCH",
        body: JSON.stringify(data),
    })
}

export const ClientDestroy = async () => {
    return customFetch<void>(root, {
        method: "DELETE",
    })
}
