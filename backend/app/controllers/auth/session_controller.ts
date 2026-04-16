import Client from "#models/client"
import type { HttpContext } from "@adonisjs/core/http"

export default class SessionController {
    async store({ request }: HttpContext) {
        const { email, password, username } = request.only([
            "email",
            "username",
            "password",
        ])
        const client = await Client.verifyCredentials(email, password)
    }
}
