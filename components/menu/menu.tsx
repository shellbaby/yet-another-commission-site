import { Menu as ArkMenu } from "@ark-ui/react/menu"
import "./style.css"

interface RootProps extends ArkMenu.RootProps {}
export const Menu = (props: RootProps) => {
    const { children, ...others } = props
    return (
        <ArkMenu.Root {...others}>
            <ArkMenu.Positioner>
                <ArkMenu.Content>{children}</ArkMenu.Content>
            </ArkMenu.Positioner>
        </ArkMenu.Root>
    )
}

interface ItemProps extends ArkMenu.ItemProps {}
const Item = (props: ItemProps) => {
    return <ArkMenu.Item {...props} />
}
Menu.Item = Item
