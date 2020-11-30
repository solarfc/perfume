import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

window.state = store;