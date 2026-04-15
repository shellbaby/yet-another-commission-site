import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
    protected tableName = "clients"

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id", { primaryKey: false }).unique()

            table
                .uuid("client_uuid")
                .primary()
                .defaultTo(this.db.rawQuery("gen_random_uuid()").knexQuery)
            table.string("username", 100).notNullable()
            table.string("email", 255).notNullable().unique()
            table.string("name", 255).nullable()
            table.string("password", 255).notNullable()

            table.timestamp("created_at", { useTz: true }).notNullable()
            table.timestamp("updated_at", { useTz: true }).nullable()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
