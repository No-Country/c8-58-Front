import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function Filters() {

  const { FiltrosMostrado, setFiltrosMostrado } = useContext(GlobalContext)
  const mostrarFiltros = () => {
		if ( FiltrosMostrado === true ) {
			setFiltrosMostrado(false)
		  console.log("Ocultando Filtros")
		}
		else {
			setFiltrosMostrado(true)
		  console.log("Mostrando Filtros")
		}
	  }


  return (
    <div className={FiltrosMostrado === false ? "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute -z-10" : "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute z-10"}>
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="text-4xl text-white">Filters</h2>
        <div className="flex flex-row text-white items-center justify-around">
          <p className="text-2xl pr-5">
            <span>Evento</span> en <span>Lugar</span>
          </p>
          <button className="w-10" onClick={mostrarFiltros}>
            <img src="src\assets\filtroBlanco.png" alt="filtros" />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center w-full justify-evenly pt-5 text-white bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3">
        <select className="w-full text-center text-xl bg-gradient-to-r from-gradiante1 to-gradiante2">
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            Evento
          </option>
          <option className="text-black" value="bar">
            Bar
          </option>
          <option className="text-black" value="boliche">
            Boliche
          </option>
          <option className="text-black" value="concierto">
            Concierto
          </option>
          <option className="text-black" value="otroEvento">
            Otro
          </option>
        </select>
        <select className="w-full text-center text-xl bg-gradient-to-r from-gradiante2 to-gradiante3">
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            Lugar
          </option>
          <option className="text-black" value="palermo">
            Palermo
          </option>
          <option className="text-black" value="recoleta">
            Recoleta
          </option>
          <option className="text-black" value="sanIsidro">
            San Isidro
          </option>
          <option className="text-black" value="tigre">
            Tigre
          </option>
          <option className="text-black" value="otroLugar">
            Otro
          </option>
        </select>
      </div>
      <button className="bg-gray p-3 text-2xl rounded-full mt-5 w-2/6 hover:bg-white">
        Search
      </button>
    </div>
  );
}

export default Filters;
