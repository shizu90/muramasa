import {ButtonStyle} from "./Style";

interface ButtonProps {
    label: string,
    onClick?: (...params: any) => void,
    size?: number,
    noBg?: boolean,
    type?: string
}

export default function Button(props: ButtonProps) {
    return (
        <ButtonStyle type={props.type ? props.type : "button"} value={props.label} size={props.size} noBg={props.noBg} onClick={props.onClick}/>
    )
}