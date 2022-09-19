import { MediaGrid } from "./Style";
import { Link } from "react-router-dom";
import { memo } from "react";

interface MediaListProps {
    apiResponse: {data?: any, meta?: any}
}

function MediaList(props: MediaListProps){
    return (
        <MediaGrid>
            {props.apiResponse.data.length === 0 ? (
                <span>Cannot find data from that input</span>
            ) : (
                props.apiResponse.data.map((item: any) => 
                    (
                    <Link to={`/${item.type}/${item.id}`} key={item.id}>
                        <li key={item.id}>
                            <img src={item.attributes.posterImage ? item.attributes.posterImage.large : '/no-image.png'} alt=""/>
                            <p>{item.attributes.canonicalTitle}</p>
                        </li>
                    </Link>
                    )
                )
            )}
        </MediaGrid>
    )
}

export default memo(MediaList);