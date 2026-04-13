import type { HttpContext } from "@adonisjs/core/http"

export default class CommissionFormsController {
    // Admin-only - Show all forms
    async index({}: HttpContext) {}

    // Client-only - Post single form
    async store({}: HttpContext) {}

    // Admin-only - Show single form (Client too? Could be displaying their commission state)
    async show({}: HttpContext) {}

    // Admin-only - Delete single form
    async destroy({}: HttpContext) {}
}
