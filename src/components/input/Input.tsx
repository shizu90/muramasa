import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { InputStyle } from "./Style";

interface InputProps {
    size?: number,
    placeholder?: string,
    type?: string,
    onBlur?: (...params: any) => void,
    value: string,
    onChange: (...params: any) => void,
    debounce: boolean
}

export default function Input(props: InputProps) {
    const [displayValue, setDisplayValue] = useState<string>(props.value);
    const debouncedChange = useDebounce(props.onChange, 500);
    function handleChange(event: any) {
        props.debounce ? debouncedChange(event.target.value) : props.onChange(event.target.value);
        setDisplayValue(event.target.value);
    }

    return (
        <InputStyle spellCheck={false} type={props.type ? props.type : "text"} onChange={handleChange} placeholder={props.placeholder} size={props.size} value={displayValue} onBlur={props.onBlur}></InputStyle>
    )
}