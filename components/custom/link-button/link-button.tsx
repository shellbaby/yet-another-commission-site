"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export const LinkButton = (
    props: ComponentPropsWithoutRef<typeof Link> & {
        variant?:
            | "default"
            | "secondary"
            | "outline"
            | "ghost"
            | "destructive"
            | "link";
    },
) => {
    return (
        <Link
            {...props}
            className={buttonVariants({
                variant: props.variant,
                size: "default",
                className: props.className,
            })}
        />
    );
};
