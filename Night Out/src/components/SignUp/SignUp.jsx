import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../firebase/context/AuthContext'
import { Alerts } from '../alerts/Alerts'

function SignUp() {
  const { createUserEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const userData = await createUserEmailPassword(email, password)
      if(userData !== undefined) {
        localStorage.setItem('email', email)
        correct('Registrado')
      }
      navigate('/')
    } catch(error) {
      console.log(error.code)
      if(error.code === 'auth/missing-email'){
        const text = error.code 
        wrong(text)
      }
      if(error.code === 'auth/invalid-email'){
        const text = error.code 
        wrong(text)
      }
      if(error.code === 'auth/email-already-in-use'){
        const text = error.code 
        wrong(text)
      }
      if(error.code === 'auth/internal-error'){//cuando pondo email y no contraseña
        const text = error.code 
        wrong(text)
      }
      if(error.code === 'auth/weak-password'){
        const text = error.code 
        wrong(text)
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-evenly m-20 w-full">
      <h2 
        className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl text-white mb-16"
        onSubmit={handleSubmit}
      >
        Sign Up
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center w-1/2 p-10 text-center">
        <form className="flex flex-col w-full" action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\user.svg"
              alt="imagen usuario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="text"
              placeholder="User"
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\sobre.svg"
              alt="imagen mail"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="email"
              name="mail"
              //id="mail"
              placeholder="Mail"
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\candado.svg"
              alt="imagen contraseña"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="password"
              name="pass1"
              id="pass1"
              placeholder="Password"
              onChange={(e) => {setPassword(e.target.value)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\candado.svg"
              alt="imagen contraseña"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="password"
              name="pass2"
              id="pass2"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\dni.svg"
              alt="imagen dni"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-5"
              type="number"
              name="DNI"
              id="dni"
              placeholder="XX.XXX.XXX"
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\telefono.svg"
              alt="imagen telefono"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="11 XXXX XXXX"
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\calendario.svg"
              alt="imagen calendario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-5"
              type="date"
              name="cumple"
              id="cumple"
              required
            />
          </div>
          <div className="text-white text-xl flex flex-row items-center justify-center">
            <input type="checkbox" name="TyC" id="tyc" />
            <label className="m-5" htmlFor="tyc">
              Agree to Terms and Conditions
            </label>
          </div>
          <button
            className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold hover:text-white"
            type='submit'
          >
            Sign up!
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
