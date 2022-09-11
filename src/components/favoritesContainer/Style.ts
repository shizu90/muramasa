import styled from "styled-components";

export const FavoritesContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        p {
            font-size: 18px;
        }

        ul {
            display: flex;
            list-style: none;
            margin-top: 10px;
            justify-content: center;
            li {
                margin-right: 5px;
                img {
                    width: 140px;
                    height: 200px;
                    border-radius: 6px;
                    @media (max-width: 999px) {
                        width: 70px;
                        height: 100px;
                    }
                }
            }

            li:last-child {
                margin-right: 0;
                margin-left: 5px;
            }
        }
    }
`