import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./components/redux/store";
import 'core-js/stable';
import 'regenerator-runtime/runtime';




ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById("root"));
