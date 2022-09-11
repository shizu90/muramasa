import styled from "styled-components";

export const ListContainerStyle = styled.div`
width: inherit;
    ul {
        list-style: none;
    }
    ul:first-child{
        display: flex;
        justify-content: center;
        border: 1px solid ${props => props.theme.colors.accent};
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 5px;
        li {
            margin-right: 15px;
            cursor: pointer;
            transition: 100ms ease-out;
            &:hover {
                color: ${props => props.theme.colors.primary};
            }
        }
        li:first-child {
            margin-left: 10px;
            @media (max-width: 999px) {
                margin-left: 0;
            }
        }
        li:last-child {
            margin-right: 0;
        }  
    }
    ul:last-child {
        display: grid;
        width: 500px;
        @media (max-width: 999px) {
            width: 300px;
        }
        li {
            img {
                width: 150px;
                @media(max-width: 999px) {
                    width: 120px;
                }
            }
        }
    }
`

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
            max-width: 50%;
        }
    }

    p, span {
        font-size: 16px;
        margin-top: 10px;
        color: ${props => props.theme.colors.text};
    }
`