import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router";
import FavoritesContainer from "../../components/favoritesContainer/FavoritesContainer";
import ListContainer from "../../components/listContainer/ListContainer";
import useApi from "../../hooks/useApi";
import theme from "../../styles/theme";
import { ProfileHeader, ProfilePageStyle } from "./Style";

interface User {
    id: string,
    username: string,
    profilePic: string,
    favorites: {
        anime: [],
        manga: []
    },
    animeList: {watching: [], completed: [], dropped: [], plans: []},
    mangaList: {reading: [], completed: [], dropped: [], plans: []}
}

export default function ProfilePage() {
    const navigate = useNavigate();
    const id = window.location.href.split("/")[4];
    const { getUser, response } = useApi();
    const [type, setType] = useState<string>("favorites");
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getUser(id);
    }, [])

    useEffect(() => {
        if(response && response.status < 400) {
            setUser(response.data);
        }else {
            if(response && response.status === 404) {
                navigate("/404");
            }
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
                    ) : type === "manga" ? (
                        <ListContainer type={type} mediaList={user.mangaList}/>
                    ) : null
                    }
                    </>
                ) : (
                    <TailSpin height={"80"} width={"80"} color={theme.colors.primary} wrapperClass={"loading"}/>
                )
            }
        </ProfilePageStyle>
    )
}