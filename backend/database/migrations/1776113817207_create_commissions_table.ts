import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
    protected tableName = "commissions"

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("commission_number").primary().unique()
            table
                .uuid("client_uuid")
                .references("clients.client_uuid")
                .onDelete("CASCADE")
                .notNullable()
                .index()
            table
                .enum("type", ["emote", "half-body", "full-body", "ref-sheet"])
                .notNullable()
            table.text("idea").notNullable()
            table.string("ref_sheet", 255).notNullable()
            table.text("notes")
            table
                .enum("status", [
                    "pending",
                    "sketching",
                    "coloring",
                    "finished",
                    "rejected",
                ])
                .defaultTo("pending")

            table.timestamp("created_at", { useTz: true }).notNullable()
            table.timestamp("updated_at", { useTz: true }).nullable()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
