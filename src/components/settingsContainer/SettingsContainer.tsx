import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Session } from "../../context/@types/AuthType";
import useApi from "../../hooks/useApi";
import Button from "../button/Button";
import FormField from "../formfield/FormField";
import { SettingsContainerStyle } from "./Style";

interface SettingsContainerProps {
    session: Session
}

interface SendDataObjectInterface {
    username: string,
    email: string,
    password?: string
}

export default function SettingsContainer(props: SettingsContainerProps) {
    const [user, setUser] = useState<any>();
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [propic, setPropic] = useState<any>();
    const [file, setFile] = useState<any>();
    const navigate = useNavigate();
    const { getUser, uploadImage, updateUser, deleteUser, response } = useApi();

    const handleSave = () => {
        const obj: SendDataObjectInterface = {
            "username": username.match("^.{1,24}$") ? username : user.username,
            "email": email.match("[a-z0-9]+@[a-z]+\.[a-z]{2,3}") ? email : user.email
        }
        if(password.match("^.{6,24}$")) obj.password = password;
        updateUser(props.session.id, obj, props.session.token);
        uploadImage(file, props.session.token);
        navigate(`/profile/${props.session.id}`)
    }

    const handleDelete = () => {
        deleteUser(user.id, props.session.token);
        navigate("/");
    }

    const handleUpload = (event: any) => {
        const file = event.target.files[0];
        setFile(file);
        const path = new FileReader();
        path.onloadend = function() {setPropic(path.result)}
        if(file instanceof Blob)path.readAsDataURL(file);
    }

    useEffect(() => {
        if(props.session.token === "" || props.session.id === "") {
            navigate("/404");
        }else {
            getUser(props.session.id);
        }
    }, [props.session])
    
    useEffect(() => {
        if(response) {
            setUser(response.data);
        }
        if(response && response.status === 401) {
            navigate("/404");
        }
    }, [response])

    return (
        <SettingsContainerStyle>
            {props.session.token !== "" && props.session.token !== "" && user ? (
                <>
                    <div>
                        <div className="formSection">
                            <FormField labelName="Change username: " value={user.username} onChange={setUsername} errMsg={"Username length should be 1-24"} errPattern={"^.{1,24}$"}/>
                            <FormField labelName="Change email: " value={user.email} onChange={setEmail} errMsg={"Invalid email"} errPattern={"[a-z0-9]+@[a-z]+\.[a-z]{2,3}"}/>
                            <FormField labelName="Change password: " value={password || ""} onChange={setPassword} errMsg={"Password length should be 6-24"} errPattern={"^.{6,24}$"}/>
                        </div>
                        <div className="propicSection">
                            <img src={propic || user.profilePic || "/nopropic.png"} draggable={false}/>
                            <label>
                                Change propic
                                <input type="file" accept={"image/png, image/gif, image/jpeg"} onChange={(e) => {handleUpload(e)}}></input>
                            </label>
                        </div>
                    </div>
                    <div>
                        <Button label={"Save"} onClick={() => handleSave()}/>
                        <Button label={"Delete account"} onClick={() => handleDelete()} noBg={true}/>
                    </div>
                </>
            ) : (
                <h1>Unacessible</h1>
            )
            }
        </SettingsContainerStyle>
    )
}