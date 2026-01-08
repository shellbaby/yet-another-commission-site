import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { Popover } from "../popover/popover"

export const Navigation = () => {
    return (
        <nav className="flex h-20 items-center justify-between [&_a]:hover:underline">
            <Link href={"/"} className="flex h-full items-center px-2">
                home
            </Link>
            <div className="flex h-full items-center gap-4 [&>a]:flex [&>a]:h-full [&>a]:items-center [&>a]:px-2">
                <Popover.Root positioning={{ offset: { mainAxis: -18 } }}>
                    <Popover.Trigger className="h-full">
                        commission
                        <Popover.Indicator>
                            <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                        </Popover.Indicator>
                    </Popover.Trigger>

                    <Popover.Positioner>
                        <Popover.Content className="[&>a:hover]:bg-primary border-border rounded-default overflow-hidden border [&>a]:px-4 [&>a]:py-2 [&>a:hover]:text-white">
                            <Link href={"/commission"}>prices</Link>
                            <Link href={"/tos"}>terms of service</Link>
                            <Link href={"/form"}>commission form</Link>
                        </Popover.Content>
                    </Popover.Positioner>
                </Popover.Root>
                <Link href={"/gallery"}>gallery</Link>
                <Link href={"/contact"}>contact</Link>
            </div>
        </nav>
    )
}
