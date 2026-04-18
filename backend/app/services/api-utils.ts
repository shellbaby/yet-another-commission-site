import { APIResponse } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"

export function sendResponse<T>(
    data: T,
    status: HttpStatus = HttpStatus.OK
): APIResponse<T> {
    return {
        success: true,
        data,
        statusCode: status,
    }
}

export function sendError(message: string, status: HttpStatus): APIResponse {
    return {
        success: false,
        errors: [{ message }],
        statusCode: status,
    }
}
