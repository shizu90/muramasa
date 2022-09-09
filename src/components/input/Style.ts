import styled from "styled-components";

interface InputProps {
    size?: number
}

export const InputStyle = styled.input<InputProps>`
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.accent};
    width: ${props => props.size ? props.size : 250}px;
    padding: 10px;
    color: ${props => props.theme.colors.text};
    letter-spacing: 1.7px;
    font-family: inherit;
    font-size: 16px;
    @media (max-width: 999px) {
        width: ${props => props.size ? props.size/2 : 150};
    }
    &:focus {
        box-shadow: 0px 0px 20px ${props => props.theme.colors.background};
        outline: none;
    }
`