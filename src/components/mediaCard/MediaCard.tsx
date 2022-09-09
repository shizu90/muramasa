import { FaTv, FaCalendarAlt, FaList, FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Media from "../../core/Media";
import useCapitalize from "../../hooks/useCapitalize";
import Button from "../button/Button";
import NumberInput from "../numberInput/NumberInput";
import Select from "../selectbox/Select";
import { MediaCardContainer } from "./Style";
import useApi from "../../hooks/useApi";
import useDate from "../../hooks/useDate";

interface MediaCardProps {
    media: Media,
    session: any,
    setMedia: (...params: any) => void,
    fromDb: boolean
}

export default function MediaCard(props: MediaCardProps) {
    const { capitalize } = useCapitalize();
    const { addFavorites, removeFavorites, updateList, removeList } = useApi();
    const { getWeekday } = useDate();

    const responsive = window.matchMedia("(max-width: 999px)");

    const [favorited, setFavorited] = useState(props.media.favorited);
    const [progress, setProgress] = useState<string>(capitalize(props.media.progress.toLowerCase()));
    const [count, setCount] = useState<number>(props.media.count);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [addedList, setAddedList] = useState<boolean>(props.fromDb);

    const handleAddList = () => {
        setAddedList(true);
        updateList(props.session.id, props.media, props.session.token);
    }

    const handleDeleteList = () => {
        setAddedList(false);
        removeList(props.session.id, props.media, props.session.token);
    }

    const handleAddFavorites = () => {
        setFavorited(true);
        addFavorites(props.session.id, props.media, props.session.token);
    }

    const handleDeleteFavorites = () => {
        setFavorited(false);
        removeFavorites(props.session.id, props.media, props.session.token);
    }
    useEffect(() => {
        props.setMedia({...props.media, count: count, favorited: favorited, progress: progress.toUpperCase()});
    }, [progress, count, favorited])

    return (
        <MediaCardContainer>
            <img src={props.media.imgSource} draggable={false}></img>
            <div className="infoContainer">
                <h1>{props.media.title}</h1>
                <h2>{props.media.averageRating === null ? "N/A" : (props.media.averageRating/10).toFixed(2)}</h2>
                <hr/>
                {(props.session) ? favorited ? (
                    <div onClick={() => handleDeleteFavorites()}>
                        <p><FaHeart/>Remove from favorites</p>
                    </div>  
                ) : (
                    <div onClick={() => handleAddFavorites()}>
                        <p><FaRegHeart/>  Add to favorites</p>
                    </div>
                ) : (
                    <p>Login to favorite</p>
                )}
                <hr/>
                {responsive.matches ? (
                    <>
                        <p>{props.media.description.slice(0, 359)}</p>
                        <span hidden={showMore}>...</span>
                        <span hidden={!showMore}>{props.media.description.slice(359)}</span>
                        <Button label={showMore ? "Read less" : "Read more"} onClick={() => setShowMore(!showMore)} noBg={true}></Button>
                    </>
                ) : (
                    <p>{props.media.description}</p>
                )}
                <hr/>
                <ul className="statusList">
                    <li>
                        <div>
                            <FaTv/>
                            <p>{capitalize(props.media.subtype)}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <FaCalendarAlt/>
                            <p>{props.media.status === "current" && props.media.type === "ANIME" ? `Airing on ${getWeekday(props.media.startDate)}` : capitalize(props.media.status)}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <FaList/>
                            <p>{props.media.totalCount ? props.media.totalCount : "?"}</p>
                        </div>
                    </li>
                </ul>
                <hr/>
                {props.session ? (
                    <>
                        {props.media.type === "MANGA" ? (
                            <Select values={["Reading", "Completed", "Dropped", "Plans"]} value={progress} onChange={setProgress}/>
                        ) : (<Select values={["Watching", "Completed", "Dropped", "Plans"]} value={progress} onChange={setProgress}/>)}
                        <NumberInput value={count} maxNumber={props.media.totalCount ? props.media.totalCount : 5000} minNumber={0} onChange={setCount}/>
                        {!addedList ? (
                            <Button label={"Add to list"} onClick={() => handleAddList()}/>
                        ) : (
                            <>
                                <Button label={"Delete"} onClick={() => handleDeleteList()} noBg={true}/>
                                <Button label={"Update"} onClick={() => handleAddList()}/>
                            </>
                        )}
                    </>
                ) : null}
            </div>     
        </MediaCardContainer>
    )
}