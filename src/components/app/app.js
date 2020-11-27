import React from "react";
import Header from "../header";
import Main from "../main";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const App = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
};

const mapStateToProps = (state) => {
    return state;
}

export default compose(withRouter, connect(mapStateToProps))(App);