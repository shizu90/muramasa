import { useState } from "react";
import { NumberInputStyle } from "./Style";

interface NumberInputProps {
    maxNumber: number,
    minNumber: number,
    onChange: (...params: any) => void,
    value: number,
    size?: number
}

export default function NumberInput(props: NumberInputProps) {
    const [displayValue, setDisplayValue] = useState<number>(props.value);

    const handleChange = (event: any) => {
        setDisplayValue(parseInt(event.target.value));
        props.onChange(parseInt(event.target.value));
    }

    return (
        <NumberInputStyle type={"number"} max={props.maxNumber} min={props.minNumber} value={displayValue} onChange={e => handleChange(e)}></NumberInputStyle>
    )
}