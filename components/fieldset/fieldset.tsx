import { Fieldset as ArkFieldset } from "@ark-ui/react/fieldset"

interface RootProps extends ArkFieldset.RootProps {}
export const Fieldset = (props: RootProps) => {
    return <ArkFieldset.Root {...props} />
}
Fieldset.Root = Fieldset

interface LegendProps extends ArkFieldset.LegendProps {}
const Legend = (props: LegendProps) => {
    return <ArkFieldset.Legend {...props} />
}
Fieldset.Legend = Legend
