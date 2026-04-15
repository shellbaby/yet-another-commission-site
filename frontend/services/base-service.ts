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

    const result: APIResponse<T> = await response.json().catch(():APIResponse<null> => ({
        success: false,
        error:{
            message: "Failed to parse response",
            code: "PARSING_ERROR"
        },
        statusCode: response.status
    }))

    if (!response.ok || !result.success) {
        if (result.statusCode === HttpStatus.UNAUTHORIZED) {
            throw new Error("SESSION_EXPIRED")
        }

        const error = new Error(result.error?.message || "An unknown error occured");
        (error as any).code = result.error?.code;
        (error as any).details = result.error?.details
        throw error
    }

    return result.data as T
}
