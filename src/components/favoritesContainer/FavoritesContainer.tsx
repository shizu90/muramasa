import { Link } from "react-router-dom";
import { FavoritesContainerStyle } from "./Style";

interface FavoritesContainer {
    userFavorites: any
}

export default function FavoritesContainer(props: FavoritesContainer) {

    return ( 
        <FavoritesContainerStyle>
            <div className={"favoritesAnime"}>
                <p>Favorites animes</p>
                {props.userFavorites.anime.length > 0 ? (
                    <ul>
                        {props.userFavorites.anime.map((item: any) => item !== null && (
                            <Link to={`/${item.type.toLowerCase()}/${item.id}`}>
                                <li key={item.id}>
                                    <img src={item.imgSource || "/no-image.png"} draggable={false}></img>
                                </li>
                            </Link>  
                        ))}
                    </ul>
                ) : (
                    <p>This user favorited nothing</p>
                )
                }
            </div>
            <div className={"favoritesManga"}>
                <p>Favorites mangas</p>
                {props.userFavorites.manga.length > 0 ? (
                    <ul>
                        {props.userFavorites.manga.map((item: any) => item !== null && (
                            <Link to={`/${item.type.toLowerCase()}/${item.id}`}>
                                <li key={item.id}>
                                    <img src={item.imgSource || "/no-image.png"} draggable={false}></img>
                                </li>
                            </Link>  
                        ))}
                    </ul>
                ) : (
                    <p>This user favorited nothing</p>
                )
                }
            </div>
        </FavoritesContainerStyle>
    )
}