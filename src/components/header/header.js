import "./header.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/">logo</NavLink>
                    <NavLink to="/woman-perfume">Женские парфюмы</NavLink>
                    <NavLink to="/man-perfume">Мужские парфюмы</NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header;