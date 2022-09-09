import FormField from "../formfield/FormField";
import Button from "../button/Button";
import { FormContainer } from "./Style";
import { useState } from "react";

interface FormProps {
    labels: string[],
    controlObject: object,
    buttonLabel: string,
    errMsgs: string[],
    errPatterns?: string[],
    onSubmit: (...params: any) => void
}

export default function Form(props: FormProps) {
    const [values, setValues] = useState<any>(props.controlObject);

    const labellize = (string: string): string => {
        for(let i=0;i<string.length;i++) {
            if(string.charAt(i) === string.charAt(i).toUpperCase()) {
                const labellizedString = string.slice(0, i).charAt(0).toUpperCase() + string.slice(1, i) + " " + string.slice(i).toLowerCase() + ":";
                return labellizedString;
            }
        }
        const labellizedString = string.charAt(0).toUpperCase() + string.slice(1) + ":";
        return labellizedString;
    }
    const handleSubmit = (event: any, obj: object) => {
        props.onSubmit(event, obj);
    }

    return (
        <FormContainer onSubmit={(e: any) => handleSubmit(e, values)}>
            {props.labels.map((label, i) => label === "password" || label === "confirmPassword" ? (
                <FormField 
                    type="password" 
                    value={values[label]} 
                    onChange={(string) => {setValues({...values, [label]: string});}} 
                    labelName={labellize(props.labels[i])} 
                    size={330} 
                    key={label}
                    errMsg={props.errMsgs[i]}
                    errPattern={props.errPatterns ? props.errPatterns[i] : ""}
                    />
            ) : (
                <FormField 
                    value={values[label]} 
                    onChange={(string) => {setValues({...values, [label]: string})}} 
                    labelName={labellize(props.labels[i])} 
                    size={330} 
                    key={label}
                    errMsg={props.errMsgs[i]}
                    errPattern={props.errPatterns ? props.errPatterns[i] : ""}/>
            ))}
            <Button label={props.buttonLabel} type={"submit"}></Button>
        </FormContainer>
    )
}