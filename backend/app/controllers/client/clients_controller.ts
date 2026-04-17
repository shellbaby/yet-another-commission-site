import { appUrl } from "#config/app"
import Client from "#models/client"
import { sendResponse } from "#services/api-utils"
import { signupValidator } from "#validators/client"
import stringHelpers from "@adonisjs/core/helpers/string"
import type { HttpContext } from "@adonisjs/core/http"
import { signedUrlFor } from "@adonisjs/core/services/url_builder"
import mail from "@adonisjs/mail/services/main"
import { HttpStatus } from "@shellbaby/shared/http-status"

export default class ClientsController {
    /**
     * NOT ALLOWED - Display a list of resource
     */
    async index({}: HttpContext) {}

    /**
     * NO NEED - Display form to create a new record
     */
    async create({}: HttpContext) {}

    /**
     * Handle form submission for the create action
     */
    async store({ request, response }: HttpContext) {
        const payload = await request.validateUsing(signupValidator)

        const verificationToken = stringHelpers.generateRandom(64)
        const client = await Client.create({
            ...payload,
            verificationToken: verificationToken,
        })

        const signedURL = signedUrlFor(
            "auth.emails.verify",
            { email: client.email },
            {
                expiresIn: "24h",
                prefixUrl: appUrl,
                purpose: "email-verification",
            }
        )

        await mail.send((msg) => {
            msg.to(payload.email)
                .subject("Verify Your Account")
                .htmlView("email/verify", {
                    client,
                    url: signedURL,
                })
        })

        response.cookie("signup_status", "pending", {
            httpOnly: false,
            maxAge: "1h",
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })

        // return response.created({
        //     message: "Client created",
        // })

        return response.created(
            sendResponse({ message: "Client created" }, HttpStatus.CREATED)
        )
    }

    /**
     * Show individual record
     */
    async show({ params }: HttpContext) {
        const client = await Client.query()
            .where("uuid", params.uuid)
            .firstOrFail()
        return client.toJSON()
    }

    /**
     * NO NEED - Edit individual record
     */
    async edit({ params }: HttpContext) {}

    /**
     * Handle form submission for the edit action
     */
    async update({ params, request }: HttpContext) {}

    /**
     * Delete record
     */
    async destroy({ params }: HttpContext) {}
}
