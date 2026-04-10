import { Field as ArkField } from "@ark-ui/react/field"
import { ReactNode } from "react"

export const Field = () => ArkField

interface LabelProps extends ArkField.LabelProps {}
const Label = (props: LabelProps) => {
    const { children, ...others } = props
    return (
        <ArkField.Label {...others}>
            {children}
            <ArkField.RequiredIndicator>Required</ArkField.RequiredIndicator>
        </ArkField.Label>
    )
}
Field.Label = Label

interface InputProps extends ArkField.InputProps {
    addon?: string | ReactNode
}
const Input = (props: InputProps) => {
    const { addon, ...others } = props
    return addon ? (
        <div data-scope="field" data-part="input-inline-container">
            <ArkField.Label data-scope="field" data-part="input-inline-addon">
                {addon}
            </ArkField.Label>
            <ArkField.Input {...others} data-variant={"inline"} />
        </div>
    ) : (
        <ArkField.Input {...others} />
    )
}
Field.Input = Input

Field.Root = ArkField.Root
Field.ErrorText = ArkField.ErrorText
Field.HelperText = ArkField.HelperText
Field.Context = ArkField.Context
Field.RequiredIndicator = ArkField.RequiredIndicator
Field.RootProvider = ArkField.RootProvider
Field.Select = ArkField.Select
Field.Textarea = ArkField.Textarea
