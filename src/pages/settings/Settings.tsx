import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SettingsContainer from "../../components/settingsContainer/SettingsContainer";
import { Session } from "../../context/@types/AuthType";
import { AuthContext } from "../../context/AuthContext";
import { SettingsPageStyle } from "./Style";


export default function SettingsPage() {
	const navigate = useNavigate();
	const [session, setSession] = useState<Session>({token: "", id: ""});
    const context = useContext(AuthContext);
    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem("authKey") || JSON.stringify({token: "", id: ""}))
		if(context?.auth.token !== "" && context?.auth.id !== "") {
			setSession(context ? context.auth : session);
		}
		if(obj && obj.token !== "" && obj.id !== "") {
			setSession(obj);
		}
    }, [context?.auth, localStorage.getItem("authKey")])

	return (
		<SettingsPageStyle>
			{session.token !== "" && session.id !== "" && (
				<SettingsContainer session={session}/>
			)}
		</SettingsPageStyle>
	)
}