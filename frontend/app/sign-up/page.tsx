"use client"

import {
    Button,
    createToaster,
    Field,
    PasswordInput,
    Portal,
    Toast,
    Toaster,
} from "@/components"
import { Client } from "@/types/clients"
import {
    AlertCircleIcon,
    Cancel01Icon,
    CheckmarkCircle02Icon,
    ViewIcon,
    ViewOffIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, useFormState, useWatch } from "react-hook-form"

interface FormValues extends Client {
    retype_pwd: string
}

const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
    gap: 24,
})

export default function Page() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        trigger,
    } = useForm<FormValues>()

    const formOnSubmit = handleSubmit(async ({ retype_pwd, ...data }) => {
        setIsSubmitting(true)
        const result = await fetch("/api/client", {
            method: "POST",
            body: JSON.stringify({ ...data }),
        })

        if (!result.ok) {
            setIsSubmitting(false)

            toaster.error({
                title: (
                    <span className="flex items-center gap-3">
                        <HugeiconsIcon icon={AlertCircleIcon} />
                        <span>Error {result.status}</span>
                    </span>
                ),
                type: "error",
                duration: Infinity,
            })

            return
        }

        setIsSuccess(true)

        toaster.success({
            title: (
                <span className="flex items-center gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} />
                    <span>Signed up successfully!</span>
                </span>
            ),
        })

        setTimeout(() => {
            router.push("/verify-email")
        }, 2000)
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
            <h2 className="mb-12 text-center">Sign Up</h2>

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
                                    value: /^[a-zA-Z0-9._-]{3,30}$/,
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
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                        <Field.Input
                            placeholder="Name / Nickname"
                            {...register("name")}
                        />
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

                    <Button
                        className="mt-3"
                        disabled={isSubmitting}
                        type="submit"
                        color={
                            isSuccess
                                ? "var(--color-success)"
                                : "var(--color-primary)"
                        }
                    >
                        {isSubmitting
                            ? isSuccess
                                ? "Success!"
                                : "Signing Up..."
                            : "Sign Up"}
                    </Button>
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
