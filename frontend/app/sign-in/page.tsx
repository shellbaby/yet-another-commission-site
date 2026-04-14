"use client"

import { Button, Checkbox, Field, PasswordInput } from "@/components"
import { Tick02Icon, ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"

export default function Page() {
    interface FormValues {
        username_email: string
        password: string
        remember_me: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormValues>()

    const formOnSubmit = handleSubmit((data: FormValues) => {
        console.log(data)
    })

    return (
        <div className="mx-auto max-w-md">
            <h2 className="my-12 text-center">Sign In</h2>

            <div className="border-separator mt-4 rounded-md border-2 p-6">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={formOnSubmit}
                    noValidate
                >
                    <Field.Root required invalid={!!errors.username_email}>
                        <Field.Label>Username or Email</Field.Label>
                        <Field.Input
                            {...register("username_email", {
                                required:
                                    "Please fill out your username or email",
                                pattern: {
                                    value: /^(?:[a-zA-Z0-9._-]{3,30}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                    message:
                                        "Must be a valid username, or a valid email",
                                },
                            })}
                        />
                        <Field.ErrorText>
                            {errors.username_email?.message}
                        </Field.ErrorText>
                    </Field.Root>

                    <Field.Root required invalid={!!errors.password}>
                        <Field.Label>Password</Field.Label>
                        <PasswordInput.Root autoComplete="current-password">
                            <PasswordInput.Control>
                                <PasswordInput.Input
                                    {...register("password", {
                                        required:
                                            "Please fill out your password",
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
                            {errors.password?.message}
                        </Field.ErrorText>
                    </Field.Root>

                    <div className="flex items-center justify-between">
                        <Controller
                            name="remember_me"
                            control={control}
                            render={({
                                field: { name, ref, value, onBlur, onChange },
                            }) => (
                                <Field.Root className="w-fit">
                                    <Checkbox.Root
                                        name={name}
                                        value={value}
                                        onCheckedChange={(e) =>
                                            onChange(e.checked)
                                        }
                                        onBlur={onBlur}
                                    >
                                        <Checkbox.Control ref={ref}>
                                            <Checkbox.Indicator>
                                                <HugeiconsIcon
                                                    icon={Tick02Icon}
                                                    size={16}
                                                />
                                            </Checkbox.Indicator>
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                            Remember Me
                                        </Checkbox.Label>
                                        <Checkbox.HiddenInput />
                                    </Checkbox.Root>
                                </Field.Root>
                            )}
                        />

                        <Link href={"/password-reset"} className="font-bold">
                            Forgot Password?
                        </Link>
                    </div>
                    <Button type="submit">Sign In</Button>
                    <span className="text-center">
                        Not a member yet?{" "}
                        <Link href={"/sign-up"} className="font-bold">
                            Sign up here!
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}
