import { useEffect } from "react";
import FavoritesContainer from "../../components/favoritesContainer/FavoritesContainer";
import useApi from "../../hooks/useApi";
import { ProfileHeader, ProfilePageStyle } from "./Style";

export default function ProfilePage() {
    const id = window.location.href.split("/")[4];
    const { getUser, response } = useApi();

    useEffect(() => {
        getUser(id);
    }, [])

    return (
        <ProfilePageStyle>
            {response && response.status < 400 ?
                (   <>
                    <ProfileHeader>
                        <img src={response.data.propic || "/nopropic.png"} draggable={false}/>
                        <h1>{response.data.username}</h1>
                        <ul>
                            <li>Favorites</li>
                            <li>Anime list</li>
                            <li>Manga list</li>
                        </ul>
                    </ProfileHeader>
                    <FavoritesContainer userFavorites={response.data.favorites}/>
                    </>
                ) : (
                    <h1>not found</h1>
                )
            }
        </ProfilePageStyle>
    )
}