import styled from "styled-components";

export const ProfilePageStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 5%;
    @media (max-width: 999px) {
        padding-top: 25%;
    }
    hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const ProfileHeader = styled.div`
    img {
        width: 135px;
        height: 135px;
        object-fit: cover;
        border-radius: 100%;
        @media (max-width: 999px) {
            width: 100px;
            height: 100px;
        }
    }

    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    div {
        margin-bottom: 20px;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        font-size: 17px;
        border: 1px solid ${props => props.theme.colors.accent};
        border-radius: 5px;
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        li {
            cursor: pointer;
            margin-right: 20px;
            transition: 150ms ease-out;
            &:hover{
                color: ${props => props.theme.colors.primary}
            }
        }
        li:last-child {
            margin-right: 5rem;
            @media (max-width: 999px) {
                margin-right: 5px;
            }
        }
        li:first-child {
            margin-left: 5rem;
            @media (max-width: 999px) {
                margin-left: 5px;
            }
        }
    }
    input {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`