import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet"
import { useNavigate } from 'react-router-dom'

import { postUser, getUserDetail } from '../../redux/actions/index'

import { UserAuth } from '../firebase/context/AuthContext'
import { Alerts } from '../alerts/Alerts'

function validate(user) {
  let error = {}
  
    if(user.name && user.name.length < 8) error.name = 'El nombre debe contener al menos 8 caracteres'
    if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(user.name)) error.name1 = 'El nombre debe contener solo letras'

    if(user.dni){
      const dniString = user.dni.toString()
      if(dniString.length !== 8) error.dni = 'Ingrese un dni valido'
    }

    if(user.cel[0] === '+'){
      if(isNaN(user.cel.substring(1, user.cel.length - 1)))
      error.cel = 'algodelcel'
    } else if(isNaN(user.cel)){
      error.cel1 = 'algodelcel'
    }

  return error
}

function SignUp() {
  const { createUserEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name:"",
    pass1:"",
    pass2:"",
    dni:"",
    years:"",
    email:"",
    cel:"",
    image:""
  })

  const [error, setError] = useState("")

  const navigate = useNavigate()

    const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value})
    setError(validate({
      ...user,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSubmit = async(e) => {
    console.log(user.cel)
    console.log(user.cel[0])
    e.preventDefault()
    console.log(user)
    if(user.pass1 === user.pass2){
      if(Object.entries(error).length === 0){
        try {
          const password = user.pass1
          const email = user.email
          console.log(password)
          const userData = await createUserEmailPassword(email, password)
          if(userData !== undefined) {
            await dispatch(postUser({
              id: userData.user.uid,
              name: user.name,
              password: password,
              email: email,
              cel: user.cel,
              years: user.years,
              dni: user.dni,
              image: ""
            }))
            localStorage.setItem('id', userData.user.uid)
            localStorage.setItem('email', email)
            correct('Registrado')
            await dispatch(getUserDetail(userData.user.uid))
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
      else if(error.name){
        const text = 'name debe ser de la menos 8 caracteres'
        wrong(text)
      }
      else if(error.name1){
        const text = 'El nombre debe contener solo letras'
        wrong(text)
      }
      else if(error.dni){
        const text = 'Ingrese dni valido' 
        wrong(text)
      }
      else if(error.cel){
        const text = 'error.cel.solonumeros+' 
        wrong(text)
      }
      else if(error.cel1){
        const text = 'error.cel.solonumeros' 
        wrong(text)
      }
    } else {
      wrong('las contraseñas no coinciden')      
    }
  }

  return (
    <>
      <Helmet>
        <title>
          Night Out - Sign Up
        </title>
      </Helmet>
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
                name="name"
                type="text"
                placeholder="User"
                onChange={(e) => {handleChange(e)}}
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
                name="email"
                //id="mail"
                placeholder="Mail"
                onChange={(e) => {handleChange(e)}}
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
                //id="pass1"
                placeholder="Password"
                onChange={(e) => {handleChange(e)}}
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
                //id="pass2"
                placeholder="Confirm Password"
                onChange={(e) => {handleChange(e)}}
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
                className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
                type="number"
                name="dni"
                //id="dni"
                placeholder="XX.XXX.XXX"
                onChange={(e) => {handleChange(e)}}
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
                name="cel"
                //id="telefono"
                placeholder="11 XXXX XXXX"
                maxLength='13'
                minLength='10'
                onChange={(e) => {handleChange(e)}}
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
                className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
                type="date"
                name="years"
                id="cumple"
                onChange={(e) => {handleChange(e)}}
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
              className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold"
              type='submit'
            >
              Sign up!
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
