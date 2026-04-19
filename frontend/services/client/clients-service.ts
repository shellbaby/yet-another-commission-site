import { ShowClientDTO, StoreClientDTO, UpdateClientDTO } from "@/types/clients"
import { APIResponse } from "@shellbaby/shared/api-response"
import { customFetch } from "../base-service"

const root = "client"
export const clientsService = {
    store: (data: StoreClientDTO) => {
        return customFetch<APIResponse<{ message: string }>>(root, {
            method: "POST",
            body: JSON.stringify(data),
        })
    },

    show: () => {
        return customFetch<ShowClientDTO>(root, {
            method: "GET",
        })
    },

    update: (data: UpdateClientDTO) => {
        return customFetch<UpdateClientDTO>(root, {
            method: "PATCH",
            body: JSON.stringify(data),
        })
    },

    destroy: () => {
        return customFetch<void>(root, {
            method: "DELETE",
        })
    },
}
