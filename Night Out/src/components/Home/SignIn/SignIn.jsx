import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

import { getUserDetail } from "../../../redux/actions";

import { UserAuth } from '../../firebase/context/AuthContext'
import { Alerts } from '../../alerts/Alerts'

function validate(userSI) {
  let error = {}
  
    if(!userSI.email) error.email = 'Ingrese un email'

    if(!userSI.password) error.password = 'Ingrese una contraseña'

  return error
}

function SignIn() {
  const { signInEmailPassword, user } = UserAuth()
  const { correct, wrong } = Alerts()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userSI, setUserSI] = useState({
    email:"",
    password:""
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setUserSI({
      ...userSI,
      [e.target.name] : e.target.value})
    setError(validate({
      ...userSI,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(Object.entries(error).length === 0){
    try {
      const email = userSI.email
      const password = userSI.password
      console.log(email)
      console.log(password)
      const userSignIn = await signInEmailPassword(email, password)
      await correct('Sesion Iniciada')
      await dispatch(getUserDetail(userSignIn.user.uid))
      localStorage.setItem('id', userSignIn.user.uid)
      localStorage.setItem('email', email)
      setUserSI({
        email:"",
        password:""
      })
      navigate('/feed')
    } catch (error) {
      if(error.code === 'auth/wrong-password'){
        const text = error.code
        wrong(text)
      }
      if(error.code === 'auth/user-not-found'){
        const text = error.code
        wrong(text)
      }
    }
  }
  else if(error.email){
    const text = `${error.email}`
    wrong(text)
  }
  else if(error.password){
    const text = `${error.password}`
    wrong(text)
  }
}

  const userRegistrated = () => {
    const text = 'Ya estas registrado'
    wrong(text)
  }

  useEffect(() => {

  }, [])

  return (
    <div className="flex flex-col justify-evenly items-center colorBlanco w-full mb-8 " id="logear">
      <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl m-10 text-center">
        What now?
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl p-10 flex flex-col justify-evenly items-center w-1/2 mb-10">
        <h2 className="font-bold text-4xl ">Sign in!</h2>
        <form className="flex flex-col w-full " action="" onSubmit={handleSubmit}>
          <label className="text-xl font-bold m-2 ml-5" htmlFor="username">Email</label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img className="h-8 m-3" src="src\assets\user.svg" alt="imagen usuario" />
            <input 
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray" 
              type="email" 
              placeholder="" 
              name="email"  
              onChange={(e) => handleChange(e)}
            />
          </div>
          <label className="text-xl font-bold m-2 ml-5" htmlFor="password">Password</label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full  mb-5">
          <img className="h-8 m-3" src="src\assets\candado.svg" alt="imagen contraseña" />
          <input 
            className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray" 
            type="password" 
            placeholder=""
            name="password" 
            onChange={(e) => handleChange(e)}
          />
          </div>
          <button className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold">Sign in</button>
        </form>
      </div>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center w-1/2 p-10 text-center">
        <h2 className="font-bold text-4xl mb-10">Don't have an account yet?</h2>
        <h2 className="font-bold text-4xl mb-10">Sign up!</h2>
        <button className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold">
          { user ? <Link to="/" onClick={userRegistrated}>Let's go!</Link> : <Link to="/Sign-up" >Let's go!</Link>}
        </button>
      </div>
    </div>
  );
}

export default SignIn;