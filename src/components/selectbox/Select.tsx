import { useState } from "react";
import { SelectStyle } from "./Style";

interface SelectProps {
    values: string[],
    onChange: (...params: any) => void,
    value: string
}

export default function Select(props: SelectProps) {
    const [displayValue, setDisplayValue] = useState<string>(props.value);
    function handleChange(event: any) {
        props.onChange(event.target.value);
        setDisplayValue(event.target.value);
    }

    return (
        <SelectStyle onChange={handleChange} value={displayValue}>
            {props.values.map(value => (
                <option key={value}>{value}</option>
            ))}
        </SelectStyle>
    )
}