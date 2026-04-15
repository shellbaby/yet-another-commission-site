import { PartialExcept, PartialOnly } from "@/utils/types-util"

export interface Client {
    username: string
    email: string
    name: string
    password: string
    created_at: Date
    updated_at: Date
}

export type StoreClientDTO = Omit<PartialOnly<Client, "name">, "updated_at">
export type ShowClientDTO = Omit<
    PartialOnly<Client, "name">,
    "created_at" | "updated_at"
>
export type UpdateClientDTO = Omit<
    PartialExcept<Client, "updated_at">,
    "created_at"
>
