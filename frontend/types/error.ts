import { AdonisErrorType } from "@shellbaby/shared/api-response"
import { HttpStatus } from "@shellbaby/shared/http-status"

export class FormError extends Error {
    errors?: AdonisErrorType[]
    code: HttpStatus

    constructor(message: string, code: HttpStatus, errors?: AdonisErrorType[]) {
        super(message)
        this.errors = errors
        this.code = code
    }
}
