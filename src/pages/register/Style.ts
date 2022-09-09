import styled from "styled-components";

export const RegisterPageStyle = styled.section`
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 999px) {
        padding-top: 20%;
    }
    
    form {
        margin-top: 10%;
    }

    a {
        margin-top: 1%;
        color: inherit;
    }

    p.errorMessage {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 14px;
    }
`