import { NavbarContainer } from "./Style";
import { useEffect, useState, useContext } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../context/AuthContext";

interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
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
    }, [context?.auth])

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
    }, [response])
    
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
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/seasons">Seasons</Link></li>
                <li><Link to="/community">Community</Link></li>
                {logged ? (
                    <>
                        <li>
                            <Link to={`/profile/${id}`}>Profile</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
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