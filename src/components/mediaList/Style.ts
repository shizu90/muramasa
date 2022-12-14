import styled from "styled-components";

export const MediaGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    list-style: none;
    grid-gap: 1.5em;
    margin-top: 5%;
    text-align: center;

    a {
        text-decoration: none;
    }

    li {
        cursor: pointer;
        &:hover>p{
            color: ${props => props.theme.colors.primary};
        }
    }

    img {
        max-width: 100%;
        border-radius: 5px;
        @media (max-width: 999px) {
            max-width: 80%;
        }
    }

    p {
        font-size: 16px;
        margin-top: 10px;
        color: ${props => props.theme.colors.text};
    }
`