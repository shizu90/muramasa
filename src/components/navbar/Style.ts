import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.background}cc;
    padding-top: 1em;
    padding-bottom: 1em;
    flex-wrap: wrap;
    width: 100%;
    position: fixed;
    top: 0;
    align-items: center;
    z-index: 1;
    a {
        color: inherit;
        text-decoration: none;
        font-size: 18px;
        letter-spacing: 1px;
        cursor: pointer;
        h1 {
            color: ${props => props.theme.colors.primary};
            font-size: 30px;
        }
        &:hover {
            opacity: 0.8;
        }
    }

    div.navbarResponsive {
        height: 40px;
        width: 40px;
        cursor: pointer;
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }

    ul.navbarMenu {
        list-style: none;
        display: flex;
        align-items: center;
        li {
            margin-left: 2em;
        }
        li:nth-child(4) {
            display: flex;
            align-items: center;
            a {
                display: flex;
            }
        }

        li svg {
            height: 25px;
            width: 25px;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            overflow: hidden;
            flex-direction: column;
            li {
                padding-top: 20px;
            }
            width: 100%;
            max-height: ${(props) => props.hidden ? "300px" : "0"};
        }
    }
`;