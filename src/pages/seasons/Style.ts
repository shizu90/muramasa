import styled from "styled-components";

export const SeasonsPageStyle = styled.section`
    margin-top: 63px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input[type=number] {
        margin-right: 10px;
    }
`

export const SearchHandler = styled.div`
    display: inline-block;
    margin-top: 5em;
    select {
        margin-left: 0;
    }
    @media (max-width: 999px) {
        display: flex;
        flex-direction: column;
        width: 200px;
        text-align: center;
        align-items: center;
        input[type=number] {
            width: 300px;
            margin-bottom: 10px;
        }
    }
    input[type=button] {
        margin-left: 10px;
        @media (max-width: 999px) {
            margin-left: 0;
            margin-top: 10px;
        }
    }
`

export const SearchResult = styled.div`
    display: inline-block;
    margin-top: 3em;
`