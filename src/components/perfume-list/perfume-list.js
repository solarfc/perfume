import "./perfume-list.css";
import React, {useEffect, useState} from "react";
import PerfumeListItem from "../perfume-list-item";
import Spinner from "../spinner";

const PerfumeList = ({perfume, addPerfumeToCart}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [loading]);

    if(loading === true) {
        return <Spinner />
    }


    const perf = perfume.filter(item => item.availability === "true").map(item => {
        return <div className="catalog__content-card" key={item.id}><PerfumeListItem perfume={item} addPerfumeToCart={addPerfumeToCart}/></div>
    });
    return (
        perf
    )
}

export default PerfumeList;
