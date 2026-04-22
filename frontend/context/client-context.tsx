"use client"

import { ShowClientDTO } from "@/types/clients"
import { createContext, PropsWithChildren } from "react"

type ClientContextType = Partial<ShowClientDTO>

export const ClientContext = createContext<ClientContextType>({})

export const ClientContextProvider = ({
    children,
    client,
}: PropsWithChildren & { client: ClientContextType }) => {
    return <ClientContext value={client}>{children}</ClientContext>
}
