import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className="flex flex-col justify-evenly items-center colorBlanco w-full mb-8 mt-16 " id="">
        <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl m-10"> Sign In</h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl p-10 flex flex-col justify-evenly items-center w-1/2 mb-10">
        <form className="flex flex-col w-full " action="">
          <label className="text-xl font-bold m-2 ml-5" htmlFor="username">Username</label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img className="h-8 m-3" src="src\assets\user.svg" alt="imagen usuario" />
            <input className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray" type="text" placeholder="" id="username" />
          </div>
          <label className="text-xl font-bold m-2 ml-5" htmlFor="password">Password</label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full  mb-5">
          <img className="h-8 m-3" src="src\assets\candado.svg" alt="imagen contraseña" />
          <input className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray" type="password" placeholder="" id="password" />
          </div>
          <button className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold" type="submit">Sign in</button>
        </form>
      </div>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center w-1/2 p-10 text-center">
        <h2 className="font-bold text-4xl mb-10">Don't have an account yet?</h2>
        <h2 className="font-bold text-4xl mb-10">Sign up!</h2>
        <button className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold">
          <Link to="/Sign-up" >Let's go!</Link>
        </button>
      </div>
    </div>
  )
}

export default LogIn