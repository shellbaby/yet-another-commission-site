import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card"
import { Portal } from "@ark-ui/react/portal"

interface RootProps extends ArkHoverCard.RootProps {}
export const HoverCard = (props: RootProps) => {
    return <ArkHoverCard.Root {...props} />
}
HoverCard.Root = HoverCard

interface TriggerProps extends ArkHoverCard.TriggerProps {}
const Trigger = (props: TriggerProps) => {
    return <ArkHoverCard.Trigger {...props} />
}
HoverCard.Trigger = Trigger

interface ContentProps extends ArkHoverCard.ContentProps {}
const Content = (props: ContentProps) => {
    return (
        <Portal>
            <ArkHoverCard.Positioner>
                <ArkHoverCard.Content {...props} />
            </ArkHoverCard.Positioner>
        </Portal>
    )
}
HoverCard.Content = Content
