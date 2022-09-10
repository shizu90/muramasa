import styled from "styled-components";

export const SearchPageStyle = styled.div`
    margin-top: 63px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input[type=text] {
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
        input[type=text] {
            width: 300px;
            margin-bottom: 10px;
        }
    }
    input[type=button] {
        margin-left: 10px;
    }
`

export const SearchResult = styled.div`
    display: inline-block;
    margin-top: 3em;
`