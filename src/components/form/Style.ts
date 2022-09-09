import styled from "styled-components";

export const FormContainer = styled.form`
    width: 330px;

    div {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 10px;
        }

        input {
            margin-bottom: 10px;
        }
    }

    input[type=submit] {
        margin-top: 10px;
        float: right;
    }
`