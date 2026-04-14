"use client"

import { Button, Field, PasswordInput } from "@/components"
import { ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useForm, useFormState, useWatch } from "react-hook-form"

export default function Page() {
    interface FormValues {
        username: string
        email: string
        name: string
        password: string
        retype_pwd: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        trigger,
    } = useForm<FormValues>()

    const formOnSubmit = handleSubmit((data: FormValues) => {
        console.log(data)
    })

    const { touchedFields } = useFormState({ control })
    const password = useWatch({
        control,
        name: "password",
    })
    const passwordInput = register("password", {
        required: "Please provide your password",
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
            message: "Please make sure password is secure enough",
        },
    })

    return (
        <div className="mx-auto max-w-md">
            <h2 className="my-12 text-center">Sign Up</h2>

            <div className="border-separator mt-4 rounded-md border-2 p-6">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={formOnSubmit}
                    noValidate
                >
                    <Field.Root required invalid={!!errors.username}>
                        <Field.Label>Username</Field.Label>
                        <Field.Input
                            {...register("username", {
                                required: "Please fill out your username",
                                pattern: {
                                    value: /^(?:[a-zA-Z0-9._-]{3,30})$/,
                                    message: "Must be a valid username",
                                },
                            })}
                        />
                        <Field.ErrorText>
                            {errors.username?.message}
                        </Field.ErrorText>
                        <Field.HelperText asChild>
                            <ul className="[&>li]:mt-0!">
                                <li>
                                    Minimum 3, maximum 30 characters for
                                    username
                                </li>
                                <li>Only . _ - are allowed</li>
                            </ul>
                        </Field.HelperText>
                    </Field.Root>

                    <Field.Root required invalid={!!errors.email}>
                        <Field.Label>Email</Field.Label>
                        <Field.Input
                            {...register("email", {
                                required: "Please fill out your email",
                                pattern: {
                                    value: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                    message: "Must be a valid email",
                                },
                            })}
                        />
                        <Field.ErrorText>
                            {errors.email?.message}
                        </Field.ErrorText>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>What should I call you?</Field.Label>
                        <Field.Input placeholder="Name / Nickname" />
                        <Field.ErrorText />
                    </Field.Root>

                    <Field.Root required invalid={!!errors.password}>
                        <Field.Label>Password</Field.Label>
                        <PasswordInput.Root autoComplete="new-password">
                            <PasswordInput.Control>
                                <PasswordInput.Input
                                    autoCapitalize="none"
                                    {...passwordInput}
                                    onChange={async (e) => {
                                        await passwordInput.onChange(e)
                                        if (touchedFields.retype_pwd) {
                                            trigger("retype_pwd")
                                        }
                                    }}
                                />
                                <PasswordInput.VisibilityTrigger>
                                    <PasswordInput.Indicator
                                        fallback={
                                            <HugeiconsIcon icon={ViewOffIcon} />
                                        }
                                    >
                                        <HugeiconsIcon icon={ViewIcon} />
                                    </PasswordInput.Indicator>
                                </PasswordInput.VisibilityTrigger>
                            </PasswordInput.Control>
                        </PasswordInput.Root>
                        <Field.ErrorText>
                            {errors.password?.message}
                        </Field.ErrorText>
                        <Field.HelperText>
                            <ul className="[&>li]:mt-0!">
                                <li>
                                    Include at least 1 number or 1 character
                                </li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </Field.HelperText>
                    </Field.Root>

                    <Field.Root required invalid={!!errors.retype_pwd}>
                        <Field.Label>Re-type Password</Field.Label>
                        <PasswordInput.Root ignorePasswordManagers>
                            <PasswordInput.Control>
                                <PasswordInput.Input
                                    {...register("retype_pwd", {
                                        required:
                                            "Please re-type your password",
                                        validate: {
                                            match: (value) =>
                                                password === value ||
                                                "Password does not match",
                                        },
                                    })}
                                    autoCapitalize="none"
                                />
                                <PasswordInput.VisibilityTrigger>
                                    <PasswordInput.Indicator
                                        fallback={
                                            <HugeiconsIcon icon={ViewOffIcon} />
                                        }
                                    >
                                        <HugeiconsIcon icon={ViewIcon} />
                                    </PasswordInput.Indicator>
                                </PasswordInput.VisibilityTrigger>
                            </PasswordInput.Control>
                        </PasswordInput.Root>
                        <Field.ErrorText>
                            {errors.retype_pwd?.message}
                        </Field.ErrorText>
                    </Field.Root>

                    <Button className="mt-3">Sign In</Button>
                </form>
            </div>
        </div>
    )
}
