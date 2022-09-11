import styled from "styled-components";


export const CommunityPageStyle = styled.section`
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        display: flex;
        li {
            text-align: center;
            margin: 10px;
            padding: 10px;
            border: 1px solid ${props => props.theme.colors.accent};
            border-radius: 5px;
            cursor: pointer;
            a > p{
                color: white;
                text-decoration: none;
            }
            &:hover {
                border-color: ${props => props.theme.colors.primary};
            }
            img {
                width: 80px;
                height: 80px;
                border-radius: 100%;
                object-fit: cover;
            }
        }
    }
`