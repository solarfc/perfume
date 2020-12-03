import React from "react";
import PerfumeList from "../perfume-list/perfume-list";

const Home = ({perfume, addPerfumeToCart}) => {
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <PerfumeList perfume={perfume} addPerfumeToCart={addPerfumeToCart}/>
                </div>
            </div>
        </div>
    )
};

export default Home;