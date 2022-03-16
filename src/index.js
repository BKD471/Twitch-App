import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
