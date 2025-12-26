"use client"

import { Dialog as ArkDialog } from "@ark-ui/react/dialog"
import { Portal } from "@ark-ui/react/portal"
import { XIcon } from "@phosphor-icons/react"
import { PropsWithChildren } from "react"
import "./style.css"

interface DialogProps extends ArkDialog.RootProps {}
export const Dialog = (props: DialogProps) => {
    const { children, ...others } = props
    return (
        <ArkDialog.Root {...others}>
            <Portal>
                <ArkDialog.Backdrop />
                <ArkDialog.Positioner>
                    <ArkDialog.Content>
                        {children}
                        <ArkDialog.CloseTrigger>
                            <XIcon weight="bold" />
                        </ArkDialog.CloseTrigger>
                    </ArkDialog.Content>
                </ArkDialog.Positioner>
            </Portal>
        </ArkDialog.Root>
    )
}

const Title = (props: PropsWithChildren) => {
    return <ArkDialog.Title {...props} />
}
Dialog.Title = Title

const Description = (props: PropsWithChildren) => {
    return <ArkDialog.Description {...props} />
}
Dialog.Description = Description
