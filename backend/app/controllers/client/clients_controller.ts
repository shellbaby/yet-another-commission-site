import Client from "#models/client"
import { sendResponse } from "#services/api-utils"
import type { HttpContext } from "@adonisjs/core/http"
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
        const payload = await request.body()
        console.log(payload)
        return response.status(HttpStatus.OK).send(sendResponse("OK"))
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
