import { Button } from "@/components"
import Link from "next/link"
import "./style.css"

export default function Page() {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-center">Commission Price</h2>
                <div className="mt-4 flex flex-col justify-center gap-4">
                    <Link href={"/tos"}>
                        <Button width="full">Terms of Service</Button>
                    </Link>
                    <Button>Commission Form</Button>
                </div>
            </div>

            <div id="commission-content">
                <div id="commission-item">
                    <div>
                        <h3>Emote</h3>
                        <p id="commission-price">$15</p>
                        <ul id="commission-description">
                            <li>Colored with Simple Shading</li>
                            <li>Free Light-mode Version</li>
                            <li>1024x1024 Pixels</li>
                        </ul>
                    </div>
                    <div>image</div>
                    <div id="commission-request">
                        <Button width="full">I want this!</Button>
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
                            <li>4096x4096 Pixels</li>
                        </ul>
                    </div>
                    <div>Image</div>
                    <div id="commission-request">
                        <Button width="full">I want this!</Button>
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
                            <li>4096x4096 Pixels</li>
                        </ul>
                    </div>
                    <div>Image</div>
                    <div id="commission-request">
                        <Button width="full">I want this!</Button>
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
                        <Button width="full">I want this!</Button>
                    </div>
                </div>
            </div>

            <hr />

            <div className="mt-8 flex flex-col gap-4 text-center">
                <p>Got something that you like? Commission me right away!</p>
                <Button>Commission Form</Button>
            </div>
        </div>
    )
}
