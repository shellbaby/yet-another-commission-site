import localFont from "next/font/local"
import Link from "next/link"
import "./globals.css"
import "./layout.css"

const FiraCodeMono = localFont({
    src: [
        {
            path: "../public/FiraCodeNerdFontMono-Regular.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../public/FiraCodeNerdFontMono-Light.ttf",
            weight: "300",
            style: "light",
        },

        {
            path: "../public/FiraCodeNerdFontMono-Medium.ttf",
            weight: "500",
            style: "medium",
        },

        {
            path: "../public/FiraCodeNerdFontMono-SemiBold.ttf",
            weight: "600",
            style: "semibold",
        },

        {
            path: "../public/FiraCodeNerdFontMono-Bold.ttf",
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
        <html lang="en" className={FiraCodeMono.className}>
            <body>
                <header className="mt-4">
                    <nav className="flex h-20 items-center justify-between [&_a]:hover:underline">
                        <Link
                            href={"/"}
                            className="flex h-full items-center px-2"
                        >
                            home
                        </Link>
                        <div className="flex h-full items-center gap-4 [&>a]:flex [&>a]:h-full [&>a]:items-center [&>a]:px-2">
                            <Link href={"/commission"}>commission</Link>
                            <Link href={"/"}>contact</Link>
                        </div>
                    </nav>
                </header>

                <span className="mt-4 block h-1 w-full bg-red-400" />

                {children}

                <div className="my-8 text-center">
                    <small>
                        Copyright 2025 shellbaby. All Rights Reserved.
                    </small>
                </div>
            </body>
        </html>
    )
}
