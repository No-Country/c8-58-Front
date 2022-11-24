import React from "react";
import { Form, NavLink, Route, Routes } from "react-router-dom";

import { useTranslation } from 'react-i18next'
import Language from './language/Language'

import { Alerts } from './alerts/Alerts'

{
  /*import { NavbarHamburguesa } from './NavbarHamburguesa'*/
}

function Header() {
  const [t] = useTranslation('global')
  const { correct, wrong } = Alerts()

  const clickCorrect = () => {
    let text = `${t('alerts.correct')}`
    correct(text)
  }

  const clickIncorrect = () => {
    let text = 'incorrect'
    wrong(text)
  }

  return (
    <header className="text-white flex flex-row items-center justify-around p-3 bg-gradiante1">
      <div className="flex flex-row  items-center">
        <img className="w-16" src="src\assets\logo.png" alt="logo" />
        <h1 className="text-4xl font-semibold ml-5">Night Out</h1>
        <Language />
        <button onClick={clickCorrect}>{t('header.correct')}</button>
        <button onClick={clickIncorrect}>{t('header.incorrect')}</button>
      </div>
      <nav>
        <Routes>
          <Route
            path="/"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5">
                  <NavLink className="p-4 px-10" to="/">
                  {t('header.home')}
                  </NavLink>
                </li>
                <li className="p-5">
                  <a
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10"
                    href="#logear"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/Sign-up"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5">
                  <NavLink className="p-4 px-10" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10"
                    to="/Sign-In"
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/Sign-In"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5">
                  <NavLink className="p-4 px-10" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10"
                    to="/Sign-In"
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/:ruta"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5">
                  <form className="flex flex-row bg-gray p-2 rounded-full">
                    <img
                      className="w-10 mr-3"
                      src="src\assets\lupa.svg"
                      alt="lupa"
                    />
                    <input
                      type="search"
                      className="bg-gray outline-none text-black"
                    />
                  </form>{" "}
                </li>
                <li className="p-5">
                  <button>
                    <img
                      src="src\assets\menuBlanco.png"
                      alt="menu"
                      className="w-10"
                    />
                  </button>
                </li>
              </ul>
            }
          ></Route>
        </Routes>
      </nav>
    </header>
  );
}

export default Header;
