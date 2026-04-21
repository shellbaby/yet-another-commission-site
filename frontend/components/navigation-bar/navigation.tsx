"use client"

import { SessionDestroy } from "@/services/auth/auth-service"
import { GeneralError } from "@/types/error"
import { Avatar } from "@ark-ui/react/avatar"
import { Menu } from "@ark-ui/react/menu"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Navigation = ({ clientPfp }: { clientPfp?: string }) => {
    const router = useRouter()

    const signout = async () => {
        await SessionDestroy().catch((error: GeneralError) => {
            console.log(error)
        })

        await fetch("/api/auth/session/sign-out", {
            method: "GET",
        })
            .catch((error: GeneralError) => {
                console.error(error)
            })
            .then(() => {
                router.refresh()
            })
    }

    return (
        <nav className="flex h-20 items-center justify-between [&_a]:hover:underline">
            <Link
                href={"/"}
                className="flex h-full items-center px-2 focus-visible:font-bold focus-visible:underline focus-visible:outline-none"
            >
                home
            </Link>
            <div className="flex h-full items-center gap-4 [&>a]:flex [&>a]:h-full [&>a]:items-center [&>a]:px-2 [&>a:focus-visible]:font-bold [&>a:focus-visible]:underline [&>a:focus-visible]:outline-none">
                <Menu.Root
                    positioning={{
                        offset: { mainAxis: -18 },
                        placement: "bottom-end",
                    }}
                >
                    <Menu.Trigger>
                        commission
                        <Menu.Indicator>
                            <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                        </Menu.Indicator>
                    </Menu.Trigger>

                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Arrow>
                                <Menu.ArrowTip />
                            </Menu.Arrow>
                            <Menu.Item asChild value="prices">
                                <Link href={"/commission"}>prices</Link>
                            </Menu.Item>
                            <Menu.Item asChild value="tos">
                                <Link href={"/tos"}>terms of service</Link>
                            </Menu.Item>
                            <Menu.Item asChild value="form">
                                <Link href={"/form"}>commission form</Link>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Menu.Root>
                <Link href={"/gallery"}>gallery</Link>
                <Link href={"/contact"}>contact</Link>
                {clientPfp ? (
                    <Menu.Root
                        positioning={{
                            offset: { mainAxis: -3 },
                            placement: "bottom-end",
                        }}
                    >
                        <Menu.Trigger>
                            <Avatar.Root>
                                <Avatar.Fallback asChild>
                                    <Image
                                        src={
                                            "https://cdn.bsky.app/img/avatar/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreifxtxkn6xkkwb3mcbxyphnysvo5y3lj5foz5a7d2mian3sku6ccjm"
                                        }
                                        alt="fallback avatar"
                                        width={590}
                                        height={590}
                                    />
                                </Avatar.Fallback>
                                <Avatar.Image alt="avatar" src={clientPfp} />
                            </Avatar.Root>
                        </Menu.Trigger>

                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Arrow>
                                    <Menu.ArrowTip />
                                </Menu.Arrow>
                                <Menu.Item value="profile" asChild>
                                    <Link href={"/profile"}>Your Profile</Link>
                                </Menu.Item>
                                <Menu.Item value="sign-out" onClick={signout}>
                                    Sign Out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Menu.Root>
                ) : (
                    <Link href={"/sign-in"}>sign in</Link>
                )}
            </div>
        </nav>
    )
}
