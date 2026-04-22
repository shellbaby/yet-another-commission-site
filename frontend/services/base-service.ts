"use server"

import { APIResponse } from "@shellbaby/shared/api-response"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function customFetch<T>(
    endpoint: string,
    options: RequestInit = {},
    isURL: boolean = false
): Promise<APIResponse<T>> {
    const config: RequestInit = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
    }

    const _url = isURL ? endpoint : ""
    const _endpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`

    const response = await fetch(`${_url ?? API_URL + _endpoint}`, config)

    const result: APIResponse<T> = await response.json().catch(() => {
        return {
            statusCode: response.status,
            success: false,
            errors: [
                {
                    message:
                        "Unable to parse information. Please try again later",
                },
            ],
        } as APIResponse
    })

    if (!response.ok) {
        return {
            statusCode: response.status,
            success: false,
            errors: result.errors,
            response,
        } as APIResponse
    }

    return {
        statusCode: response.status,
        success: true,
        data: result.data as T,
        response,
    } as APIResponse<T>
}
