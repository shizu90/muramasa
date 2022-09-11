import { useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { CommunityPageStyle } from "./Style";

export default function CommunityPage() {
    const { getAllUsers, response } = useApi();

    useEffect(() => {
        getAllUsers();
    }, [])

    useEffect(() => {
        console.log(response);
    }, [response])
    return (
        <CommunityPageStyle>
            {response && response.data ? (
                <ul>
                    {response.data.map((user: any) => (
                        <li>
                            <Link to={`/profile/${user.id}`}>
                                <img src={user.profilePic || "/nopropic.png"} draggable={false}/>
                                <p>{user.username}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ):(
                <p>Carregando</p>
            )
            }
        </CommunityPageStyle>
    )
}