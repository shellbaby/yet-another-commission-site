"use client"

import {
    Button,
    Checkbox,
    createToaster,
    Field,
    PasswordInput,
    Portal,
    Toast,
    Toaster,
} from "@/components"
import { SessionStore } from "@/services/auth/auth-service"
import { GeneralError } from "@/types/error"
import {
    AlertCircleIcon,
    Cancel01Icon,
    Tick02Icon,
    ViewIcon,
    ViewOffIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { HttpStatus } from "@shellbaby/shared/http-status"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
    gap: 24,
})
export default function Page() {
    const router = useRouter()
    const [isSigningIn, setIsSigningIn] = useState(false)

    interface FormValues {
        username: string
        password: string
        remember_me: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormValues>()

    const formOnSubmit = handleSubmit(
        async ({ remember_me, ...clientData }: FormValues) => {
            setIsSigningIn(true)

            const result = await SessionStore({ ...clientData })
                .catch((error: GeneralError) => {
                    setIsSigningIn(false)
                    const toasterObj = { title: "" }

                    if (error.code === HttpStatus.BAD_REQUEST) {
                        toasterObj.title = "Invalid credentials"
                    } else {
                        toasterObj.title = "Please try again later"
                    }

                    toaster.error({
                        title: (
                            <span className="flex items-center gap-3">
                                <HugeiconsIcon icon={AlertCircleIcon} />
                                <span>{toasterObj.title}</span>
                            </span>
                        ),
                    })
                })
                .then((res) => {
                    if (res) {
                        return res.data
                    }
                })

            const { token } = result ?? {}

            await fetch("/api/auth/session/sign-in", {
                method: "POST",
                body: JSON.stringify({ token }),
            })

            router.push("/")
        }
    )

    return (
        <div className="mx-auto max-w-md">
            <h2 className="mb-12 text-center">Sign In</h2>

            <div className="border-separator mt-4 rounded-md border-2 p-6">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={formOnSubmit}
                    noValidate
                >
                    <Field.Root required invalid={!!errors.username}>
                        <Field.Label>Username or Email</Field.Label>
                        <Field.Input
                            {...register("username", {
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
                            {errors.username?.message}
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
                    <Button type="submit" disabled={isSigningIn}>
                        {isSigningIn ? "Signing In..." : "Sign In"}
                    </Button>
                    <span className="text-center">
                        Not a member yet?{" "}
                        <Link href={"/sign-up"} className="font-bold">
                            Sign up here!
                        </Link>
                    </span>
                </form>
            </div>

            <Portal>
                <Toaster toaster={toaster}>
                    {(toast) => (
                        <Toast.Root key={toast.id}>
                            <Toast.Title>{toast.title}</Toast.Title>
                            <Toast.Description>
                                {toast.description}
                            </Toast.Description>
                            <Toast.CloseTrigger>
                                <HugeiconsIcon icon={Cancel01Icon} />
                            </Toast.CloseTrigger>
                        </Toast.Root>
                    )}
                </Toaster>
            </Portal>
        </div>
    )
}
