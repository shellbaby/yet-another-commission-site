import { CarouselInner, CarouselSlide } from "@/components/custom/carousel";
import { LinkButton } from "@/components/custom/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    const exampleImgs: CarouselSlide[] = [
        {
            src: "/static/images/prices/example-4.webp",
            alt: "",
        },

        {
            src: "/static/images/prices/example-2.webp",
            alt: "",
        },

        {
            src: "/static/images/prices/example-5.webp",
            alt: "",
        },

        {
            src: "/static/images/prices/example-0.webp",
            alt: "",
        },

        // {
        //     src: "/static/images/prices/example-6.webp",
        //     alt: "",
        //     width: 5340,
        // },
    ];

    return (
        <>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-center">commission</h3>

                        <Separator />

                        <div className="grid grid-cols-8 gap-8">
                            <div className="col-span-3 flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <h5>simple drawing</h5>
                                    <h6>price: $30/character</h6>
                                </div>

                                <ul className="list-inside list-[square]">
                                    <li>Full body drawing</li>
                                    <li>Simple background</li>
                                    <li>Simple shading and highlighting</li>
                                    <li>Extra character: $30</li>
                                </ul>
                            </div>

                            <Carousel className="col-span-5">
                                <CarouselInner
                                    slides={exampleImgs}
                                    fallbackDimension={{
                                        width: 4096,
                                        height: 4096,
                                    }}
                                    slideSize="50%"
                                />
                            </Carousel>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-8">
                            <h5 className="text-center">
                                ready to commission?
                            </h5>
                            <div className="flex flex-col gap-4">
                                <LinkButton href={"/commission/form"}>
                                    I want this!
                                </LinkButton>

                                <LinkButton
                                    href={"/commission/tos"}
                                    variant="secondary"
                                >
                                    Terms of Service
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
