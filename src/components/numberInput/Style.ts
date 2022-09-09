import styled from "styled-components";

export const NumberInputStyle = styled.input`
    border: 1px solid ${props => props.theme.colors.accent};
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    padding: 13px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
    }
`