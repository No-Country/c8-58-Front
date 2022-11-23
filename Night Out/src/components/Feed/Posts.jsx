import React from "react";

function Posts() {
  return (
    <div className="pt-16 text-black">
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col items-center justify-evenly">
          <img
            className="w-16 rounded-full"
            src="src\assets\logo.png"
            alt="Foto Usuario"
          />
          <p className="text-white">@Moderador</p>
        </div>
        <p className="w-3/4 p-5 bg-gray rounded-3xl text-center text-3xl flex flex-wor justify-evenly">
          <span className="font-bold">Evento</span> en <span className="font-bold">Lugar</span>
        </p>
      </div>
      <div className="relative">
        <p className=" rounded-3xl p-5 m-5 bg-gray text-black ">
          Descripcion escrita
        </p>
        <button className="absolute w-14 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-3 top-1/2 right-2">
          <img className="" src="src\assets\comentariosBlanco.png" alt="Comentarios" />
        </button>
      </div>
      <span className="bg-black h-1 w-full block mt-16"></span>
    </div>
  );
}

export default Posts;
