import React from "react";
import PerfumeList from "../perfume-list/perfume-list";

const Home = () => {
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <PerfumeList />
                </div>
            </div>
        </div>
    )
};

export default Home;