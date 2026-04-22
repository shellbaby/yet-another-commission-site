import { Navigation } from "@/components"
import { ClientContextProvider } from "@/context/client-context"
import { ClientShow } from "@/services/client/clients-service"
import { ShowClientDTO } from "@/types/clients"
import localFont from "next/font/local"
import "../components/style"
import "./globals.css"
import "./layout.css"

const AnonymicePro = localFont({
    src: [
        {
            path: "../public/font/AnonymiceProNerdFont-Regular.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../public/font/AnonymiceProNerdFont-Bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
})

const getClient = async () => {
    const client = await ClientShow()
    return client.json()
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const client = (await getClient()) as ShowClientDTO

    return (
        <html lang="en" className={AnonymicePro.className}>
            <body className="flex min-h-dvh flex-col">
                <ClientContextProvider client={{ ...client }}>
                    <header className="my-4">
                        <Navigation />
                    </header>

                    <hr />

                    <div className="mt-12 flex-1">{children}</div>

                    <div className="my-12 text-center">
                        <small>
                            Copyright  2025 shellbaby. All Rights Reserved.
                        </small>
                    </div>
                </ClientContextProvider>
            </body>
        </html>
    )
}
