import { HttpStatus } from "./http-status"

export type AdonisErrorType = {
    message?: string
    rule?: string
    field?: string
}

export interface APIResponse<T = any> {
    success: boolean
    data?: T
    errors?: AdonisErrorType[]
    statusCode: HttpStatus
}
