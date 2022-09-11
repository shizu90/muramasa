import { useState } from "react"
import { Link } from "react-router-dom";
import { ListContainerStyle, MediaGrid } from "./Style";

interface ListContainerProps {
    mediaList: any,
    type: string
}

export default function ListContainer(props: ListContainerProps) {
    const [stat, setStat] = useState<number>(0);
    const statsAnime = ["WATCHING", "COMPLETED", "DROPPED", "PLANS"];
    const statsManga = ["READING", "COMPLETED", "DROPPED", "PLANS"];

    return (
        <ListContainerStyle>
            <ul>
                {props.type === "anime" ? (
                    <>
                        <li onClick={() => setStat(0)}>Watching</li>
                        <li onClick={() => setStat(1)}>Completed</li>
                        <li onClick={() => setStat(2)}>Dropped</li>
                        <li onClick={() => setStat(3)}>Plans</li>
                    </>
                ) : (
                    <>
                        <li onClick={() => setStat(0)}>Reading</li>
                        <li onClick={() => setStat(1)}>Completed</li>
                        <li onClick={() => setStat(2)}>Dropped</li>
                        <li onClick={() => setStat(3)}>Plans</li>
                    </>
                )
                }
            </ul>
            <MediaGrid>
                {props.type === "anime" ? props.mediaList[statsAnime[stat].toLowerCase()].map((media: any) => (
                    <Link to={`/${media.type.toLowerCase()}/${media.id}`} key={`${media.id}`}>
                        <li>
                            <img src={media.imgSource}></img>
                            <p>{media.title}</p>
                            <span>{stat === 0 || stat === 2 ? `${media.count}/${media.totalCount}` : ""}</span>
                            <br/>
                        </li>
                    </Link>
                )) : (
                    props.mediaList[statsManga[stat].toLowerCase()].map((media: any) => (
                        <Link to={`/${media.type.toLowerCase()}/${media.id}`} key={`${media.id}`}>
                            <li>
                                <img src={media.imgSource}></img>
                                <p>{media.title}</p>
                                <span>{stat === 0 || stat === 2 ? `${media.count}/${media.totalCount}` : ""}</span>
                                <br/>
                            </li>
                        </Link>
                    ))
                )}
            </MediaGrid>
        </ListContainerStyle>    
    )
}