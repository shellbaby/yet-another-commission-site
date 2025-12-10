import { SiBluesky, SiKofi, SiTwitch } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import "./page.css"

export default function Page() {
    return (
        <div className="mt-8">
            <div className="grid grid-cols-3">
                <div className="col-span-2 mr-2">
                    <h2>󱠢 Hello there!</h2>
                    <p className="mt-4 indent-8">
                        My name is Shellby, welcome to my little website.
                        I&#39;m a little otter who draws smol and fluffy art.
                        Feel free to stick around and have fun! 
                    </p>

                    <p className="mt-4 indent-8">
                        I occasionally stream on{" "}
                        <a
                            href="https://www.twitch.tv/cookiecollie"
                            className="text-[#6441a4] underline"
                        >
                            Twitch
                        </a>
                        , too! Feel free to drop by if you like! 
                    </p>

                    <h2 className="mt-8">󰸌 Commission</h2>
                    <p className="mt-4 indent-8">
                        Wanna commission me? Here&#39;s how! &#60;==
                    </p>

                    <h2 className="mt-8"> Contacts</h2>
                    <p className="mt-4 indent-8">You can find me here, too!</p>
                    <ul className="mt-4 [&>li]:mb-1 [&>li]:w-fit [&>li]:underline [&>li:last-child]:mb-0 [&>li>a]:flex [&>li>a]:items-center [&>li>a>svg]:mr-1">
                        <li>
                            <a href="https://bsky.app/profile/nikkoscribblo.bsky.social">
                                <SiBluesky size={16} />
                                <span>Bluesky</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitch.tv/cookiecollie">
                                <SiTwitch size={16} />
                                <span>Twitch</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://ko-fi.com/cookiecollie">
                                <SiKofi size={16} />
                                <span>Ko-fi</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <Image
                    src={"/pfp.png"}
                    alt="Profile pic"
                    width={400}
                    height={400}
                    className="rounded-full border-4 border-red-400"
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
