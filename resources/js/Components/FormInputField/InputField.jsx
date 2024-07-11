import { Datepicker, Label, Select, TextInput, Textarea } from "flowbite-react";

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

            {formInputType == inputType.InputDatePicker && (
                <Datepicker id={id} name={name} {...props} />
            )}

            {formInputType == inputType.InputSelect && (
                <Select id={id} name={name} {...props}>
                    <option value="">Pilih Kategori</option>
                    {props.options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </Select>
            )}

            {errorMsg ? (
                <p className="text-sm text-red-600 ">{errorMsg}</p>
            ) : null}
        </>
    );
}
