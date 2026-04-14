"use client"

import { Button, Field } from "@/components"
import { useForm } from "react-hook-form"

export default function Page() {
    interface FormValues {
        email: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const formOnSubmit = handleSubmit((data: FormValues) => {
        console.log(data)
    })

    return (
        <div className="mx-auto max-w-md">
            <h2 className="my-12 text-center">Password Reset</h2>

            <div className="border-separator mt-4 rounded-md border-2 p-6">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={formOnSubmit}
                    noValidate
                >
                    <p>
                        Please enter the email you used to create your account
                    </p>
                    <p>
                        A link to reset your password will be sent to you
                        shortly
                    </p>
                    <Field.Root required invalid={!!errors.email}>
                        <Field.Label>Email</Field.Label>
                        <Field.Input
                            {...register("email", {
                                required: "Please fill out your email",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Must be a valid email",
                                },
                            })}
                        />
                        <Field.ErrorText>
                            {errors.email?.message}
                        </Field.ErrorText>
                    </Field.Root>
                    <Button type="submit">Reset Your Password</Button>
                </form>
            </div>
        </div>
    )
}
