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
        <>
            <div className="grid grid-cols-3">
                <div className="col-span-2 mr-2">
                    <div id="home-slot">
                        <h2 className="flex items-center gap-6">
                            <HugeiconsIcon icon={WavingHand02Icon} size={40} />
                            Hello there!
                        </h2>

                        <p>
                            My name is Shellby, welcome to my little website.
                            I&#39;m a little otter who draws smol and fluffy
                            art. Feel free to stick around and have fun!{" "}
                            <span className="text-primary"></span>
                        </p>

                        <p>
                            I occasionally stream on
                            <Mark color="var(--color-twitch)">
                                <a href="https://www.twitch.tv/cookiecollie">
                                    Twitch
                                </a>
                            </Mark>
                            , too! Feel free to drop by if you like!{" "}
                            <span className="text-primary"></span>
                        </p>
                    </div>

                    <div id="home-slot">
                        <h2 className="flex items-center gap-6">
                            <HugeiconsIcon icon={PaintBoardIcon} size={40} />
                            Commission
                        </h2>

                        <p>
                            Wanna commission me? Here&#39;s
                            <Mark>
                                <Link href={"/commission"}>how</Link>
                            </Mark>
                            !
                        </p>
                    </div>

                    <div id="home-slot">
                        <h2 className="flex items-center gap-6">
                            <HugeiconsIcon icon={EarthIcon} size={40} />
                            Socials
                        </h2>

                        <p>You can find me here, too!</p>

                        <div className="mt-3 flex gap-2">
                            <a href="https://bsky.app/profile/nikkoscribblo.bsky.social">
                                <Button color="var(--color-bluesky)">
                                    Bluesky
                                </Button>
                            </a>
                            <a href="https://www.twitch.tv/cookiecollie">
                                <Button color="var(--color-twitch)">
                                    Twitch
                                </Button>
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
                </div>

                <Image
                    src={"/pfp.p"}
                    alt="Profile pic"
                    width={400}
                    height={400}
                    className="border-separator rounded-full border-4"
                />
            </div>

            <div className="relative mt-12 h-[15rem] overflow-hidden">
                <Image
                    src={"/footer_img.p"}
                    width={4096}
                    height={4096}
                    alt="Footer Image"
                    className="absolute -top-[4rem]"
                />
            </div>
        </>
    )
}
