import styled from "styled-components";

export const SettingsContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div:first-child {
        display: flex;
        justify-content: center;
        @media (max-width: 999px) {
            flex-direction: column;
            text-align: center;
            align-items: center;
        }
        div.formSection{
            margin-right: 50px;
            @media (max-width: 999px) {
                margin-right: 0;
            }
        }
        div.propicSection {
            label {
                background-color: none;
                border: 2px solid ${props => props.theme.colors.accent};
                margin-top: 15px;
                padding: 10px 0 10px 0;
                text-align: center;
                cursor: pointer;
                transition: 160ms ease-out;
                border-radius: 5px;
                &:hover {
                    border: 2px solid ${props => props.theme.colors.primary}; 
                }
            }
        }

        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            img {
                width: 180px;
                height: 180px;
                object-fit: cover;
                border-radius: 100%;
                margin-bottom: 20px;
            }
            input[type=file] {
                display: none;
            }
        }
    }
    div:last-child {
        display: flex;
        input[type=button]:first-child {
            margin-right: 10px;
        }
    }
`