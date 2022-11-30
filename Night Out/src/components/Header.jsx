import React from "react";
import { Form, NavLink, Route, Routes, useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next'
import Language from './language/Language'

import { Alerts } from './alerts/Alerts'
import { UserAuth } from './firebase/context/AuthContext'
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Navbar from "./Feed/Navbar";

{
  /*import { NavbarHamburguesa } from './NavbarHamburguesa'*/
}

function Header() {
  const navigate = useNavigate()
  const [t] = useTranslation('global')
  const { correct, wrong } = Alerts()
  const { logOut } = UserAuth()

  const clickCorrect = () => {
    let text = `${t('alerts.correct')}`
    correct(text)
  }

  const clickIncorrect = () => {
    let text = 'incorrect'
    wrong(text)
  }

  const logOutSesion = async() => {
    try {
      await logOut()
      await correct('Sesion Cerrada')
      await localStorage.removeItem('email')      
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const existUser = localStorage.getItem('email')

  let {NavbarMostrado, setNavbarMostrado} = useContext(GlobalContext)
  const mostrarNavbar = () => {
    if ( NavbarMostrado === true ) {
      setNavbarMostrado(false)
      console.log("Ocultando Navbar")
    }
    else {
      setNavbarMostrado(true)
      console.log("Mostrando Navbar")
    }
  }


  return (
    <header className={ NavbarMostrado === false ? "text-white flex flex-row items-center justify-around bg-gradiante1" : "text-white flex flex-row items-center justify-around  bg-gradiante1 sticky top-0 z-10" }>
      <div className="flex flex-row  items-center">
        <img className="h-10" src="src\assets\logo.png" alt="logo" />
        <h1 className="text-2xl font-semibold ml-5">Night Out</h1>
        <Language />
        {
          existUser ? 
          <button onClick={logOutSesion}>Log Out</button>:
          ""
        }
        {/* <button onClick={clickCorrect}>{t('header.correct')}</button>
        <button onClick={clickIncorrect}>{t('header.incorrect')}</button> */}
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
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 hover:text-white"
                    href="#logear"
                  >
                    {t('header.signin')}
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
                  {t('header.home')}
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 hover:text-white"
                    to="/Sign-In"
                  >
                    {t('header.signin')}
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
                  {t('header.home')}
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 "
                    to="/Sign-In"
                  >
                    {t('header.signin')}
                  </NavLink>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/:ruta/*"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="">
                  <form className="flex flex-row bg-gray p-2 rounded-full items-center">
                    <img
                      className="h-5 mr-3"
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
                  <button onClick={mostrarNavbar}>
                    <img
                      src="src\assets\menuBlanco.png"
                      alt="menu"
                      className="h-8"
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
