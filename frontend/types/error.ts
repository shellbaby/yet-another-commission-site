import { AdonisErrorType } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"

export class GeneralError<T = any[]> extends Error {
    code: HttpStatus
    errors?: T

    constructor(message: string, code: HttpStatus, errors?: T) {
        super(message)
        this.code = code
        this.errors = errors
    }
}

export class FormError extends GeneralError<AdonisErrorType[]> {
    constructor(message: string, code: HttpStatus, errors?: AdonisErrorType[]) {
        super(message, code, errors)
    }
}
