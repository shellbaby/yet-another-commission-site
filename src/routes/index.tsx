import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="grid grid-cols-8 gap-8">
            <div className="col-span-5 flex flex-col gap-8">
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <h4 className="">about me</h4>

                            <p>Hey there! My name is Myko, welcome to my little website.</p>

                            <p>
                                I&#39;m a pink little Qilin/Pixiu who draws smol and fluffy art. You
                                may also know me as Shellby the brown otter, or Berry the blue bunny
                                dragon. Feel free to stick around and have fun!
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
                                <Link to={"/commission/form"} className="underline">
                                    commission form
                                </Link>{" "}
                                and the{" "}
                                <Link to={"/commission/tos"} className="underline">
                                    Terms of Service.
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="col-span-3 flex flex-col gap-4">
                <Carousel>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-[10px]">
                                    <Card className="bg-main text-main-foreground p-0 shadow-none">
                                        <CardContent className="flex aspect-square items-center justify-center p-4">
                                            <span className="font-base text-3xl">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
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
                                    <Globe size={24} />
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
