import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet"
import { useNavigate } from 'react-router-dom'

import { postUser, getUserDetail } from '../../redux/actions/index'

import { UserAuth } from '../firebase/context/AuthContext'
import { Alerts } from '../alerts/Alerts'

function validate(user) {
  let error = {}
  
    // if(user.username && user.username.length < 8) error.username = 'El nombre debe contener al menos 8 caracteres'

    // if(user.pass1 && user.pass1.length < 6) error.pass1 = 'La contraseña debe contener al menos 6 caracteres'

    // if(user.pass2 && user.pass2.length < 6) error.pass2 = 'La contraseña debe contener al menos 6 caracteres'

    //if((pass2 && pass2 !== pass1)) error.pass = 'No coinciden las contraseñas'

    // if(user.DNI){
    //   const dniString = user.DNI.toString()
    //   if(dniString.length !== 8) error.DNI = 'Ingrese un DNI valido'
    // }

    // if(user.telefono && user.telefono.length < 10) error.telefono = 'El telefono debe contener al menos 8 caracteres'

  //return error
}

function SignUp() {
  const { createUserEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name:"",
    password:"",
    dni:"",
    years:"",
    email:"",
    cel:"",
    image:""
  })
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [dni, setDni] = useState("")
  const [telefono, setTelefono] = useState("")
  const [cumple, setCumple] = useState("")

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
    setError(validate({
      ...user,
      username: e.target.value
    }))
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    setError(validate({
      ...user,
      mail: e.target.value
    }))
  }

  const handleChangePass1 = (e) => {
    setPass1(e.target.value)
    setError(validate({
      ...user,
      pass1: e.target.value
    }))
    console.log(pass1)
  }

  const handleChangePass2 = (e) => {
    setPass2(e.target.value)
    setError(validate({
      ...user,
      pass2: e.target.value
    }))
    console.log(pass2)
  }

  const handleChangeDni = (e) => {
    setDni(e.target.value)
    setError(validate({
      ...user,
      DNI: e.target.value
    }))
  }

  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value)
    setError(validate({
      ...user,
      telefono: e.target.value
    }))
  }

  const handleChangeCumple = (e) => {
    setCumple(e.target.value)
    setError(validate({
      ...user,
      cumple: e.target.value
    }))
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(pass1 === pass2){
      //Sino, sacar lo de validate y hcaer los ifs aca y que el ultimo sea el del posr user
      if(!error){
        try {
          const password = pass1
          console.log(password)
          const userData = await createUserEmailPassword(email, password)
          if(userData !== undefined) {
            await dispatch(postUser({
              id: userData.user.uid,
              name: username,
              password: password,
              email: email,
              cel: telefono,
              years: cumple,
              dni: dni,
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
      else if(error.username){
        const text = 'username'
        wrong(text)
      }
      else if(error.mail){
        const text = error.code 
        wrong(text)
      }
      else if(error.pass1){
        const text = `{user.pass1}`  
        wrong(text)
      }
      else if(error.pass2){
        const text = `{user.pass2}` 
        wrong(text)
      }
      // else if(error.pass){
      //   const text = `${pass2} ${pass1}`  
      //   wrong(text)
      // }
      else if(error.DNI){
        const text = error.code 
        wrong(text)
      }
      else if(error.telefono){
        const text = error.code 
        wrong(text)
      }
      else if(error.cumple){
        const text = error.code 
        wrong(text)
      }
    } else {
      wrong('las contraseñas no coinciden')      
    }
  }

  return (
    <div className="flex flex-col items-center justify-evenly m-20 w-full">
      <h2 
        className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl text-white mb-16 md:text-3xl s:px-10 s:text-center s:mb-5 s:mt-5 s:text-2xl"
        onSubmit={handleSubmit}
      >
        Sign Up
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center lg:w-3/4 md:p-10 text-center s:w-11/12 s:px-3 s:py-10 xl:w-1/2 2xl:w-1/3">
        <form className="flex flex-col w-full " action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\user.svg"
              alt="imagen usuario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray s:text-lg"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray s:text-lg"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray s:text-lg"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray s:text-lg"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-5 s:text-lg"
              type="number"
              name="DNI"
              id="dni"
              placeholder="XXXXXXXX"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray s:text-lg"
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
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-5 s:text-lg"
              type="date"
              name="cumple"
              id="cumple"
              required
            />
          </div>
          <div className="text-white text-xl flex md:flex-row items-center justify-center s:flex-col s:mb-5">
            <input type="checkbox" name="TyC" id="tyc" required className="s:order-2 md:order-1"/>
            <label className="m-5 text-center s:order-1 md:order-2" htmlFor="tyc">
              Agree to Terms and Conditions
            </label>
          </div>
          <button
            className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold hover:bg-white s:text-lg"
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
