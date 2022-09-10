import styled from "styled-components";

export const ProfilePageStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20%;

    hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const ProfileHeader = styled.div`
    margin-top: 50px;
    img {
        width: 135px;
        height: 135px;
        object-fit: cover;
        border-radius: 100%;
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
        }
        li:first-child {
            margin-left: 5rem;
        }
    }
    input {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`