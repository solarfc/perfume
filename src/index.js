import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import {perfumeLoaded} from "./reducers/perfume-reducer";
import {getPerfume} from "./services/service";
import {setPerfumeInfo} from "./reducers/card-reducers";

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