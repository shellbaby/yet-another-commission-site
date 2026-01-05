import { Button, Field } from "@/components"

export default function Page() {
    return (
        <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
                <h5 className="text-center">Contact me through...</h5>
                <div className="mt-4 flex flex-col gap-2">
                    <a href="">
                        <Button color="var(--color-telegram)" width="full">
                            Telegram
                        </Button>
                    </a>

                    <a href="">
                        <Button color="var(--color-discord)" width="full">
                            Discord
                        </Button>
                    </a>

                    <a href="https://bsky.app/profile/nikkoscribblo.bsky.social">
                        <Button color="var(--color-bluesky)" width="full">
                            Bluesky
                        </Button>
                    </a>
                </div>
            </div>
            <div>
                <h5 className="text-center">...or through this form</h5>
                <div className="mt-4 rounded-md border-2 p-4">
                    <Field.Root>
                        <Field.Label>Name</Field.Label>
                        <Field.Input placeholder="Name / Nickname" />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root className="mt-4">
                        <Field.Label>Email</Field.Label>
                        <Field.Input
                            type="email"
                            placeholder="your@email.com"
                        />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root className="mt-4">
                        <Field.Label>Subject</Field.Label>
                        <Field.Input />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root className="mt-4">
                        <Field.Label>Message</Field.Label>
                        <Field.Textarea autoresize />
                        <Field.ErrorText />
                    </Field.Root>

                    <div className="mt-4 flex justify-end">
                        <Button>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
