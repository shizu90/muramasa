import { useState } from "react";
import useDate from "./useDate";

export default function useKitsu() {
    const { currentSeason } = useDate();


    const url = "https://kitsu.io/api/edge";
    const LIMIT = 18;

    const [type, setType] = useState<string>("Anime");
    const [season, setSeason] = useState<string>(currentSeason);
    const [text, setText] = useState("");
    const [info, setInfo] = useState<any>({data: null, meta: null});
    const [offset, setOffset] = useState(0);

    return {
        type,
        setType,
        season,
        setSeason,
        text,
        setText,
        info,
        setInfo,
        offset,
        setOffset,
        LIMIT, 
        url
    }
}