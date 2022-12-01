import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from 'react-i18next'

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
  const [t] = useTranslation('global')

  const { FiltroEvento, setFiltroEvento, FiltroLugar, setFiltroLugar } = useContext(GlobalContext)

  const handleEvento = (Event) => {
    setFiltroEvento(Event.target.value)
  }

  const handleLugar = (Place) => {
    setFiltroLugar(Place.target.value)
  }

  return (
    <div className={FiltrosMostrado === false ? "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute -z-10 s:w-full s:px-0" : "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute z-10 s:w-full s:px-0"}>
      <div className="flex flex-row items-center justify-between w-full s:px-5">
        <h2 className="text-2xl text-white s:text-xl">{t("filters.Filters")}</h2>
        <div className="flex flex-row text-white items-center justify-around">
          <p className="text-xl pr-5 s:text-lg">
          <span>{FiltroEvento}</span> en <span>{FiltroLugar}</span>
          </p>
          <button className="w-8" onClick={mostrarFiltros}>
            <img src="src\assets\filtroBlanco.png" alt="filtros" />
          </button>
        </div>
      </div>
      <div className="flex md:flex-row items-center w-full justify-evenly pt-5 text-white bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 s:flex-col s:w-full">
        <select className="w-full text-center text-xl bg-gradient-to-r md:from-gradiante1 md:to-gradiante2 appearance-none s:from-gradiante1 s:via-gradiante2 s:to-gradiante3 s:mb-2 md:mb-0" onChange={(e)=>handleEvento(e)}>
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            {t("filters.Event")}
          </option>
          <option className="text-black" value="Bar">
            Bar
          </option>
          <option className="text-black" value="Boliche">
            Boliche
          </option>
          <option className="text-black" value="Concierto">
            Concierto
          </option>
          <option className="text-black" value="Otro Evento">
          {t("filters.Others")}
          </option>
        </select>
        <select className="w-full text-center text-xl bg-gradient-to-r md:from-gradiante2 md:to-gradiante3 appearance-none s:from-gradiante1 s:via-gradiante2 s:to-gradiante3 s:mt-2 md:mt-0" onChange={(e)=>handleLugar(e)}>
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            Lugar
          </option>
          <option className="text-black" value="Palermo">
            Palermo
          </option>
          <option className="text-black" value="Recoleta">
            Recoleta
          </option>
          <option className="text-black" value="San Isidro">
            San Isidro
          </option>
          <option className="text-black" value="Tigre">
            Tigre
          </option>
          <option className="text-black" value="Otro Lugar">
          {t("filters.Others")}
          </option>
        </select>
      </div>
      <button className="bg-gray p-3 text-2xl rounded-full mt-5 w-2/6 hover:bg-white s:w-1/2 md:w-1/3 xl:w-1/4" onClick={mostrarFiltros}>
      {t("filters.Search")}
      </button>
    </div>
  );
}

export default Filters;
