import { useState } from "react";
import Input from "../input/Input";
import { FormFieldContainer } from "./Style";

interface FormFieldProps {
    labelName: string,
    onChange: (...params: any) => void,
    value: string,
    errMsg: string,
    errPattern: string,
    placeholder?: string,
    size?: number,
    type?: string
}

export default function FormField(props: FormFieldProps) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <FormFieldContainer focused={focused}>
            <label>{props.labelName}</label>
            <Input debounce={false} value={props.value} onChange={props.onChange} placeholder={props.placeholder} size={props.size} type={props.type} onBlur={() => setFocused(true)}></Input>
            <p className="errorMessage">{!props.value.match(props.errPattern) ? props.errMsg : ""}</p>
        </FormFieldContainer>
    )
}