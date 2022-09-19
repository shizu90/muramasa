import styled from "styled-components";

export const LoginPageStyle = styled.section`
    padding-top: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 999px) {
        padding-top: 20%;
    }
    form {
        margin-top: 10%;
    }

    a {
        color: inherit;
        margin-top: 1%;
    }
    p.errorMessage {
        color: ${props => props.theme.colors.primary};
    }
`
