import styled from "styled-components";

interface MediaTypeProps {
    selected: boolean
}

export const ListContainerStyle = styled.div`
    width: inherit;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 5px;
    ul {
        list-style: none;
    }
    ul:first-child{
        display: flex;
        justify-content: center;
        padding: 10px;
        padding-top: 15px;
        margin-bottom: 15px;
        li {
            margin-right: 15px;
            cursor: pointer;
            transition: 100ms ease-out;
            padding: 5px;
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

export const MediaType = styled.li<MediaTypeProps>`
    background-color: ${props => props.selected ? props.theme.colors.primary : "transparent"};
    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`

export const MediaGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    list-style: none;
    grid-gap: 1.5em;
    margin-top: 5%;
    text-align: center;
    padding: 10px;
    a {
        text-decoration: none;
    }

    li {
        a {
            cursor: pointer;
            &:hover>p{
                color: ${props => props.theme.colors.primary};
            }
        }
        span.mediaLength {
            margin: 5px;
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