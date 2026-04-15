import { ShowClientDTO, StoreClientDTO, UpdateClientDTO } from "@/types/clients"
import { APIResponse } from "@shellbaby/shared/api-response"
import { customFetch } from "../base-service"

export const clientsService = {
    store: (data: StoreClientDTO) => {
        return customFetch<APIResponse>("clients", {
            method: "POST",
            body: JSON.stringify(data),
        })
    },

    show: (uuid: string) => {
        return customFetch<ShowClientDTO>(`clients/${uuid}`, {
            method: "GET",
        })
    },

    update: (
        uuid: string,
        data: UpdateClientDTO,
        method: "PUT" | "PATCH" = "PATCH"
    ) => {
        return customFetch<UpdateClientDTO>(`clients/${uuid}`, {
            method: method,
            body: JSON.stringify(data),
        })
    },

    destroy: (uuid: string) => {
        return customFetch<void>(`clients/${uuid}`, {
            method: "DELETE",
        })
    },
}
