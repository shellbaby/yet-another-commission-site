import { Button } from "@/components"
import Link from "next/link"
import "./style.css"

export default function Page() {
    return (
        <>
            <div className="my-12 text-center">
                <h2>Commission Price</h2>
                <p className="text-h6 mt-6 font-bold">
                    * Please carefully read the ToS first before commissioning *
                </p>
                <div className="mt-9 grid grid-cols-2 gap-6">
                    <Link href={"/tos"}>
                        <Button width="full">Terms of Service</Button>
                    </Link>
                    <Link href={"/form"}>
                        <Button width="full">Commission Form</Button>
                    </Link>
                </div>
            </div>

            <hr />

            <div id="commission-item">
                <div>
                    <h3>Emote</h3>
                    <p id="commission-price">$15</p>
                    <ul id="commission-description">
                        <li>Colored with Simple Shading</li>
                        <li>Free Light-mode Version</li>
                    </ul>
                </div>
                <div>image</div>
                <div id="commission-request">
                    <Link
                        href={{
                            pathname: "/form",
                            query: {
                                type: "emote",
                            },
                        }}
                    >
                        <Button width="full">I want this!</Button>
                    </Link>
                </div>
            </div>

            <hr />

            <div id="commission-item">
                <div>
                    <h3>Half Body</h3>
                    <p id="commission-price">$25</p>
                    <ul id="commission-description">
                        <li>Colored with Simple Shading</li>
                        <li>Simple Background</li>
                    </ul>
                </div>
                <div>Image</div>
                <div id="commission-request">
                    <Link
                        href={{
                            pathname: "/form",
                            query: {
                                type: "half-body",
                            },
                        }}
                    >
                        <Button width="full">I want this!</Button>
                    </Link>
                </div>
            </div>

            <hr />

            <div id="commission-item">
                <div>
                    <h3>Full Body</h3>
                    <p id="commission-price">$35</p>
                    <ul id="commission-description">
                        <li>Colored with Simple Shading</li>
                        <li>Simple Background</li>
                        <li>Simple Pose</li>
                    </ul>
                </div>
                <div>Image</div>
                <div id="commission-request">
                    <Link
                        href={{
                            pathname: "/form",
                            query: {
                                type: "full-body",
                            },
                        }}
                    >
                        <Button width="full">I want this!</Button>
                    </Link>
                </div>
            </div>

            <hr />

            <div id="commission-item">
                <div>
                    <h3>Reference Sheet</h3>
                    <p id="commission-price">$75</p>
                    <ul id="commission-description">
                        <li>Flat Color</li>
                        <li>Include Front and Back View</li>
                        <li>Include Props and Texts</li>
                        <li>Include Tail Design</li>
                        <li>Side Profile +$20</li>
                    </ul>
                </div>
                <div>Image</div>
                <div id="commission-request">
                    <Link
                        href={{
                            pathname: "/form",
                            query: {
                                type: "ref-sheet",
                            },
                        }}
                    >
                        <Button width="full">I want this!</Button>
                    </Link>
                </div>
            </div>

            <hr />

            <div className="mt-12 text-center">
                <p className="text-h6">
                    Got something that you like? Commission me right away!
                </p>

                <Link href={"/form"}>
                    <Button width="full" className="mt-9">
                        Commission Form
                    </Button>
                </Link>
            </div>
        </>
    )
}
