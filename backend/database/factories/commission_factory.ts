import Commission from "#models/commission"
import factory from "@adonisjs/lucid/factories"
import { DateTime } from "luxon"

export const CommissionFactory = factory
    .define(Commission, async ({ faker }) => {
        return {
            clientUuid: faker.string.uuid(),
            type: faker.helpers.arrayElement([
                "emote",
                "half-body",
                "full-body",
                "ref-sheet",
            ]),
            idea: faker.lorem.paragraph(5),
            refSheet: faker.internet.url(),
            notes: faker.lorem.paragraph(5),
            status: faker.helpers.arrayElement([
                "pending",
                "sketching",
                "coloring",
                "finished",
                "rejected",
            ]),
            createdAt: DateTime.fromJSDate(faker.date.anytime()),
        }
    })
    .build()
