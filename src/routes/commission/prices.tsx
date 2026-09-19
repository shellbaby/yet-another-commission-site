import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/commission/prices")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-center">commission</h3>

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
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-[10px]">
                                                <Card className="bg-main text-main-foreground p-0 shadow-none">
                                                    <CardContent className="flex aspect-square items-center justify-center p-4">
                                                        <span className="font-base text-3xl">
                                                            {index + 1}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h5 className="text-center">ready to commission?</h5>
                            <div className="flex flex-col gap-4">
                                <Button render={<Link to="/commission/form" />}>
                                    I want this!
                                </Button>

                                <Button render={<Link to="/commission/tos" />} variant={"neutral"}>
                                    Terms of Service
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
