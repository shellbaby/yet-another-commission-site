import Client from "#models/client"
import type { HttpContext } from "@adonisjs/core/http"

export default class EmailsController {
    async verify({ request, response, params, auth }: HttpContext) {
        if (!request.hasValidSignature("email-verification")) {
            return response.badRequest({
                message: "Invalid or expired verification link",
            })
        }

        const client = await Client.findByOrFail("email", params.email)
        client.isVerified = true
        client.verificationToken = null
        await client.save()

        await auth.use("web").login(client)

        response.clearCookie("signup_status")

        return response
            .redirect()
            .withQs(false)
            .toPath("http://localhost:3000?verified=true")
    }
}
