import "./perfume-list-item.css"
import React from "react";
import {NavLink} from "react-router-dom";

const PerfumeListItem = ({perfume}) => {
    const {gender, country, brand, name, description, availability, id} = perfume;
    return (
        <>
            <h4>{brand}</h4>
            <h3>{name}</h3>
            <h4>{country}</h4>
            <p>{gender}</p>
            <NavLink to={`/card/${id}`}>Подробнее</NavLink>
        </>
    )
};

export default PerfumeListItem;