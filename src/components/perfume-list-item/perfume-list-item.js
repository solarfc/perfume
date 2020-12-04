import "./perfume-list-item.css"
import React from "react";
import {NavLink} from "react-router-dom";

const PerfumeListItem = ({perfume, addPerfumeToCart}) => {
    const {gender, country, brand, name, description, sale, availability, id} = perfume;
    const addsPerfumeToCart = (perfume) => {
        addPerfumeToCart(perfume);
        alert('Товар добавлен в корзину');
    }

    return (
        <>
            <img src="https://m.buro247.ru/images/625poster_poison-girl_moodpack_0.jpg" alt=""/>
            <hr/>
            <h6>{brand}</h6>
            <h5>{name}</h5>
            <p>sale -{sale}%</p>
            <div className="price">
                <span className="old-price">1240 грн</span>
                <span className="new-price">485 грн</span>
            </div>
            <NavLink to={`/card/${id}`}>Подробнее</NavLink>
            <button onClick={() => addsPerfumeToCart(perfume)}>Заказать</button>
        </>
    )
};

export default PerfumeListItem;