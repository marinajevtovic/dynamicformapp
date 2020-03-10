import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormApp from "./containers/FormApp";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {store} from './store'

ReactDOM.render(
  <Provider store={store}>
    <FormApp/>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
