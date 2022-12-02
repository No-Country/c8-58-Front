import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, NavLink, Route, Routes, Link } from "react-router-dom";
import { UserAuth } from "./firebase/context/AuthContext";
import { getUserDetail } from "../redux/actions/index";

import { useTranslation } from "react-i18next";

import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Navbar from "./Feed/Navbar";

{
  /*import { NavbarHamburguesa } from './NavbarHamburguesa'*/
}

function Header() {
  const [t] = useTranslation("global");
  const dispatch = useDispatch();
  const { logOut, user } = UserAuth();

  const existUser = localStorage.getItem("id");

  useEffect(() => {
    const id = localStorage.getItem("id");
    const user = async () => {
      if (id) {
        await dispatch(getUserDetail(id));
      }
    };
    user();
  }, []);

  let { NavbarMostrado, setNavbarMostrado } = useContext(GlobalContext);
  const mostrarNavbar = () => {
    if (NavbarMostrado === true) {
      setNavbarMostrado(false);
      console.log("Ocultando Navbar");
    } else {
      setNavbarMostrado(true);
      console.log("Mostrando Navbar");
    }
  };

  const { BusquedaMostrado, setBusquedaMostrado } = useContext(GlobalContext)

  const mostrarBusqueda = (e) => {
    if ( BusquedaMostrado === false ) {
      setBusquedaMostrado(true)
      console.log("Mostrando Busqueda")
    }
    if ( BusquedaMostrado === true ) {
      setBusquedaMostrado(false)
      console.log("Ocultando Busqueda")
    }
  }

  return (
    <header
      className={
        NavbarMostrado === false
          ? "text-white flex flex-row items-center justify-around bg-gradiante1 s:flex-col s:w-full s:pt-3 md:flex-row md:pt-0"
          : "text-white flex flex-row items-center justify-around  bg-gradiante1 sticky top-0 z-10 s:flex-col s:w-full s:pt-3 md:flex-row md:pt-0"
      }
    >
      <div className="flex flex-row  items-center">
        <img className="h-10" src="src\assets\logo.png" alt="logo" />
        <h1 className="text-2xl font-semibold ml-5">Night Out</h1>
      </div>
      <nav>
        <Routes>
          <Route
            path="/"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center s:text-lg s:pt-2 s:pb-2 l:text-xl md:p-0">
                <li className="p-5">
                  <NavLink className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li className="p-5">
                  <Link className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/Feed">
                    Feed
                  </Link>
                </li>
                <li className="p-5 s:p-0">
                  <a
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 hover:text-white"
                    href="#logear"
                  >
                    {t("header.signin")}
                  </a>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/Sign-up"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center s:text-lg s:pt-2 s:pb-2 l:text-xl md:p-0">
                <li className="p-5">
                  <NavLink className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li className="p-5">
                  <Link className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/Feed">
                    Feed
                  </Link>
                </li>
                <li className="p-5 s:p-0">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 hover:text-white"
                    to="/Sign-In"
                  >
                    {t("header.signin")}
                  </NavLink>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/Sign-In"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center s:text-lg s:pt-2 s:pb-2 l:text-xl md:p-0">
                <li className="p-5">
                  <NavLink className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li className="p-5">
                  <Link className="lg:p-4 lg:px-10 s:px-0 l:px-3" to="/Feed">
                    Feed
                  </Link>
                </li>
                <li className="p-5 s:p-0">
                  <NavLink
                    className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10 hover:text-white"
                    to="/Sign-In"
                  >
                    {t("header.signin")}
                  </NavLink>
                </li>
              </ul>
            }
          ></Route>
          <Route
            path="/:ruta"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center s:text-lg s:py-2 l:text-xl md:p-0">
                <li className=" flex items-center relative bg-gray rounded-full transition-all duration-1000 ease-in-out mb-1">
                <button className={ BusquedaMostrado === false ? "bg-gray p-2 rounded-full top-0 w-11 h-11 left-0 " : "bg-gray p-2 rounded-l-full top-0 w-11 h-11 left-0"} onClick={mostrarBusqueda}>
                    <img
                      className="h-5 mx-auto"
                      src="src\assets\lupa.svg"
                      alt="lupa"
                    />
                  </button>
                  <form className={ BusquedaMostrado === false ? " bg-gray p-0 rounded-r-full items-center w-0 h-10 mb-1 transition-w duration-1000 ease-in-out absolute left-1/2 -z-10" : " bg-gray p-2 items-center relative mb-1 rounded-r-full transition-w duration-1000 ease-in-out h-10"}>
                    <input
                      type="search"
                      className={ BusquedaMostrado === false ? "bg-gray outline-none text-black  rounded-r-full transition-w duration-1000 ease-in-out" : "bg-gray outline-none text-black rounded-r-full transition-w duration-1000 ease-in-out"}
                    />
                  </form>{" "}
                </li>
                <li className="p-5 s:p-3">
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
