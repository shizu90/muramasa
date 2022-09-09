import { useEffect } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/selectbox/Select";
import useKitsu from "../../hooks/useKitsu";
import { SearchPageStyle, SearchHandler, SearchResult } from "./Style";
import qs from "qs";
import MediaList from "../../components/mediaList/MediaList";
import Pagination from "../../components/pagination/Pagination";
import { TailSpin } from "react-loader-spinner";
import theme from "../../styles/theme";

export default function SearchPage() {

    const {
        type, setType, 
        text, setText, 
        info, setInfo, 
        offset, setOffset, 
        LIMIT, url
    } = useKitsu()

    useEffect(() => {
        setInfo({data: null, meta: null})
        const query: {[k: string]: any} = {
            page: {
                limit: LIMIT,
                offset: offset
            }
        }
        if (text) {
            query.filter = {
                text: text
            }
        }
        fetch(`${url}/${type.toLowerCase()}?${qs.stringify(query)}`)
        .then(res => res.json())
        .then(res => setInfo(res))    
    }, [text, type, offset])

    return (
        <SearchPageStyle>
            <SearchHandler>
                <Input value={text} onChange={setText} debounce={true} placeholder={"Type a media..."} size={400}/>
                <Select values={["Anime", "Manga"]} onChange={setType} value={type}/>
            </SearchHandler>
            <SearchResult>
                {info.data ? (
                    <MediaList apiResponse={info}/> 
                ) : (
                    <TailSpin height={"80"} width={"80"} wrapperClass={"loading"} color={theme.colors.primary}/>
                )}
                
            </SearchResult>
            {info.data && (
                <Pagination limit={LIMIT} total={info.meta.count} offset={offset} setOffset={setOffset}/>    
            )}
        </SearchPageStyle>
    )
}