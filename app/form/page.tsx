"use client"

import {
    Button,
    Checkbox,
    createListCollection,
    Field,
    Fieldset,
    FileUpload,
    Select,
} from "@/components"
import {
    Cancel01Icon,
    Tick02Icon,
    UnfoldMoreIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useSearchParams } from "next/navigation"
import "./style.css"

export default function Page() {
    const commTypes = createListCollection({
        items: [
            { label: "Emote ($15)", value: "emote" },
            { label: "Half Body ($25)", value: "half-body" },
            { label: "Full Body ($35)", value: "full-body" },
            { label: "Reference Sheet ($75)", value: "ref-sheet" },
        ],
    })

    const searchParams = useSearchParams()
    const commType = searchParams.get("type")

    const fileUploadValidate = (
        file: File,
        details: FileUpload.FileValidateDetails
    ): FileUpload.FileError[] | null => {
        if (
            details.acceptedFiles.find(
                (acceptFile) => acceptFile.name === file.name
            )
        )
            return ["FILE_EXISTS"]
        return null
    }

    return (
        <>
            <h2 className="my-12 text-center">Commission Form</h2>
            <form className="rounded-default border-separator border-2 p-9">
                <div id="form-slot">
                    <div>
                        <h5>Personal Info</h5>
                    </div>
                    <div id="form-group">
                        <Field.Root required>
                            <Field.Label>Your name</Field.Label>
                            <Field.Input placeholder="Name / Nickname" />
                            <Field.ErrorText>
                                Please fill out your name
                            </Field.ErrorText>
                        </Field.Root>

                        <Field.Root required>
                            <Field.Label>Email</Field.Label>
                            <Field.Input
                                type="email"
                                placeholder="your@email.com"
                            />
                            <Field.ErrorText>
                                Please fill out your email
                            </Field.ErrorText>
                        </Field.Root>

                        <Fieldset.Root>
                            <Fieldset.Legend>Other Contacts</Fieldset.Legend>
                            <div className="mt-1 flex flex-col gap-3">
                                <Field.Root>
                                    <Field.Input
                                        addon="Telegram"
                                        placeholder="t.me/username"
                                    />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Input
                                        addon="Discord"
                                        placeholder="Username"
                                    />
                                </Field.Root>
                            </div>
                        </Fieldset.Root>
                    </div>
                </div>

                <div id="form-slot">
                    <div>
                        <h5>Commission Info</h5>
                    </div>
                    <div id="form-group">
                        <Field.Root required>
                            <Select.Root
                                collection={commTypes}
                                value={commType ? [commType] : []}
                            >
                                <Select.Label>
                                    Commission Type
                                    <Field.RequiredIndicator>
                                        Required
                                    </Field.RequiredIndicator>
                                </Select.Label>
                                <Select.Control>
                                    <Select.Trigger>
                                        <Select.ValueText placeholder="Select a Commission Type" />
                                        <Select.Indicator>
                                            <HugeiconsIcon
                                                icon={UnfoldMoreIcon}
                                                size={16}
                                                color="var(--color-black-muted)"
                                            />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                </Select.Control>

                                <Select.Positioner>
                                    <Select.Content>
                                        {commTypes.items.map((item) => (
                                            <Select.Item
                                                key={item.value}
                                                item={item}
                                            >
                                                <Select.ItemText>
                                                    {item.label}
                                                </Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <HugeiconsIcon
                                                        icon={Tick02Icon}
                                                        size={16}
                                                    />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>

                                <Select.HiddenSelect />
                            </Select.Root>
                        </Field.Root>

                        <Field.Root required>
                            <Field.Label>Commission Idea</Field.Label>
                            <Field.Textarea autoresize />
                            <Field.ErrorText>
                                Please provide the idea for your commission
                            </Field.ErrorText>
                        </Field.Root>

                        <Field.Root required>
                            <FileUpload.Root
                                maxFiles={5}
                                maxFileSize={1024 * 1024 * 5}
                                accept={"image/png,image/jpeg"}
                                validate={fileUploadValidate}
                            >
                                <FileUpload.Label>
                                    Reference Sheet / Visual Depiction
                                    <Field.RequiredIndicator>
                                        Required
                                    </Field.RequiredIndicator>
                                </FileUpload.Label>
                                <FileUpload.Dropzone>
                                    <div className="text-center text-sm [&>span]:block">
                                        <span>
                                            Drop your reference sheet here
                                        </span>
                                        <span className="mt-1">
                                            Max. 5MB, max. 5 files, and only
                                            png/jpeg
                                        </span>
                                    </div>
                                    <FileUpload.Trigger asChild>
                                        <Button>Browse Files</Button>
                                    </FileUpload.Trigger>
                                </FileUpload.Dropzone>

                                <FileUpload.ItemGroup>
                                    <FileUpload.Context>
                                        {({ acceptedFiles }) =>
                                            acceptedFiles.map((file) => (
                                                <FileUpload.Item
                                                    key={file.name}
                                                    file={file}
                                                >
                                                    <FileUpload.ItemPreview type="image/*">
                                                        <FileUpload.ItemPreviewImage />
                                                    </FileUpload.ItemPreview>
                                                    <FileUpload.ItemName />
                                                    <FileUpload.ItemSizeText />
                                                    <FileUpload.ItemDeleteTrigger>
                                                        <HugeiconsIcon
                                                            icon={Cancel01Icon}
                                                        />
                                                    </FileUpload.ItemDeleteTrigger>
                                                </FileUpload.Item>
                                            ))
                                        }
                                    </FileUpload.Context>
                                </FileUpload.ItemGroup>
                                <FileUpload.ClearTrigger asChild>
                                    <Button color="var(--color-error)">
                                        Clear all files
                                    </Button>
                                </FileUpload.ClearTrigger>
                                <FileUpload.HiddenInput />
                            </FileUpload.Root>
                            <Field.ErrorText>
                                --Error-based text--
                            </Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Additional Notes</Field.Label>
                            <Field.Textarea autoresize />
                        </Field.Root>
                    </div>
                </div>

                <div id="form-slot">
                    <div id="form-group" className="col-span-full!">
                        <Field.Root className="col-span-full mt-2">
                            <Checkbox.Root>
                                <Checkbox.Control>
                                    <Checkbox.Indicator>
                                        <HugeiconsIcon
                                            icon={Tick02Icon}
                                            size={16}
                                        />
                                    </Checkbox.Indicator>
                                </Checkbox.Control>
                                <Checkbox.Label>
                                    I have read and agreed to the Terms of
                                    Service
                                </Checkbox.Label>
                                <Checkbox.HiddenInput />
                            </Checkbox.Root>
                        </Field.Root>

                        <Field.Root className="col-span-full mt-2">
                            <Checkbox.Root>
                                <Checkbox.Control>
                                    <Checkbox.Indicator>
                                        <HugeiconsIcon
                                            icon={Tick02Icon}
                                            size={16}
                                        />
                                    </Checkbox.Indicator>
                                </Checkbox.Control>
                                <Checkbox.Label>
                                    I agree that this form is not a way to
                                    reserve commission slot, and the artist has
                                    all rights to accept or decline it at their
                                    discretion
                                </Checkbox.Label>
                                <Checkbox.HiddenInput />
                            </Checkbox.Root>
                        </Field.Root>

                        <div className="col-span-full flex justify-end">
                            <Button type="submit">Send</Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
