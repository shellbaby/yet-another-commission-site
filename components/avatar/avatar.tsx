import { Avatar as ArkAvatar } from "@ark-ui/react/avatar"

export const Avatar = () => {
    return (
        <ArkAvatar.Root>
            <ArkAvatar.Fallback />
            <ArkAvatar.Image />
        </ArkAvatar.Root>
    )
}
