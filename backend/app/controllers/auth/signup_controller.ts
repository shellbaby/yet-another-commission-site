import { sendError, sendResponse } from "#services/api-utils"
import type { HttpContext } from "@adonisjs/core/http"
import { HttpStatus } from "@shellbaby/shared/http-status"

export default class SignupController {
    async status({ request, response }: HttpContext) {
        const signupStatus = request.encryptedCookie("signup_status")

        if (!signupStatus || signupStatus.status !== "pending") {
            return response.forbidden(
                sendError("Access denied", HttpStatus.FORBIDDEN)
            )
        }

        return response.accepted(
            sendResponse(
                { data: { email: signupStatus.email } },
                HttpStatus.ACCEPTED
            )
        )
    }
}
