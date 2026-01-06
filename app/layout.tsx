import { Navigation } from "@/components"
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={AnonymicePro.className}>
            <body>
                <header className="mt-4">
                    <Navigation />
                </header>

                <span className="mt-4 block h-1 w-full bg-red-400" />

                {children}

                <div className="my-8 text-center">
                    <small>
                        Copyright  2025 shellbaby. All Rights Reserved.
                    </small>
                </div>
            </body>
        </html>
    )
}
