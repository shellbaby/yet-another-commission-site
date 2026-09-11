"use client";
import {
    CarouselContent,
    CarouselItem,
    useCarousel,
} from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";

export type CarouselSlide = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type CarouselApi = UseEmblaCarouselType[1];

export const CarouselInner = ({
    slides,
    fallbackDimension,
    slideSize = "100%",
}: {
    slides: CarouselSlide[];
    fallbackDimension: { width: number; height: number };
    slideSize?: string;
}) => {
    const { api } = useCarousel();
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [selectedSnap, setSelectedSnap] = useState(0);

    const goto = (index: number) => api?.scrollTo(index);
    const setupSnaps = (api: CarouselApi) =>
        setScrollSnaps(api?.scrollSnapList() || []);
    const setActiveSnap = (api: CarouselApi) =>
        setSelectedSnap(api?.selectedScrollSnap() || 0);

    useEffect(() => {
        if (!api) return;

        setupSnaps(api);
        setActiveSnap(api);

        api.on("reInit", setupSnaps);
        api.on("reInit", setActiveSnap);
        api.on("select", setActiveSnap);
    }, [api]);

    return (
        <>
            <CarouselContent>
                {slides.map((slide, idx) => (
                    <CarouselItem
                        key={idx}
                        style={
                            {
                                "--slide-size": slideSize,
                                flex: "0 0 var(--slide-size)",
                            } as CSSProperties
                        }
                    >
                        <Image
                            src={slide.src}
                            alt={slide.src}
                            width={slide.width ?? fallbackDimension.width}
                            height={slide.height ?? fallbackDimension.height}
                            className="object-cover select-none"
                        />
                        <span className="text-xs select-none">{slide.alt}</span>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="mt-2 flex justify-center gap-2">
                {scrollSnaps.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goto(idx)}
                        className="data-active:bg-muted h-4 w-4 cursor-pointer rounded-full border"
                        data-active={idx === selectedSnap}
                    />
                ))}
            </div>
        </>
    );
};
