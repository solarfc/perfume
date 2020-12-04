import React from "react";
import Header from "../header";
import MainContainer from "../main";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const App = ({cartPage}) => {
    const quantity = cartPage.cart.length;

    return (
        <>
            <Header quantity={quantity} />
            <MainContainer />
        </>
    )
};

const mapStateToProps = (state) => {
    return state;
}

export default compose(withRouter, connect(mapStateToProps))(App);