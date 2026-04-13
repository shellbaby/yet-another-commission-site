import { ClientSchema } from "#database/schema"
import Commission from "#models/commission"
import { hasMany } from "@adonisjs/lucid/orm"
import type { HasMany } from "@adonisjs/lucid/types/relations"

export default class Client extends ClientSchema {
    @hasMany(() => Commission)
    declare commissions: HasMany<typeof Commission>
}
