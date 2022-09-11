import { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/selectbox/Select";
import useKitsu from "../../hooks/useKitsu";
import { SearchPageStyle, SearchHandler, SearchResult } from "./Style";
import qs from "qs";
import MediaList from "../../components/mediaList/MediaList";
import Pagination from "../../components/pagination/Pagination";
import { TailSpin } from "react-loader-spinner";
import theme from "../../styles/theme";
import { useLocation, useNavigate } from "react-router";
import useCapitalize from "../../hooks/useCapitalize";
import Button from "../../components/button/Button";

export default function SearchPage() {
    const { search } = useLocation();
    const { capitalize } = useCapitalize();
    const searchParams = new URLSearchParams(search);
    const [text, setText] = useState<string | null>(searchParams.get("text") ? searchParams.get("text") : "");
    const [type, setType] = useState<string | null>(searchParams.get("type") || "Anime");
    const navigate = useNavigate();
    const {
        info, setInfo, 
        LIMIT, url
    } = useKitsu()

    const handlePageChange = (index: number) => {
        navigate(`?text=${text}&type=${type?.toLowerCase()}&offset=${index}`);
    }

    useEffect(() => {
        setInfo({data: null, meta: null})
        const query: {[k: string]: any} = {
            page: {
                limit: LIMIT,
                offset: searchParams.get("offset")
            }
        }
        if (text) {
            query.filter = {
                text: text
            }
        }
        fetch(`${url}/${type?.toLowerCase()}?${qs.stringify(query)}`)
        .then(res => res.json())
        .then(res => setInfo(res))    
    }, [search, searchParams.get("offset")])

    return (
        <SearchPageStyle>
            <SearchHandler>
                <Input value={text || ""} onChange={setText} debounce={false} placeholder={"Type a media..."} size={400}/>
                <Select values={["Anime", "Manga"]} onChange={setType} value={capitalize(type || "anime")}/>
                <Button label="Search" onClick={() => navigate(`?text=${text}&type=${type?.toLowerCase()}&offset=0`)} noBg={true}/>
            </SearchHandler>
            <SearchResult>
                {info && info.data ? (
                    <MediaList apiResponse={info}/> 
                ) : (
                    <TailSpin height={"80"} width={"80"} wrapperClass={"loading"} color={theme.colors.primary}/>
                )}
                
            </SearchResult>
            {info.data && (
                <Pagination limit={LIMIT} total={info.meta.count} offset={parseInt(searchParams.get("offset") || "0") || 0} setOffset={handlePageChange}/>    
            )}
        </SearchPageStyle>
    )
}