import styled from "styled-components";

export const SelectStyle = styled.select`
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.accent};
    cursor: pointer;
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
    }

    option {
        background-color: black;
        outline: none;
        border: 1px solid ${props => props.theme.colors.primary};
    }
`