import Form from "../../components/form/Form";
import { RegisterPageStyle } from "./Style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
    const {register, response} = useApi();
    const navigate = useNavigate();

    const onSubmit = (event: any, obj: any) => {
        if(!obj["username"].match("^.{1,24}$") || !obj["email"].match("[a-z0-9]+@[a-z]+\.[a-z]{2,3}") || obj["password"] !== obj["confirmPassword"] || !obj["password"].match("^.{6,24}$")) {
            event.preventDefault();
        }else {
            event.preventDefault();
            register(obj);
            toast.success("Successfully registered.");
        }
    }

    useEffect(() => {
        if(response && response.status >= 200 && response.status <= 300) {
            navigate("/login");
        }
    }, [response])

    return (
        <RegisterPageStyle>
            <Form
                labels={["username", "email", "password", "confirmPassword"]}
                controlObject={{"username": "", "email": "", "password": "", "confirmPassword": ""}}
                onSubmit={onSubmit}
                buttonLabel={"Register"}
                errMsgs={["Username max length is 24", "Email is not valid", "Password length is min 6 and max 24", "Confirmation mismatch"]}
                errPatterns={["^.{1,24}$", "[a-z0-9]+@[a-z]+\.[a-z]{2,3}", "^.{6,24}$"]}/>
            {response && response.status > 400 ? (
                <p className="errorMessage">{response.message}</p>
            ) : (
                null
            )
            }

            <Link to="/login">
                <p>Already have an account? Sign in here</p>
            </Link>
        </RegisterPageStyle>
    )
}