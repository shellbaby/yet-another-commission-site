import { CarouselInner, CarouselSlide } from "@/components/custom/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { ButterflyIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
    const showcaseImgs: CarouselSlide[] = [
        {
            src: "/static/images/home/showcase-myko.webp",
            alt: "Myko, my Qilin/Pixiu OC",
        },

        {
            src: "/static/images/home/showcase-shellby.webp",
            alt: "Shellby, my otter OC",
        },

        {
            src: "/static/images/home/showcase-berry.webp",
            alt: "Berry, my bunny dragon OC",
        },
    ];

    return (
        <div className="grid grid-cols-8 gap-8">
            <div className="col-span-5 flex flex-col gap-8">
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <h4 className="">about me</h4>

                            <p>
                                Hey there! My name is Myko, welcome to my little
                                website.
                            </p>

                            <p>
                                I&#39;m a pink little Qilin/Pixiu who draws smol
                                and fluffy art. You may also know me as Shellby
                                the brown otter, or Berry the blue bunny dragon.
                                Feel free to stick around and have fun!
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <h4>commission</h4>

                            <h6>Commission is currently: Open</h6>

                            <div>
                                <p>What I&#39;m currently providing:</p>
                                <ul className="list-inside list-[square]">
                                    <li>Simple Drawing</li>
                                </ul>
                            </div>

                            <p>
                                For more information, please check the{" "}
                                <Link
                                    href={"/commission/form"}
                                    className="underline"
                                >
                                    commission form
                                </Link>{" "}
                                and the{" "}
                                <Link
                                    href={"/commission/tos"}
                                    className="underline"
                                >
                                    Terms of Service.
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="col-span-3 flex flex-col gap-4">
                <Carousel>
                    <CarouselInner
                        slides={showcaseImgs}
                        fallbackDimension={{ width: 4096, height: 4096 }}
                    />
                </Carousel>

                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <h6>find me here!</h6>

                            <div className="flex justify-center">
                                <a
                                    href="https://bsky.app/profile/poofy-eggnog.bsky.social"
                                    className="text-bluesky"
                                >
                                    <ButterflyIcon size={24} />
                                </a>
                                {/* Add more sites, e.g. Mousepad, etc. */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
