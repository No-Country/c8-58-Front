import React from "react";
import Posts from './Posts'

function Publications() {
  
  return (
    <div className="w-4/5 bg-lila">
      <div className="flex flex-row justify-between items-center w-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 p-5">
        <h2 className="text-white text-4xl">Home</h2>
        <div className="flex flex-row text-white items-center justify-around">
        <p className="text-2xl pr-5"><span>Evento</span> en <span>Lugar</span></p>
    <button className="w-10">
          <img src="src\assets\filtroBlanco.png" alt="filtros" />
        </button>
    </div>
      </div>
      <div className=" p-5">
        <div className="flex flex-row justify-evenly mb-5">
          <div>
            <img
              src="src\assets\candado.svg"
              alt="foto perfil"
              className="w-16 rounded-full"
            />
            <p className="text-white">Nombre</p>
          </div>
          <div className="bg-gray rounded-3xl w-3/4 p-5 flex flex-row">
            <select className="w-full bg-gray outline-none text-center border-none">
              <option value="" selected="true" disabled="disabled">
                {" "}
                Seleccionar evento
              </option>
              <option value="bar">Bar</option>
              <option value="boliche">Boliche</option>
              <option value="concierto">Concierto</option>
              <option value="otroEvento">Otro</option>
            </select>
            <select className="w-full bg-gray outline-none text-center ">
              <option value="" selected="true" disabled="disabled">
                {" "}
                Seleccionar lugar
              </option>
              <option value="palermo">Palermo</option>
              <option value="recoleta">Recoleta</option>
              <option value="sanIsidro">San Isidro</option>
              <option value="tigre">Tigre</option>
              <option value="otroLugar">Otro</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <textarea
            name="descripcion"
            id="description"
            cols="30"
            rows="10"
            placeholder="Descripción"
            maxLength="100"
            className="w-full rounded-3xl p-5 bg-gray text-black max-h-16 resize-none outline-none"
          ></textarea>
          <button className="absolute w-12 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-2 top-1/2 -right-3">
          <img
            src="src\assets\flechaBlanca.png"
            alt="Subir"
          />
          </button>
        </div>
      </div>
      <span className="bg-black h-1 w-full block"></span>
      <div>
        {/*POSTS*/}
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />

      </div>
    </div>
  );
}

export default Publications;
