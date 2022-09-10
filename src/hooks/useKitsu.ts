import { useState } from "react";
import useDate from "./useDate";

export default function useKitsu() {
    const { currentSeason } = useDate();
    const url = "https://kitsu.io/api/edge";
    const LIMIT = 18;
    const [info, setInfo] = useState<any>({data: null, meta: null});

    return {
        info,
        setInfo,
        LIMIT, 
        url
    }
}