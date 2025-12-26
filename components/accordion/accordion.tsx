import { Accordion as ArkAccordion } from "@ark-ui/react/accordion"
import { ReactNode } from "react"
import "./style.css"

interface RootProps extends ArkAccordion.RootProps {}
export const Accordion = (props: RootProps) => {
    return <ArkAccordion.Root {...props} />
}

interface ItemProps extends ArkAccordion.ItemProps {}
const Item = (props: ItemProps) => {
    return <ArkAccordion.Item {...props} />
}
Accordion.Item = Item

interface ItemTriggerProps extends ArkAccordion.ItemTriggerProps {
    indicator?: ReactNode
}
const ItemTrigger = (props: ItemTriggerProps) => {
    const { indicator, children, ...others } = props
    return (
        <ArkAccordion.ItemTrigger {...others}>
            {children}
            <ArkAccordion.ItemIndicator>{indicator}</ArkAccordion.ItemIndicator>
        </ArkAccordion.ItemTrigger>
    )
}
Accordion.ItemTrigger = ItemTrigger

interface ContentProps extends ArkAccordion.ItemContentProps {}
const Content = (props: ContentProps) => {
    return <ArkAccordion.ItemContent {...props} />
}
Accordion.ItemContent = Content
