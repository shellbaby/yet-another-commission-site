import { Button, Mark } from "@/components"
import {
    EarthIcon,
    PaintBoardIcon,
    WavingHand02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"
import "./page.css"

export default function Page() {
    return (
        <div className="mt-8">
            <div className="grid grid-cols-3">
                <div className="col-span-2 mr-2">
                    <h2 className="flex items-center gap-4">
                        <HugeiconsIcon icon={WavingHand02Icon} size={40} />
                        Hello there!
                    </h2>
                    <p className="mt-4 indent-8">
                        My name is Shellby, welcome to my little website.
                        I&#39;m a little otter who draws smol and fluffy art.
                        Feel free to stick around and have fun! 
                    </p>

                    <p className="mt-4 indent-8">
                        I occasionally stream on
                        <Mark color="var(--color-twitch)">
                            <a href="https://www.twitch.tv/cookiecollie">
                                Twitch
                            </a>
                        </Mark>
                        , too! Feel free to drop by if you like! 
                    </p>

                    <h2 className="mt-8 flex items-center gap-4">
                        <HugeiconsIcon icon={PaintBoardIcon} size={40} />
                        Commission
                    </h2>
                    <p className="mt-4 indent-8">
                        Wanna commission me? Here&#39;s
                        <Mark>
                            <Link href={"/commission"}>how</Link>
                        </Mark>
                        !
                    </p>

                    <h2 className="mt-8 flex items-center gap-4">
                        <HugeiconsIcon icon={EarthIcon} size={40} />
                        Socials
                    </h2>
                    <p className="mt-4 indent-8">You can find me here, too!</p>
                    <div className="mt-4 flex gap-2">
                        <a href="https://bsky.app/profile/nikkoscribblo.bsky.social">
                            <Button color="var(--color-bluesky)">
                                Bluesky
                            </Button>
                        </a>
                        <a href="https://www.twitch.tv/cookiecollie">
                            <Button color="var(--color-twitch)">Twitch</Button>
                        </a>
                        <a href="https://t.me/littlelambyderg">
                            <Button color="var(--color-telegram)">
                                Telegram
                            </Button>
                        </a>
                        <a href="https://discord.com/users/845590906543407104">
                            <Button color="var(--color-discord)">
                                Discord
                            </Button>
                        </a>
                    </div>
                </div>

                <Image
                    src={"/pfp.png"}
                    alt="Profile pic"
                    width={400}
                    height={400}
                    className="roud rounded-full border-4 border-red-400"
                />
            </div>

            <div className="relative mt-8 h-[15rem] overflow-hidden">
                <Image
                    src={"/footer_img.png"}
                    width={4096}
                    height={4096}
                    alt="Footer Image"
                    className="absolute -top-[4rem]"
                />
            </div>
        </div>
    )
}
