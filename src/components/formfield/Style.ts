import styled from "styled-components";

interface FormFieldContainerProps {
    focused?: boolean
}

export const FormFieldContainer = styled.div<FormFieldContainerProps>`
    p.errorMessage {
        opacity: ${props => props.focused ? 1 : 0};
        margin-bottom: 10px;
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
    }
`