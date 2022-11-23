import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
{/*import { Provider } from "react-redux";
import { store } from './redux/store/store'*/}
import ScrollToTop from './components/ScrollToTop'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

const idioma = localStorage.getItem('language')

i18next.init({
  interpolation: {escapeValue: false},
  lng: idioma,
  fallbackLng: 'en',
  resources:{
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <ScrollToTop />
      {/* <Provider store = {store}> */}
        <App />
      {/* </Provider> */}
    </I18nextProvider>  
  </BrowserRouter>
);


