import styled from "styled-components";

export const MediaCardContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 999px) {
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 15%;
        height: 15%;
        border-radius: 5px;
        @media (max-width: 999px) {
            width: 50%;
        }
    }

    div.infoContainer {
        margin-left: 15px;
        width: 35%;
        @media (max-width: 999px) {
            width: 65%;
            text-align: center;
        }
        h1 {
            font-size: 35px;
            @media (max-width: 999px) {
                margin-top: 10px;
            }
        }

        hr {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        ul.statusList {
            display: flex;
            list-style: none;
            li {
                div {
                    display: flex;
                    flex-direction: row;
                    p {
                        margin-left: 5px;
                    }
                }
            }
            li:not(:first-child) {
                margin-left: 20px;
            }
        }

        select {
            margin-right: 20px;
        }

        input[type=button] {
            margin-left: 10px;
            @media (max-width: 999px) {
                display: block;
                align-self: center;
                margin: auto;
                margin-top: 15px;
            }
        }
    }
`