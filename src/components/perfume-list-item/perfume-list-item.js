import "./perfume-list-item.css"
import React from "react";
import {NavLink} from "react-router-dom";

const PerfumeListItem = ({perfume, addPerfumeToCart}) => {
    const {gender, country, brand, name, description, availability, id} = perfume;

    const addsPerfumeToCart = () => {
        addPerfumeToCart(perfume)
    }

    return (
        <>
            <h4>{brand}</h4>
            <h3>{name}</h3>
            <h4>{country}</h4>
            <p>{gender}</p>
            <NavLink to={`/card/${id}`}>Подробнее</NavLink>
            <button onClick={() => addsPerfumeToCart(perfume)}>Заказать</button>
        </>
    )
};

export default PerfumeListItem;