import Client from "#models/client"
import { sendError, sendResponse } from "#services/api-utils"
import {
    emailValidator,
    passwordValidator,
    usernameValidator,
} from "#validators/client"
import type { HttpContext } from "@adonisjs/core/http"
import { HttpStatus } from "@shellbaby/shared/http-status"
import { ValidationError } from "@vinejs/vine"

export default class SessionController {
    async store({ request, response, auth }: HttpContext) {
        const { username, password } = request.only(["username", "password"])

        const uidUsername = await usernameValidator
            .validate({ username })
            .catch((error: ValidationError) => {})

        const uidEmail = await emailValidator
            .validate({ email: username })
            .catch((error: ValidationError) => {})

        const pwdValidated = await passwordValidator.validate({
            password,
        })

        const uid = uidUsername
            ? uidUsername.username
            : uidEmail
              ? uidEmail.email
              : null

        if (!uid) {
            return response.unprocessableEntity(
                sendError(
                    "Please use a valid email or username",
                    HttpStatus.UNPROCESSABLE_ENTITY
                )
            )
        }

        if (!pwdValidated) {
            return response.unprocessableEntity(
                sendError(
                    "Invalid password type",
                    HttpStatus.UNPROCESSABLE_ENTITY
                )
            )
        }

        const client = await Client.verifyCredentials(uid, password)

        const token = await Client.accessTokens.create(client)

        return response.send(
            sendResponse(
                { data: { token: token.value!.release(), type: "bearer" } },
                HttpStatus.FOUND
            )
        )
    }
}
