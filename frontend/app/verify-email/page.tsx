import { Mark } from "@/components"
import { customFetch } from "@/services/base-service"
import { MailLove02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { APIResponse } from "@shellbaby/shared/api-response"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const getSignupStatus = async (): Promise<APIResponse<{ email: string }>> => {
    const allCookies = (await cookies()).toString()
    const response = await customFetch<{ email: string }>(
        "/auth/signup-status",
        {
            headers: {
                Cookie: allCookies,
            },
            cache: "no-store",
        }
    )

    if (!response.success) {
        return {
            ...response,
        }
    }

    return response
}

export default async function Page() {
    const status = await getSignupStatus()

    if (!status.success) {
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
                <Mark>{status.data?.email}</Mark>
            </p>

            <p className="mb-6">
                If you cannot see it, please kindly check your spam folder.
            </p>

            <p className="mb-6">
                If you have already verified your email, you can safely refresh
                this page.
            </p>

            <p className="font-bold italic">
                Note: The link will expire in 24h.
            </p>
        </>
    )
}
