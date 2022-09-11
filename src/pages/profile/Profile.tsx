import { useEffect, useState } from "react";
import FavoritesContainer from "../../components/favoritesContainer/FavoritesContainer";
import ListContainer from "../../components/listContainer/ListContainer";
import useApi from "../../hooks/useApi";
import { ProfileHeader, ProfilePageStyle } from "./Style";

export default function ProfilePage() {
    const id = window.location.href.split("/")[4];
    const { getUser, response } = useApi();
    const [type, setType] = useState<string>("favorites");
    const [user, setUser] = useState<any>();

    useEffect(() => {
        getUser(id);
    }, [])

    useEffect(() => {
        if(response && response.status < 400) {
            setUser(response.data);
        }
    }, [response, user])
    return (
        <ProfilePageStyle>
            {user && response.status < 400 ?
                (   <>
                    <ProfileHeader>
                        <img src={user.profilePic || "/nopropic.png"} draggable={false}/>
                        <h1>{user.username}</h1>
                        <ul>
                            <li onClick={() => setType("favorites")}>Favorites</li>
                            <li onClick={() => setType("anime")}>Anime list</li>
                            <li onClick={() => setType("manga")}>Manga list</li>
                        </ul>
                    </ProfileHeader>
                    {type === "favorites" ? (
                        <FavoritesContainer userFavorites={user.favorites}/>
                    ) : type === "anime" ? (
                        <ListContainer type={type} mediaList={user.animeList}/>
                    ) : (
                        <ListContainer type={type} mediaList={user.mangaList}/>
                    )
                    }
                    </>
                ) : (
                    <h1>not found</h1>
                )
            }
        </ProfilePageStyle>
    )
}