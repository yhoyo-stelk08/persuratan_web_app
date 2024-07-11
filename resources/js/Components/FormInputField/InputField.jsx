import { Label, TextInput, Textarea } from "flowbite-react";

const inputType = {
    InputText: "InputText",
    InputTextArea: "InputTextArea",
    InputSelect: "InputSelect",
    InputDatePicker: "InputDate",
    InputNumber: "InputNumber",
};
export default function FormInputTextInput({
    id,
    name,
    label,
    errorMsg,
    formInputType,
    ...props
}) {
    return (
        <>
            <Label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </Label>
            {formInputType == inputType.InputText && (
                <TextInput
                    name={name}
                    id={id}
                    placeholder={label}
                    type="text"
                    {...props}
                />
            )}

            {formInputType == inputType.InputNumber && (
                <TextInput
                    name={name}
                    id={id}
                    placeholder={label}
                    type="number"
                    {...props}
                />
            )}

            {formInputType == inputType.InputTextArea && (
                <Textarea name={name} id={id} placeholder={label} {...props} />
            )}

            {errorMsg ? (
                <p className="text-sm text-red-600 ">{errorMsg}</p>
            ) : null}
        </>
    );
}
