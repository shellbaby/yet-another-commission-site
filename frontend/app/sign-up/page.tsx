import { Button, Field } from "@/components"

export default function Page() {
    return (
        <div className="mx-auto max-w-md">
            <h2 className="my-12 text-center">Sign Up</h2>

            <div className="border-separator mt-4 rounded-md border-2 p-6">
                <form className="flex flex-col gap-6">
                    <Field.Root required>
                        <Field.Label>Username</Field.Label>
                        <Field.Input />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>Email</Field.Label>
                        <Field.Input />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>How should I call you?</Field.Label>
                        <Field.Input placeholder="Name / Nickname" />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>Password</Field.Label>
                        <Field.Input />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>Re-type Password</Field.Label>
                        <Field.Input />
                        <Field.ErrorText />
                    </Field.Root>

                    <Button className="mt-3">Sign In</Button>
                </form>
            </div>
        </div>
    )
}
