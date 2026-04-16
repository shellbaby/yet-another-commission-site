/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { controllers } from "#generated/controllers"
import router from "@adonisjs/core/services/router"

router.get("/", () => {
    return { hello: "world" }
})

router
    .group(() => {
        router
            .group(() => {
                router
                    .resource("clients", controllers.client.Clients)
                    .only(["store", "show", "update", "destroy"])
                router
                    .resource("commissions", controllers.client.Commissions)
                    .only(["index", "store", "show", "destroy"])
            })
            .as("client")

        router
            .group(() => {
                router.resource("clients", controllers.admin.Clients).apiOnly()
                router
                    .resource("commissions", controllers.admin.Commissions)
                    .apiOnly()
            })
            .prefix("admin")
            .as("admin")

        router
            .group(() => {
                router.get("verify/:email", [
                    controllers.email.Emails,
                    "verify",
                ])
            })
            .prefix("auth")
            .as("auth")
    })
    .prefix("/api/v1")
