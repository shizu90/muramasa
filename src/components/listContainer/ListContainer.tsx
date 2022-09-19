import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ListContainerStyle, MediaGrid, MediaType } from "./Style";

interface ListContainerProps {
    mediaList: any,
    type: string
}

export default function ListContainer(props: ListContainerProps) {
    const [stat, setStat] = useState<number>(0);
    const statsAnime = ["WATCHING", "COMPLETED", "DROPPED", "PLANS"];
    const statsManga = ["READING", "COMPLETED", "DROPPED", "PLANS"];

    useEffect(() => {
        setStat(0);
    }, [props.type, props.mediaList])

    return (
        <ListContainerStyle>
            <ul>
                {props.type === "anime" ? (
                    <>
                        <MediaType selected={stat === 0 ? true : false} onClick={() => setStat(0)}>Watching</MediaType>
                        <MediaType selected={stat === 1 ? true : false} onClick={() => setStat(1)}>Completed</MediaType>
                        <MediaType selected={stat === 2 ? true : false} onClick={() => setStat(2)}>Dropped</MediaType>
                        <MediaType selected={stat === 3 ? true : false} onClick={() => setStat(3)}>Plans</MediaType>
                    </>
                ) : (
                    <>
                        <MediaType selected={stat === 0 ? true : false} onClick={() => setStat(0)}>Reading</MediaType>
                        <MediaType selected={stat === 1 ? true : false} onClick={() => setStat(1)}>Completed</MediaType>
                        <MediaType selected={stat === 2 ? true : false} onClick={() => setStat(2)}>Dropped</MediaType>
                        <MediaType selected={stat === 3 ? true : false} onClick={() => setStat(3)}>Plans</MediaType>
                    </>
                )
                }
            </ul>
            <MediaGrid>
                {props.type === "anime" ? props.mediaList[statsAnime[stat].toLowerCase()].map((media: any) => (
                        <li key={`${media.id}`}>
                            <Link to={`/${media.type.toLowerCase()}/${media.id}`}>
                                <img src={media.imgSource} alt=""/>
                                <p>{media.title}</p>
                            </Link>
                            <span className="mediaLength">{stat === 0 || stat === 2 ? `${media.count}/${media.totalCount}` : ""}</span>
                            <br/>
                        </li>
                )) : (
                    props.mediaList[statsManga[stat].toLowerCase()].map((media: any) => (
                        <li key={`${media.id}`}>
                            <Link to={`/${media.type.toLowerCase()}/${media.id}`} key={`${media.id}`}>
                                <img src={media.imgSource} alt=""/>
                                <p>{media.title}</p>
                            </Link>
                            <span className="mediaLength">{stat === 0 || stat === 2 ? `${media.count}/${media.totalCount}` : ""}</span>
                            <br/>
                        </li>
                    ))
                )}
            </MediaGrid>

        </ListContainerStyle>    
    )
}