import styled from "styled-components";

interface ButtonStyleProps {
    noBg?: boolean
    size?: number
}

export const ButtonStyle = styled.input<ButtonStyleProps>`
    padding-left: ${props => props.size ? props.size - 3 : 17}px;
    padding-right: ${props => props.size ? props.size -3 : 17}px;
    padding-top: ${props => props.size ? (props.size/2) - 3 : 7}px;
    padding-bottom: ${props => props.size ? (props.size/2) - 3 : 7}px;
    font-size: 17px;
    background-color: ${props => props.noBg ? "transparent" : props.theme.colors.primary};
    outline: none;
    border: ${props => props.noBg ? "2px solid" + props.theme.colors.primary : "none"};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    border-radius: 2px;
    &:hover {
        background-color: ${props => props.noBg ? "transparent" : props.theme.colors.primary}cc;
    }
`