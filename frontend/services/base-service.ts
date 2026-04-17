import { FormError } from "@/types/error"
import { APIResponse } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function customFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const config: RequestInit = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
    }

    const _endpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`

    const response = await fetch(`${API_URL}${_endpoint}`, config)

    const result: APIResponse<T> = await response.json().catch(() => {
        throw Error("Unable to parse information. Please try again later")
    })

    if (!response.ok) {
        if (response.status === HttpStatus.UNPROCESSABLE_ENTITY) {
            throw new FormError(
                "Please fix your information and try again",
                response.status,
                result.errors
            )
        }

        throw new FormError(
            "An unknown error occured, Please try again later",
            response.status
        )
    }

    // if (!response.ok || !result.success) {
    //     if (result.statusCode === HttpStatus.UNAUTHORIZED) {
    //         throw new Error("SESSION_EXPIRED")
    //     }

    //     if (result.statusCode === HttpStatus.UNPROCESSABLE_ENTITY) {
    //         throw new Error("")
    //     }

    //     const error = new Error(
    //         result.error?.message ||
    //             "An unknown error occured. Please try again later"
    //     )
    //     ;(error as any).code = result.error?.code
    //     ;(error as any).details = result.error?.details
    //     throw error
    // }

    return result.data as T
}
