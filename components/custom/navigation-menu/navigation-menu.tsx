"use client";

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenu as ShadcnNavigationMenu,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const NavigationMenu = () => {
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

    return (
        <ShadcnNavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link href={"/"} />}
                        className={navigationMenuTriggerStyle()}
                    >
                        home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>commission</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {commissionComponents[0].map((c) => (
                            <NavigationMenuLink
                                key={c.key}
                                render={<Link href={c.href} />}
                            >
                                {c.title}
                            </NavigationMenuLink>
                        ))}

                        <Separator />

                        {commissionComponents[1].map((c) => (
                            <NavigationMenuLink
                                key={c.key}
                                render={<Link href={c.href} />}
                            >
                                {c.title}
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link href={"/gallery"} />}
                        className={navigationMenuTriggerStyle()}
                    >
                        gallery
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuLink
                    render={<Link href={"/contact"} />}
                    className={navigationMenuTriggerStyle()}
                >
                    contact
                </NavigationMenuLink>
            </NavigationMenuList>
        </ShadcnNavigationMenu>
    );
};
