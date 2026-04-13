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
                    .group(() => {
                        router.post("/commission", [
                            controllers.CommissionForms,
                            "store",
                        ])
                        router.post("/contact", [
                            controllers.ContactForms,
                            "store",
                        ])
                    })
                    .prefix("form")
                    .as("form")

                router
                    .group(() => {
                        router.get("/gallery", () => {
                            return 0
                        })
                        router.get("/home", () => {
                            return 0
                        })
                        router.get("/commission", () => {
                            return 0
                        })
                    })
                    .prefix("media")
                // .as("media")
            })
            .prefix("client")
        // .as("client")

        router
            .group(() => {
                router
                    .group(() => {
                        router.get("/commission", [
                            controllers.CommissionForms,
                            "index",
                        ])
                        router.get("/commission/:id", [
                            controllers.CommissionForms,
                            "show",
                        ])
                        router.delete("/commission/:id", [
                            controllers.CommissionForms,
                            "destroy",
                        ])

                        router.get("/contact", [
                            controllers.ContactForms,
                            "index",
                        ])
                        router.get("/contact/:id", [
                            controllers.ContactForms,
                            "show",
                        ])
                        router.delete("/contact/:id", [
                            controllers.ContactForms,
                            "destroy",
                        ])
                    })
                    .prefix("form")
                    .as("form")
            })
            .prefix("admin")
            .as("admin")
    })
    .prefix("/api/v1")
