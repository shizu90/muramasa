import qs from "qs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../../components/button/Button";
import MediaList from "../../components/mediaList/MediaList";
import NumberInput from "../../components/numberInput/NumberInput";
import Select from "../../components/selectbox/Select";
import useCapitalize from "../../hooks/useCapitalize";
import useDate from "../../hooks/useDate";
import useKitsu from "../../hooks/useKitsu";
import { SearchHandler, SearchResult, SeasonsPageStyle } from "./Style";
import { TailSpin } from "react-loader-spinner";
import theme from "../../styles/theme";
import Pagination from "../../components/pagination/Pagination";

export default function SeasonsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const navigate = useNavigate();
    const { capitalize } = useCapitalize();
    const { LIMIT, url, info, setInfo } = useKitsu();
    const { currentSeason, currentYear } = useDate();
    const [year, setYear] = useState<number>(parseInt(searchParams.get("year") || currentYear.toString()) || currentYear);
    const [season, setSeason] = useState<string>(capitalize(searchParams.get("season") || currentSeason) || capitalize(currentSeason));

    const handlePageChange = (index: number) => {
        navigate(`/seasons?year=${year}&season=${season.toLowerCase()}&offset=${index}`);
    }

    useEffect(() => {
        const query = {
            page: {
                limit: LIMIT,
                offset: searchParams.get("offset")
            }
        }
        fetch(`${url}/anime?filter[season]=${season.toLowerCase()}&filter[seasonYear]=${year}&${qs.stringify(query)}`)
        .then(res => res.json()).then(res => setInfo(res));
    }, [search])

    return (
        <SeasonsPageStyle>
            <SearchHandler>
                <NumberInput maxNumber={3000} minNumber={1900} value={year} onChange={setYear}/>
                <Select values={["Winter", "Spring", "Summer", "Fall"]} value={season} onChange={setSeason}/>
                <Button label={"Search"} onClick={() => navigate(`/seasons?year=${year}&season=${season.toLowerCase()}&offset=`)} noBg={true}/>
            </SearchHandler>
            <SearchResult>
                {info.data ? (
                    <MediaList apiResponse={info}/>
                ) : (
                    <TailSpin height={"80"} width={"80"} wrapperClass={"loading"} color={theme.colors.primary}/>
                )
                }
            </SearchResult>
            {info.data && (
                <Pagination limit={LIMIT} total={info.meta.count} offset={parseInt(searchParams.get("offset") || "0") || 0} setOffset={handlePageChange}/>    
            )}
        </SeasonsPageStyle>
    )
}