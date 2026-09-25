import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, CircleX, LucideProvider } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/commission/tos")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-center">Terms of Service</h3>

                        <Accordion defaultValue={["general"]}>
                            <AccordionItem value="general">
                                <AccordionTrigger>General Terms</AccordionTrigger>
                                <AccordionContent>
                                    <div className="pb-8">
                                        <div className="grid grid-cols-5 gap-x-8">
                                            <div className="col-span-2">
                                                <Skeleton className="h-full" />
                                            </div>
                                            <ul className="col-span-3 flex list-inside list-[square] flex-col gap-4">
                                                <li>
                                                    You can use the commissioned arts for personal
                                                    purposes, including posting on social media
                                                    platforms or galleries, as long as you do{" "}
                                                    <b>NOT</b> claim them as your own or make any
                                                    profit from them. Proper credits <b>MUST</b> be
                                                    included.
                                                </li>

                                                <li>
                                                    Two versions of the drawing will be provided:
                                                    one is for posting online, the other is the full
                                                    resolution. You <b>MUST</b> use the one marked
                                                    for posting online for such purpose.
                                                </li>

                                                <li>
                                                    I maintain the right to deny any commissions,
                                                    for any reason, at my discretion.
                                                </li>

                                                <li>
                                                    I maintain the right to cancel the commission at
                                                    any time. A full refund will be issued to the
                                                    commissioner.
                                                </li>

                                                <li>
                                                    All the rights regarding the artworks belong to
                                                    me, including posting them, streaming, or using
                                                    them for promotional purposes. Please ask
                                                    beforehand if you wish to keep it private, I
                                                    will try to alter the colors of your character
                                                    before posting the piece.
                                                </li>

                                                <li>
                                                    <b>NO</b> party other than myself is allowed to
                                                    alter, trace, copy, or remove the watermark from
                                                    the completed artwork.
                                                </li>

                                                <li>
                                                    <b>NO</b> modifications to the finished artwork
                                                    should be made without my approval.
                                                </li>

                                                <li>
                                                    You can ask for a full refund before I start
                                                    working on your commission. After that, a refund
                                                    is <b>NOT</b> viable under any circumstances.
                                                </li>

                                                <li>
                                                    <b>NO</b> refund is possible once the artwork is
                                                    completed.
                                                </li>

                                                <li>
                                                    For YCHs, requests to change to a different pose
                                                    are <b>NOT</b> allowed.
                                                </li>

                                                <li>
                                                    I do <b>NOT</b> consent to let my artwork be
                                                    used in, but not limited to: AI training, AI
                                                    modifying, NFT, or hateful purposes.
                                                </li>
                                            </ul>
                                        </div>

                                        <h6 className="mt-8 text-center">
                                            Failure to follow the ToS will result in a total
                                            termination of any services, and a slot in the blacklist
                                        </h6>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="acceptable">
                                <AccordionTrigger>I will / will not draw</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-6 pb-8">
                                        <LucideProvider size={20}>
                                            <div className="col-span-4 grid grid-cols-2">
                                                <div>
                                                    <h6 className="text-success flex items-center gap-2">
                                                        <CircleCheck /> I will draw
                                                    </h6>

                                                    <ul className="mt-2 list-inside list-[square]">
                                                        <li>SFW</li>
                                                        <li>NSFW (please discuss with me first)</li>
                                                        <li>Furry or Anthropomorphic Characters</li>
                                                        <li>Chibi</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h6 className="text-error flex items-center gap-2">
                                                        <CircleX /> I will NOT draw
                                                    </h6>

                                                    <ul className="mt-2 list-inside list-[square]">
                                                        <li>Messy</li>
                                                        <li>Human</li>
                                                        <li>Overly Complexed Characters</li>
                                                        <li>Detailed Background</li>
                                                        <li>Gore</li>
                                                        <li>Mechs</li>
                                                        <li>Muscles</li>
                                                        <li>Religions</li>
                                                        <li>Licensed Characters</li>
                                                        <li>Self-harm</li>
                                                        <li>Hateful Content</li>
                                                    </ul>
                                                </div>

                                                <h6 className="col-span-full mt-8 text-center">
                                                    If you are unsure, ask me first
                                                </h6>
                                            </div>
                                        </LucideProvider>

                                        <div className="col-span-2">
                                            <Skeleton className="h-full" />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="extras">
                                <AccordionTrigger>Extra Info</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-5 gap-x-8">
                                        <div className="col-span-2">
                                            <Skeleton className="h-full" />
                                        </div>
                                        <ul className="col-span-3 flex list-inside list-[square] flex-col gap-4 pb-8">
                                            <li>
                                                I only accept payment via <b>Paypal invoices</b>.
                                            </li>
                                            <li>
                                                Payment is in <b>USD (US Dollar)</b>.
                                            </li>
                                            <li>
                                                At least one proper <b>reference sheet</b> or{" "}
                                                <b>visual representation</b> of your character must
                                                be provided. I will not draw solely through text
                                                description, nor design your character from scratch.
                                            </li>
                                            <li>
                                                I only accept references in either <b>PNG</b>,{" "}
                                                <b>JPEG</b>, <b>WEBP</b>, or <b>AVIF</b> format.
                                            </li>
                                            <li>
                                                Colors of your character might be altered to some
                                                lighter shades to match my pastel aesthetic.
                                            </li>
                                            <li>
                                                I will draw your character in 3-digit footpaws and 3
                                                or 4-digit handpaws.
                                            </li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
