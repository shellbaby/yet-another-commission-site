"use client"

import {
    Button,
    Checkbox,
    createListCollection,
    Field,
    Fieldset,
    FileUpload,
    Portal,
    Select,
    useFileUpload,
} from "@/components"
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react"

export default function Page() {
    const commTypes = createListCollection({
        items: ["Emote", "Half Body", "Full Body", "Reference Sheet"],
    })

    const fileUploadValidate = (file: File): FileUpload.FileError[] | null => {
        if (
            fileUploadContext.acceptedFiles.find(
                (acceptFile) => acceptFile.name === file.name
            )
        )
            return ["FILE_EXISTS"]

        return null
    }

    const fileUploadContext = useFileUpload({
        maxFiles: 5,
        accept: "image/png,image/jpeg",
        validate: fileUploadValidate,
    })

    return (
        <div>
            <h2 className="mt-8 text-center">Commission Form</h2>
            <div className="mt-8 border p-4">
                <div className="grid grid-cols-6 gap-4">
                    <Field.Root required className="col-span-4">
                        <Field.Label>Your name</Field.Label>
                        <Field.Input placeholder="Name / Nickname" />
                        <Field.ErrorText>
                            Please fill out your name
                        </Field.ErrorText>
                    </Field.Root>

                    <Field.Root required className="col-span-4">
                        <Field.Label>Email</Field.Label>
                        <Field.Input
                            type="email"
                            placeholder="your@email.com"
                        />
                        <Field.ErrorText>
                            Please fill out your email
                        </Field.ErrorText>
                    </Field.Root>

                    <Fieldset.Root className="col-span-4">
                        <Fieldset.Legend>Other Contacts</Fieldset.Legend>
                        <Field.Root>
                            <Field.Label>Telegram</Field.Label>
                            <Field.Input />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Discord</Field.Label>
                            <Field.Input />
                        </Field.Root>
                    </Fieldset.Root>

                    <Field.Root className="col-span-4" required>
                        <Select.Root collection={commTypes}>
                            <Select.Label>Commission Type</Select.Label>
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Select a Commission Type" />
                                    <Select.Indicator asChild>
                                        <CaretUpDownIcon />
                                    </Select.Indicator>
                                </Select.Trigger>
                            </Select.Control>

                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {commTypes.items.map((item) => (
                                            <Select.Item key={item} item={item}>
                                                <Select.ItemText>
                                                    {item}
                                                </Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <CheckIcon />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>

                            <Select.HiddenSelect />
                        </Select.Root>
                    </Field.Root>

                    <Field.Root className="col-span-4" required>
                        <Field.Label>Commission Idea</Field.Label>
                        <Field.Textarea
                            autoresize
                            placeholder="Your Commission Idea Here"
                        />
                        <Field.ErrorText>
                            Please provide the idea for your commission
                        </Field.ErrorText>
                    </Field.Root>

                    <Field.Root className="col-span-4" required>
                        <FileUpload.RootProvider value={fileUploadContext}>
                            <FileUpload.Label>Reference Sheet</FileUpload.Label>
                            <FileUpload.Dropzone>
                                Drop Your Reference Sheet Here
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
                                                    <XIcon size={24} />
                                                </FileUpload.ItemDeleteTrigger>
                                            </FileUpload.Item>
                                        ))
                                    }
                                </FileUpload.Context>
                            </FileUpload.ItemGroup>
                            <FileUpload.ClearTrigger asChild>
                                <Button>Clear all files</Button>
                            </FileUpload.ClearTrigger>
                            <FileUpload.HiddenInput />
                        </FileUpload.RootProvider>
                        <Field.ErrorText>--Error-based text--</Field.ErrorText>
                    </Field.Root>

                    <hr className="col-span-full" />

                    <Field.Root className="col-span-full mt-2">
                        <Checkbox.Root>
                            <Checkbox.Control>
                                <Checkbox.Indicator>
                                    <CheckIcon weight="bold" />
                                </Checkbox.Indicator>
                            </Checkbox.Control>
                            <Checkbox.Label>
                                I have read and agreed to the Terms of Service
                            </Checkbox.Label>
                            <Checkbox.HiddenInput />
                        </Checkbox.Root>
                    </Field.Root>

                    <Field.Root className="col-span-full mt-2">
                        <Checkbox.Root>
                            <Checkbox.Control>
                                <Checkbox.Indicator>
                                    <CheckIcon weight="bold" />
                                </Checkbox.Indicator>
                            </Checkbox.Control>
                            <Checkbox.Label>
                                I agree that this form is not a way to reserve
                                commission slot, and the artist has all rights
                                to accept or decline it at their discretion
                            </Checkbox.Label>
                            <Checkbox.HiddenInput />
                        </Checkbox.Root>
                    </Field.Root>

                    <hr className="col-span-full" />

                    <div className="col-span-full flex justify-end">
                        <Button>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
