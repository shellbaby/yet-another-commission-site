import { Avatar, Button, Field } from "@/components"
import Image from "next/image"
import { CSSProperties } from "react"

export default function Page() {
    return (
        <>
            <section className="grid grid-cols-3 gap-3">
                <h6>Personal Information</h6>
                <div className="col-span-2">
                    <div className="mb-9 flex items-center gap-6">
                        <Avatar.Root
                            style={
                                {
                                    "--size": "calc(var(--spacing)*24)",
                                } as CSSProperties
                            }
                        >
                            <Avatar.Fallback asChild>
                                <Image
                                    alt="avatar fallback"
                                    src={
                                        "https://cdn.bsky.app/img/avatar/plain/did:plc:zwvrinmsejg2lw6yfkk5dgxm/bafkreifxtxkn6xkkwb3mcbxyphnysvo5y3lj5foz5a7d2mian3sku6ccjm"
                                    }
                                    width={590}
                                    height={590}
                                />
                            </Avatar.Fallback>
                            <Avatar.Image alt="ss" src={undefined} />
                        </Avatar.Root>

                        <div>
                            <Button className="mb-1">Change Avatar</Button>
                            <small className="text-black-muted font-bold">
                                JPG, PNG, or GIF. 1MB max.
                            </small>
                        </div>
                    </div>

                    <form>
                        <div className="mb-9 grid grid-cols-4 gap-6">
                            <Field.Root className="col-span-2">
                                <Field.Label>Name</Field.Label>
                                <Field.Input />
                            </Field.Root>

                            <Field.Root className="col-span-2">
                                <Field.Label>Username</Field.Label>
                                <Field.Input />
                            </Field.Root>

                            <Field.Root className="col-span-full">
                                <Field.Label>Email</Field.Label>
                                <Field.Input />
                            </Field.Root>
                        </div>

                        <Button type="submit">Save</Button>
                    </form>
                </div>
            </section>

            <hr className="my-12" />

            <section className="grid grid-cols-3 gap-3">
                <h6>Change Password</h6>
                <form className="col-span-2">
                    <div className="mb-9 grid grid-cols-4 gap-6">
                        <Field.Root className="col-span-full">
                            <Field.Label>Current Password</Field.Label>
                            <Field.Input />
                        </Field.Root>

                        <Field.Root className="col-span-full">
                            <Field.Label>New Password</Field.Label>
                            <Field.Input />
                        </Field.Root>

                        <Field.Root className="col-span-full">
                            <Field.Label>Confirm Password</Field.Label>
                            <Field.Input />
                        </Field.Root>
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </section>

            <hr className="my-12" />

            <section className="grid grid-cols-3 gap-3">
                <h6>Delete Account</h6>
                <div className="col-span-2">
                    <p className="mb-6">
                        Once you delete your account, all information including
                        your personal information and commission requests will
                        be gone permanently. This action is not reversible.
                    </p>
                    <Button>Yes, delete my account</Button>
                </div>
            </section>
        </>
    )
}
