import Form from "../../components/form/Form";
import { LoginPageStyle } from "./Style";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
    const {login, validateToken, response} = useApi();
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event: any, obj: any) => {
        event.preventDefault();
        if(obj["email"] !== "" || obj["password"] !== "") {
            login(obj);
        }
    }

    useEffect(() => {
        if(response) {
            if(response.data) {
                localStorage.setItem("authKey", JSON.stringify({token: response.data, id: ""}));
                context?.setAuth({token: response.data, id: ""});
            }
        }
    }, [response])
    return (
        <LoginPageStyle>
            <Form
                labels={["email", "password"]}
                controlObject={{"email": "", "password": ""}}
                onSubmit={handleSubmit}
                buttonLabel={"Log in"}
                errMsgs={["", ""]}/>
            <Link to="/register">
                <p>Don't have an account? Sign up here</p>
            </Link>
        </LoginPageStyle>
    )
}