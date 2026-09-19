import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Route = createRootRoute({
    component: RootComponent,
});

const commissionComponents: {
    title: string;
    href: string;
    key: string;
}[][] = [
    [
        { title: "prices", href: "/commission/prices", key: "prices" },
        { title: "terms of service", href: "/commission/tos", key: "tos" },
    ],

    [
        {
            title: "commission form",
            href: "/commission/form",
            key: "form",
        },
        { title: "queue list", href: "/commission/queue", key: "queue" },
    ],
];

function RootComponent() {
    return (
        <React.Fragment>
            <div className="mx-auto h-dvh max-w-3xl">
                <NavigationMenu className="w-full max-w-full mb-8">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                render={<Link to="/" />}
                                className={navigationMenuTriggerStyle()}
                            >
                                home
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>commission</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="flex flex-col">
                                    {commissionComponents[0].map((c) => (
                                        <NavigationMenuLink
                                            key={c.key}
                                            render={<Link to={c.href} />}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "w-full justify-start",
                                            )}
                                        >
                                            {c.title}
                                        </NavigationMenuLink>
                                    ))}

                                    {commissionComponents[1].map((c) => (
                                        <NavigationMenuLink
                                            key={c.key}
                                            render={<Link to={c.href} />}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "w-full justify-start",
                                            )}
                                        >
                                            {c.title}
                                        </NavigationMenuLink>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                render={<Link to="/gallery" />}
                                className={navigationMenuTriggerStyle()}
                            >
                                gallery
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                render={<Link to="/contact" />}
                                className={navigationMenuTriggerStyle()}
                            >
                                contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Outlet />
            </div>
        </React.Fragment>
    );
}
