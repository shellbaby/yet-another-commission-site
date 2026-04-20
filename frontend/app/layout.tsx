import { Navigation } from "@/components"
import { ClientShow } from "@/services/client/clients-service"
import { GeneralError } from "@/types/error"
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
        .catch((error: GeneralError) => {
            return null
        })
        .then((res) => {
            if (res) {
                return res.data
            }
        })

    return client
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const client = await getClient()

    return (
        <html lang="en" className={AnonymicePro.className}>
            <body className="flex min-h-dvh flex-col">
                <header className="my-4">
                    <Navigation clientName={client?.name ?? client?.username} />
                </header>

                <hr />

                <div className="mt-12 flex-1">{children}</div>

                <div className="my-12 text-center">
                    <small>
                        Copyright  2025 shellbaby. All Rights Reserved.
                    </small>
                </div>
            </body>
        </html>
    )
}
