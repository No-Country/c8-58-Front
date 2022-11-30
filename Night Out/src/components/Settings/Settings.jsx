import React from "react";
import { Routes, Route, NavLink, Link } from 'react-router-dom'

function Settings() {

    const activeStyle  = {
        textDecoration: "underline",
        textColor: "white",
        listStyle: "round"
    }
    let activeClassName = "underline";
  return (
    <div className="flex flex-row justify-between items-start mt-10 w-full">
      <div className="bg-lila p-5 mr-10 ">
        <ul className="text-white">
        <li className="mt-3 mb-3"><Link to="/Feed">Go Home</Link></li>
          <li className="mt-3 mb-3"><NavLink to="/Settings/User" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>User</NavLink></li>
          <li className="mt-3 mb-3"><NavLink to="/Settings/Configuration" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Configuration</NavLink></li>
        </ul>
      </div>
      <Routes>
      <Route path="/User" element={
        <div className="bg-gradiante1 text-white w-full">
        <form action="" className="flex flex-col justify-evenly items-start m-5" autoComplete="off">
          <div className="flex flex-row items-center mt-3 mb-3 w-full">
            <label htmlFor="usuario" className="mr-3">Username:</label>
            <input type="text" placeholder="Username" id="usuario" className="bg-gray p-2 pl-5 pr-5 outline-none text-black w-full rounded-full"/>
          </div>
          <span className="bg-gray h-0.1 w-full block"></span>
          <div className="flex flex-row items-start mt-3 mb-3 w-full">
            <label htmlFor="descripcion" className="mr-3">Descripcion:</label>
            <textarea
              name="descripcion"
              id="descripcion"
              cols="30"
              rows="10"
              className="resize-none p-2 pl-5 pr-5 outline-none text-black w-full rounded-3xl bg-gray max-h-24"
            ></textarea>
          </div>
          <span className="bg-gray h-0.1 w-full block"></span>
          <div className="flex flex-row items-center mt-3 mb-3 ">
            <label htmlFor="fotoPerfil" className="mr-3">User Profile:</label>
            <input
              type="file"
              name="perfil"
              id="fotoPerfil"
              accept="image/*"
            />
            </div>
            <span className="bg-gray h-0.1 w-full block"></span>
            <div className="flex flex-row items-center mt-3 mb-3">
            <label htmlFor="fotoPortada" className="mr-3">Portrait Image:</label>
            <input
              type="file"
              name="portada"
              id="fotoPortada"
              accept="image/*"
            />
          </div>
          <input type="submit" value="Change" className="mt-3 mb-3 bg-gray text-black rounded-full p-5 font-semibold hover:bg-white hover:cursor-pointer pl-10 pr-10 text-center self-center"/>
        </form>
      </div>
      }>
      </Route>
      <Route path="/Configuration" element={
        <div className=" bg-gradiante1 text-white w-full mb-36">
        <form action="" className="flex flex-col justify-evenly items-start m-5" autoComplete="off">
                <div className="w-full flex flex-row items-center mt-3 mb-3 ">
                <label htmlFor="darkMode" className="mr-3">Dark/Light mode:</label>
                <select name="darkMode" id="darkMode" className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer">
                    <option value="dark" selected>Dark</option>
                    <option value="light">Light</option>
                </select>
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="w-full flex flex-row items-center mt-3 mb-3 ">
                    <label htmlFor="idioma">Language:</label>
                    <h2>Idioma</h2>
                </div>
                <input type="submit" value="Change" className="mt-3 mb-3 bg-gray text-black rounded-full p-5 font-semibold hover:bg-white hover:cursor-pointer pl-10 pr-10 text-center self-center"/>
            </form>
        </div>
      }></Route>
      </Routes>
    </div>
  );
}

export default Settings;
