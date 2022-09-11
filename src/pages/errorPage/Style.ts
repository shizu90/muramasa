import styled from "styled-components";

export const ErrorPageStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div {
        display: flex;
        h1 {
            font-weight: 600;
            padding-right: 20px;
            border-right: 2px solid ${props => props.theme.colors.text};
            color: ${props => props.theme.colors.text};
        }
        p {
            font-size: 24px;
            padding-left: 20px;
        }
    }
`