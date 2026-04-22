"use server"

import { StoreClientDTO } from "@/types/clients"
import { cookies } from "next/headers"

const BACKEND_API = `${process.env.API_URL}/client`
const FRONTEND_API = "/api/client"

export const ClientStore = async (data: StoreClientDTO) => {
    return fetch(FRONTEND_API, {
        method: "POST",
        body: JSON.stringify(data),
    })
}

export const ClientShow = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get("qilin_token")?.value

    return fetch(BACKEND_API, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

// export const ClientUpdate = async (data: UpdateClientDTO) => {
//     return customFetch<UpdateClientDTO>(root, {
//         method: "PATCH",
//         body: JSON.stringify(data),
//     })
// }

// export const ClientDestroy = async () => {
//     return customFetch<void>(root, {
//         method: "DELETE",
//     })
// }
