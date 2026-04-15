import { HttpStatus } from "./http-status"

export interface APIResponse<T = any> {
    success: boolean
    data?: T
    error?: {
        message: string
        code: string
        details?: any
    }
    statusCode: HttpStatus
}
