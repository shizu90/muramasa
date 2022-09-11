import { ErrorPageStyle } from "./Style";

interface ErrorPageProps {
    errorCode?: number,
    errorMessage?: string
}

export default function ErrorPage(props: ErrorPageProps) {
    return (
        <ErrorPageStyle>
            <div><h1>{props.errorCode ? props.errorCode : 404}</h1><p>{props.errorMessage ? props.errorMessage : "Not found."}</p></div>
        </ErrorPageStyle>
    )
}