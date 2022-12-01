import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Language from "../language/Language";
import { UserAuth } from '../firebase/context/AuthContext'

function Settings() {
  const activeStyle = {
    textDecoration: "underline",
    textColor: "white",
    listStyle: "round",
  };
  const { logOut, user } = UserAuth()
  return (
    <div className="flex lg:flex-row justify-between lg:items-start mt-10 w-full s:flex-col s:items-center 2xl:w-1/2">
      <div className="flex flex-col s:items-center s:w-full">
        <Link
          to="/Feed"
          className=" justify-start bg-gradiante2 rounded-full lg:mr-10 lg:mb-10 hover:bg-gradiante3 s:mr-0 s:mb-3 s:px-5 s:w-3/4 md:w-1/2 lg:w-3/4"
        >
          <div className="flex flex-row items-center justify-around s:justify-center">
            <img src="../src\assets\Home.png" alt="Home" className="w-8" />
            <h2 className="mt-3 mb-3 text-white s:ml-3">Go Home</h2>
          </div>
        </Link>
        <div className="bg-lila p-5 lg:mr-10 s:mr-0 s:w-3/4 s:text-center s:mb-5 md:w-1/2 lg:w-3/4">
          <ul className="text-white">
            { user ? (<li className="mt-3 mb-3">
              <NavLink
                to="/Settings-User"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                User
              </NavLink>
            </li>) : ""}
            <li className="mt-3 mb-3">
              <NavLink
                to="/Settings-Configuration"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Configuration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="/Settings-User"
          element={
            <div className="bg-gradiante1 text-white w-11/12">
              <form
                action=""
                className="flex flex-col justify-evenly items-start m-5"
                autoComplete="off"
              >
                <div className="flex flex-col items-start mt-3 mb-3 w-full">
                  <label htmlFor="usuario" className="mr-3">
                    Username:
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="usuario"
                    className="bg-gray p-2 pl-5 pr-5 outline-none text-black w-full rounded-full"
                  />
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex flex-col items-start mt-3 mb-3 w-full">
                  <label htmlFor="descripcion" className="mr-3">
                    Descripcion:
                  </label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows="10"
                    className="resize-none p-2 pl-5 pr-5 outline-none text-black w-full rounded-3xl bg-gray max-h-24"
                  ></textarea>
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex mt-3 mb-3 s:flex-col s:items-start">
                  <label htmlFor="fotoPerfil" className="mr-3">
                    Profile Picture:
                  </label>
                  <input
                    type="file"
                    name="perfil"
                    id="fotoPerfil"
                    accept="image/*"
                    className="s:w-full l:w-auto"
                  />
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex mt-3 mb-3 s:flex-col s:items-start">
                  <label htmlFor="fotoPortada" className="mr-3">
                    Portrait Image:
                  </label>
                  <input
                    type="file"
                    name="portada"
                    id="fotoPortada"
                    accept="image/*"
                    className="s:w-full l:w-auto"
                  />
                </div>
                <input
                  type="submit"
                  value="Confirm"
                  className="mt-3 mb-3 bg-gray text-black rounded-full p-5 font-semibold hover:bg-white hover:cursor-pointer pl-10 pr-10 text-center self-center"
                />
              </form>
            </div>
          }
        ></Route>
        <Route
          path="/Settings-Configuration"
          element={
            <div className=" bg-gradiante1 text-white w-11/12 mb-36 lg:min-w-fit">
              <form
                action=""
                className="flex flex-col justify-evenly items-start m-5"
                autoComplete="off"
              >
                <div className="w-full flex flex-row items-center mt-3 mb-3 ">
                  <label htmlFor="darkMode" className="mr-3">
                    Dark/Light mode:
                  </label>
                  <select
                    name="darkMode"
                    id="darkMode"
                    className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer"
                  >
                    <option value="dark" selected>
                      Dark
                    </option>
                    <option value="light">Light</option>
                  </select>
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="w-full flex flex-row items-center mt-3 mb-3 ">
                  <label htmlFor="idioma" className="mr-3">
                    {" "}
                    Change language:
                  </label>
                  <Language />
                </div>
                <input
                  type="submit"
                  value="Confirm"
                  className="mt-3 mb-3 bg-gray text-black rounded-full p-5 font-semibold hover:bg-white hover:cursor-pointer pl-10 pr-10 text-center self-center"
                />
              </form>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Settings;