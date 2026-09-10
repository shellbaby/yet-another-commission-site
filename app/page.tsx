import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
    const showcaseImgs: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }[] = [
        {
            src: "/static/images/home/showcase-myko.webp",
            alt: "Myko, my Qilin/Pixiu OC",
            width: 4096,
            height: 4096,
        },

        {
            src: "/static/images/home/showcase-shellby.webp",
            alt: "Shellby, my otter OC",
            width: 4096,
            height: 4096,
        },

        {
            src: "/static/images/home/showcase-berry.webp",
            alt: "Berry, my bunny dragon OC",
            width: 4096,
            height: 4096,
        },
    ];

    return (
        <div className="grid grid-cols-8 gap-8">
            <div className="col-span-5">
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
            </div>

            <div className="col-span-3">
                <Carousel>
                    <CarouselContent>
                        {showcaseImgs.map((img, idx) => (
                            <CarouselItem key={idx}>
                                <Image
                                    alt={img.alt}
                                    src={img.src}
                                    width={img.width}
                                    height={img.height}
                                />
                                <span className="bg-white px-1 text-sm whitespace-nowrap select-none">
                                    {img.alt}
                                </span>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
