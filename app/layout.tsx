import { NavigationMenu } from "@/components/custom/navigation-menu";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Qilin Cafe",
    description: "A cafe run by a qilin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                spaceMono.variable,
                "font-sans",
            )}
        >
            <body className="h-full min-h-full">
                <div className="mx-auto flex h-full w-full max-w-3xl flex-col">
                    <div className="mx-auto my-8 w-fit">
                        <NavigationMenu />
                    </div>
                    <div className="flex-1">{children}</div>
                    <div className="py-16 text-center">
                        <small>
                            Copyright&copy; 2026 shellbaby. All rights reserved.
                        </small>
                    </div>
                </div>
            </body>
        </html>
    );
}
