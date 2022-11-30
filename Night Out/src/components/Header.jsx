import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, NavLink, Route, Routes, useNavigate } from "react-router-dom";

import { getUserDetail } from '../redux/actions/index'

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
  const { logOut, user } = UserAuth()

  const dispatch = useDispatch()
  const userData = useSelector(state => state.userDetail)

  const logOutSesion = async() => {
    try {
      await logOut()
      await correct('Sesion Cerrada')  
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const existUser = localStorage.getItem('id')

useEffect(() => {
  const id = localStorage.getItem('id')
  const user = async() => {
    if(id){
      await dispatch(getUserDetail(id))
    }
  }
  user()
},[])

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
    <header className="text-white flex flex-row items-center justify-around p-3 bg-gradiante1">
      <div className="flex flex-row  items-center">
        <img className="w-16" src="src\assets\logo.png" alt="logo" />
        <h1 className="text-4xl font-semibold ml-5">Night Out</h1>
        <Language />
        {
          user ? 
          <span>
            {
              userData[0] !== undefined ? `Welcome ${userData[0].name}` : ""
            }
            <button onClick={logOutSesion}>Log Out</button>
          </span> :
          ""
        }
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
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10"
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
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10"
                    to="/Sign-In"
                  >
                    {t('header.signin')}
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
                  <button onClick={mostrarNavbar}>
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
