import { NavbarContainer } from "./Style";
import { useEffect, useState, useContext } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const { validateToken, response } = useApi();

    const onClickShow = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        validateToken(JSON.parse(localStorage.getItem("authKey") || JSON.stringify({token: "", id: ""})).token);
    }, [context, context?.auth])
    
    useEffect(() => {
        if(response && response.status < 400) {
            const token = JSON.parse(localStorage.getItem("authKey") || JSON.stringify({token: "", id: ""})).token;
            localStorage.setItem("authKey", JSON.stringify({token: token, id: response.data}));
            setId(response.data);
            setLogged(true);
            if(context?.auth.id === "" && context?.auth.token !== "") {
                context?.setAuth({token: context?.auth.token, id: response.data});
            }
        }else {
            if(response && response.status === 401) {
                setLogged(false);
            }
        }
    }, [context, response])
    
    const handleLogout = () => {
        localStorage.clear();
        context?.setAuth({token: "", id: ""});
    }

    return (
        <NavbarContainer hidden = {showMenu}>
            <Link to="/">
                <h1>MURAMASA</h1>
            </Link>
            <div className="navbarResponsive" onClick={() => onClickShow()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div>
            <ul className="navbarMenu">
                <li><Link to="/">Search</Link></li>
                <li><Link to="/seasons">Seasons</Link></li>
                {logged ? (
                    <>
                        <li>
                            <Link to={`/profile/${id}`}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={`/settings/${id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </Link>
                        </li>
                        <li onClick={() => handleLogout()}>
                            <svg onClick={() => setLogged(false)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </li>
                    </>
                ) : (
                    <>
                        <li><Button label={"Login"} onClick={() => navigate("/login")} size={20} noBg={true}></Button></li>
                        <li><Button label={"Sign up"} onClick={() => navigate("/register")}></Button></li>
                    </>
                )}
            </ul>
        </NavbarContainer>
    )
}