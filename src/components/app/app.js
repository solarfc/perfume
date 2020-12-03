import React from "react";
import Header from "../header";
import MainContainer from "../main";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const App = () => {
    // const quantity = cartPage.cart.length;

    return (
        <>
            <Header quantity="1"/>
            <MainContainer />
        </>
    )
};

const mapStateToProps = (state) => {
    return state;
}
// {cartPage}

export default compose(withRouter, connect(mapStateToProps))(App);