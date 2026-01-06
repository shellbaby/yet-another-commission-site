"use client"

import { Accordion } from "@/components"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function Page() {
    return (
        <div>
            <h2 className="my-12 text-center">Terms of Service</h2>
            <Accordion.Root defaultValue={["general"]}>
                <Accordion.Item value="general">
                    <Accordion.ItemTrigger>
                        General TOS
                        <Accordion.ItemIndicator>
                            <HugeiconsIcon icon={ArrowDown01Icon} />
                        </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <ul>
                            <li>
                                You can use the commissioned arts for personal
                                purposes, including posting on social media
                                platforms or galleries; as long as you do NOT
                                claim them as your own or make any profit from
                                them. Proper credits MUST be included.
                            </li>

                            <li>
                                Two versions of the drawing will be provided to
                                you: one is for posting online, the other is the
                                full resolution. You MUST use the one marked for
                                posting online for such purpose.
                            </li>

                            <li>
                                I maintain the right to deny any commissions for
                                any reason.
                            </li>

                            <li>
                                I maintain the right to cancel a commission at
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
                                No party other than myself is allowed to alter,
                                trace, copy, or remove the watermark from the
                                completed artworks.
                            </li>

                            <li>
                                No modifications to the finished artworks should
                                be made without my approval.
                            </li>

                            <li>
                                You can ask for a full refund before I start
                                working on your commission. After that, a refund
                                is NOT viable under any circumstances.
                            </li>

                            <li>
                                No refund is possible once the artwork is
                                completed.
                            </li>

                            <li>
                                For YCHs, requests for changes to the whole pose
                                are not allowed.
                            </li>

                            <li>
                                I am NOT consent to let my artworks be used in,
                                but not restricted to: AI training, AI
                                modifying, NFT, or hateful purposes.
                            </li>
                        </ul>

                        <h6 className="mt-6 text-center">
                            Failure to follow the ToS will result in a total
                            termination of any service, and a slot in the
                            blacklist
                        </h6>
                    </Accordion.ItemContent>
                </Accordion.Item>

                <Accordion.Item value="acceptable">
                    <Accordion.ItemTrigger>
                        I will/will not draw
                        <Accordion.ItemIndicator>
                            <HugeiconsIcon icon={ArrowDown01Icon} />
                        </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <h6>I will draw</h6>
                        <ul className="mt-2">
                            <li>SFW</li>
                            <li>Furry or Anthropomorphic Characters</li>
                        </ul>
                        <h6 className="mt-4">I will NOT draw</h6>
                        <ul className="mt-2">
                            <li>NSFW (not here)</li>
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
                    </Accordion.ItemContent>
                </Accordion.Item>

                <Accordion.Item value="extras">
                    <Accordion.ItemTrigger>
                        Extra Info
                        <Accordion.ItemIndicator>
                            <HugeiconsIcon icon={ArrowDown01Icon} />
                        </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <ul>
                            <li>I only accept payment via Paypal invoices.</li>
                            <li>Payment is in USD (US Dollar).</li>
                            <li>
                                A proper reference or visual representation of
                                your character must be provided. I will not draw
                                based on solely text description, nor design
                                your character from scratch.
                            </li>
                            <li>
                                I only accept references in either PNG or JPEG
                                format.
                            </li>
                            <li>
                                Colors of your character might be altered to
                                some lighter shades to match my pastel
                                aesthetic.
                            </li>
                            <li>
                                I will draw your character in 3-digit footpaws
                                and 3 or 4-digit handpaws.
                            </li>
                        </ul>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}
