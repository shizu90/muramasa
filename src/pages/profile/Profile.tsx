import { useEffect, useState } from "react";
import FavoritesContainer from "../../components/favoritesContainer/FavoritesContainer";
import ListContainer from "../../components/listContainer/ListContainer";
import useApi from "../../hooks/useApi";
import { ProfileHeader, ProfilePageStyle } from "./Style";

export default function ProfilePage() {
    const id = window.location.href.split("/")[4];
    const { getUser, response } = useApi();
    const [type, setType] = useState<string>("favorites");

    useEffect(() => {
        getUser(id);
    }, [])

    return (
        <ProfilePageStyle>
            {response && response.status < 400 ?
                (   <>
                    <ProfileHeader>
                        <img src={response.data.profilePic || "/nopropic.png"} draggable={false}/>
                        <h1>{response.data.username}</h1>
                        <ul>
                            <li onClick={() => setType("favorites")}>Favorites</li>
                            <li onClick={() => setType("anime")}>Anime list</li>
                            <li onClick={() => setType("manga")}>Manga list</li>
                        </ul>
                    </ProfileHeader>
                    {type === "favorites" ? (
                        <FavoritesContainer userFavorites={response.data.favorites}/>
                    ) : type === "anime" ? (
                        <ListContainer type={type} mediaList={response.data.animeList}/>
                    ) : (
                        <ListContainer type={type} mediaList={response.data.mangaList}/>
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