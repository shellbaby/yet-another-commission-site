import Client from "#models/client"
import factory from "@adonisjs/lucid/factories"
import { DateTime } from "luxon"

export const ClientFactory = factory
    .define(Client, async ({ faker }) => {
        const _name = `${faker.food.adjective()} ${faker.color.human()} ${faker.animal.type()}`
        return {
            name: _name,
            email: `${_name}@fakemail.com`,
            password: faker.internet.password({ length: 255 }),
            tg: faker.internet.username(),
            discord: faker.internet.username(),
            createdAt: DateTime.fromJSDate(faker.date.anytime()),
        }
    })
    .build()
