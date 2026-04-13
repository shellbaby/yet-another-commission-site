import type { HttpContext } from "@adonisjs/core/http"

export default class ClientsController {
    // Admin-only, show all clients
    async index({}: HttpContext) {}

    // Both, create new client
    async store({}: HttpContext) {}

    // Admin-only, get any client / Both, get self's client
    async show({}: HttpContext) {}

    // Both, update client info
    async update({}: HttpContext) {}

    // Admin-only, delete any client / Both, delete self's client
    async destroy({}: HttpContext) {}
}
