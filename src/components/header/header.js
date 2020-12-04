import "./header.css";
import React from "react";
import {NavLink} from "react-router-dom";
import cart from "../../shopping-cart.png"

const Header = ({quantity}) => {
    // console.log(quantity);
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/">logo</NavLink>
                    <NavLink to="/woman-perfume">Женские парфюмы</NavLink>
                    <NavLink to="/man-perfume">Мужские парфюмы</NavLink>
                    <NavLink to="/cart" className="cart"><img src={cart} alt=""/><span>{quantity}</span></NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header;