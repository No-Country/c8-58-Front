import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../../firebase/context/AuthContext";
import { Alerts } from "../../alerts/Alerts";

function SignIn() {
  const { signInEmailPassword, user } = UserAuth();
  const { correct, wrong } = Alerts();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log(email);
      console.log(password);
      const userSignIn = await signInEmailPassword(email, password);
      console.log(userSignIn);
      await correct("Sesion Iniciada");
      localStorage.setItem("id", userSignIn.user.uid);
      localStorage.setItem("email", email);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError(error.code);
      if (error.code === "auth/wrong-password") {
        const text = error.code;
        wrong(text);
      }
      if (error.code === "auth/user-not-found") {
        const text = error.code;
        wrong(text);
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      className="flex flex-col justify-evenly items-center colorBlanco w-full mb-8 "
      id="logear"
    >
      <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 md:text-3xl s:px-10 s:text-center s:mb-5 s:mt-5 s:text-2xl">
        What now?
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl lg:p-10 flex flex-col justify-evenly items-center lg:w-3/4 mb-10 s:w-full s:p-5 xl:w-1/2 2xl:w-1/3">
        <h2 className="font-bold text-4xl s:text-2xl md:text-3xl">Sign in!</h2>
        <form
          className="flex flex-col w-full "
          action=""
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <label
            className="md:text-xl font-bold m-2 ml-5 s:text-lg"
            htmlFor="username"
          >
            Username
          </label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\user.svg"
              alt="imagen usuario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none md:text-xl bg-gray s:text-lg"
              type="text"
              placeholder=""
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label
            className="md:text-xl font-bold m-2 ml-5 s:text-lg"
            htmlFor="password"
          >
            Password
          </label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full  mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\candado.svg"
              alt="imagen contraseña"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none md:text-xl bg-gray s:text-lg"
              type="password"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-gray rounded-full colorNegro h-8 md:text-xl mx-auto p-7 text-center flex justify-center items-center font-bold hover:bg-white s:text-lg">
            Sign in
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center lg:w-3/4 p-10 text-center s:w-full s:p-5 xl:w-1/2 2xl:w-1/3">
        <h2 className="font-bold text-4xl mb-10 s:text-2xl md:text-3xl">
          Don't have an account yet?
        </h2>
        <h2 className="font-bold text-4xl mb-10 s:text-2xl md:text-3xl">
          Sign up!
        </h2>
        <button className="bg-gray rounded-full colorNegro h-8 md:text-xl mx-auto p-7 text-center flex justify-center items-center font-bold animate-pulse s:text-lg">
          {user ? (
            <Link to="/">Let's go!</Link>
          ) : (
            <Link to="/Sign-up">Let's go!</Link>
          )}
        </button>
      </div>
    </div>
  );
}

export default SignIn;
