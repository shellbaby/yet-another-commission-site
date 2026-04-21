"use client"

import { Avatar as ArkAvatar, useAvatarContext } from "@ark-ui/react/avatar"
import Image, { getImageProps, ImageProps } from "next/image"

const AvatarImage = (props: ImageProps) => {
    const avatar = useAvatarContext()

    const { hidden, ...arkImageProps } = avatar.getImageProps()
    const nextImage = getImageProps(props)

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...arkImageProps}
            {...nextImage.props}
            style={{
                ...props.style,
                visibility: hidden ? "hidden" : "visible",
            }}
        />
    )
}

export const Avatar = {
    Root: ArkAvatar.Root,
    Fallback: AvatarImage,
    Image: AvatarImage,
}
