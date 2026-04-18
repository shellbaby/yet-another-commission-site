import { Mark } from "@/components"
import { customFetch } from "@/services/base-service"
import { GeneralError } from "@/types/error"
import { MailLove02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { APIResponse } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const getSignupStatus = async () => {
    const allCookies = (await cookies()).toString()
    const response = await customFetch<APIResponse<{ email: string }>>(
        "/auth/signup-status",
        {
            headers: {
                Cookie: allCookies,
            },
            cache: "no-store",
        }
    )
        .catch((error: GeneralError) => {
            if (error.code === HttpStatus.NOT_FOUND) {
                return {
                    error: HttpStatus.NOT_FOUND,
                    message: "Invalid sign up status",
                    data: null,
                }
            }

            return {
                error: -1,
                message: "Unknown error",
                data: null,
            }
        })
        .then((res) => {
            return {
                errors: null,
                message: null,
                data: res.data,
            }
        })

    return response
}

export default async function Page() {
    const status = await getSignupStatus()

    if (!status.data) {
        redirect("/")
    }

    return (
        <>
            <h2 className="mb-6 flex items-end gap-1">
                Please check your email!{" "}
                <span>
                    <HugeiconsIcon
                        icon={MailLove02Icon}
                        size={36}
                        strokeWidth={2.5}
                    />
                </span>
            </h2>

            <p className="mb-3">
                Thank you for signing up and becoming a valuable member of Qilin
                Cafe. An email verification link has just been sent to
                <Mark>{status.data.email}</Mark>
            </p>

            <p className="mb-6">
                If you cannot see it, please kindly check your spam folder.
            </p>

            <p className="font-bold italic">
                Note: The link will expire in 24h.
            </p>
        </>
    )
}
