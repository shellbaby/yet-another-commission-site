import { Field as ArkField } from "@ark-ui/react/field"
import { ReactNode } from "react"

interface RootProps extends ArkField.RootProps {}
export const Field = (props: RootProps) => {
    return <ArkField.Root {...props} />
}
Field.Root = Field

interface LabelProps extends ArkField.LabelProps {}
const Label = (props: LabelProps) => {
    return <ArkField.Label {...props} />
}
Field.Label = Label

interface InputProps extends ArkField.InputProps {
    iconStart?: ReactNode
}
const Input = (props: InputProps) => {
    const { iconStart, ...others } = props
    return iconStart ? (
        <div data-sub-scope="">
            <span>icon</span>
            <ArkField.Input data-style="icon" />
        </div>
    ) : (
        <ArkField.Input {...others} />
    )
}
Field.Input = Input

interface HelperTextProps extends ArkField.HelperTextProps {}
const HelperText = (props: HelperTextProps) => {
    return <ArkField.HelperText {...props} />
}
Field.HelperText = HelperText

interface ErrorTextProps extends ArkField.ErrorTextProps {}
const ErrorText = (props: ErrorTextProps) => {
    return <ArkField.ErrorText {...props} />
}
Field.ErrorText = ErrorText
