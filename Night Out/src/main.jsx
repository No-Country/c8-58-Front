import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
{/*import { Provider } from "react-redux";
import { store } from './redux/store/store'*/}
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    {/* <Provider store = {store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
);


