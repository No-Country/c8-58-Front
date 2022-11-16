import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
{
  /*import { NavbarHamburguesa } from './NavbarHamburguesa'*/
}

function Header() {
  return (
    <header className="text-white flex flex-row items-center justify-around p-3">
      <div className="flex flex-row  items-center">
        <img className="w-16" src="src\assets\logo.png" alt="logo" />
        <h1 className="text-4xl font-semibold ml-5">Night Out</h1>
      </div>
      <nav>
        <Routes>
          <Route
            path="/"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5"><NavLink className="p-4 px-10" to="/">Home</NavLink></li>
                <li className="p-5"><a className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10" href="#logear">Sign In</a>
              </li>
              </ul>
            }
          ></Route>
          <Route
            path="/Sign-up"
            element={
              <ul className="list-none text-gray flex flex-row text-xl justify-evenly items-center">
                <li className="p-5"><NavLink className="p-4 px-10" to="/">Home</NavLink></li>
                <li className="p-5"><a className="p-4 rounded-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 px-10" href="#logear">Sign In</a>
              </li>
              </ul>
            }
          ></Route>
          <Route path="/:ruta" element={
            <ul>
              <li><NavLink to="/feed">Home</NavLink></li>
              <li><NavLink to="/user">User</NavLink></li>
            </ul>
          }></Route>
        </Routes>
      </nav>
    </header>
  );
}

export default Header;
