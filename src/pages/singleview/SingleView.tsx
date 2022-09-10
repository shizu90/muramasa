import { useContext, useEffect, useState } from "react";
import MediaCard from "../../components/mediaCard/MediaCard";
import { AuthContext } from "../../context/AuthContext";
import Media from "../../core/Media";
import useApi from "../../hooks/useApi";
import useKitsu from "../../hooks/useKitsu";
import { SingleViewPageStyle } from "./Style";
import { TailSpin } from "react-loader-spinner";
import theme from "../../styles/theme";

export default function SingleView() {
    const type = window.location.href.split("/")[3];
    const id = parseInt(window.location.href.split("/")[4]);

    const context = useContext(AuthContext);
    const [media, setMedia] = useState<any>();
    const [session, setSession] = useState<any>();
    const [fromDb, setFromDb] = useState<boolean>(false);

    const { url, info, setInfo } = useKitsu();
    const { getMediaFromList, response } = useApi();

    useEffect(() => {
        const storageData = localStorage.getItem("authKey");
        const dataObj = {token: "", id: ""};
        const data = JSON.parse(storageData ? storageData : JSON.stringify(dataObj));
        if((data.id || context?.auth.id) && (data.token || context?.auth.token)) {
            getMediaFromList(data.id || context?.auth.id, {id: id, type: type.toUpperCase()}, data.token || context?.auth.token);
            setSession(data || context?.auth);
            fetch(`${url}/${type}/${id}`).then(res => res.json()).then(res => setInfo(res));
        }else {
            getMediaFromList("777777", {id: id, type: type.toUpperCase()}, "oe101o204120");
            fetch(`${url}/${type}/${id}`).then(res => res.json()).then(res => setInfo(res));
        }
    }, []);
    useEffect(() => {
        if(response) {
            if(((response.response && response.response.status) || response.status) < 400 && info && info.data) {
                    setFromDb(true);
                    setMedia(new Media(
                    id, 
                    info.data.attributes.canonicalTitle, 
                    info.data.attributes.averageRating, 
                    info.data.attributes.description, 
                    type.toUpperCase(), 
                    info.data.attributes.subtype,
                    info.data.attributes.posterImage.large,
                    info.data.attributes.episodeCount || info.data.attributes.chapterCount,
                    response.data.count,
                    response.data.favorited,
                    response.data.progress,
                    info.data.attributes.status,
                    info.data.attributes.startDate));
            }
            if(((response.response && response.response.status) || response.status) > 400 && info && info.data) {
                if(response.status === 401 || response.response.status === 401) {
                    localStorage.clear();
                    setSession(null);
                }
                setMedia(new Media(
                    id, 
                    info.data.attributes.canonicalTitle, 
                    info.data.attributes.averageRating, 
                    info.data.attributes.description, 
                    type.toUpperCase(), 
                    info.data.attributes.subtype,
                    info.data.attributes.posterImage.large,
                    info.data.attributes.episodeCount || info.data.attributes.chapterCount,
                    0,
                    false,
                    type === "anime" ? "WATCHING" : "READING",
                    info.data.attributes.status,
                    info.data.attributes.startDate
                ))
            }
        }
    }, [info, response]);

    return (
        <SingleViewPageStyle>
            {media ? (
                <MediaCard media={media} session={session} setMedia={setMedia} fromDb={fromDb}></MediaCard>
            ) : (
                <TailSpin height={"80"} width={"80"} color={theme.colors.primary} wrapperClass={"loading"}/>
            )}
        </SingleViewPageStyle>
    )
}