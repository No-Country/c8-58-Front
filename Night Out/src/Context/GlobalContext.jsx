import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider(props) {
  const [NavbarMostrado, setNavbarMostrado] = useState(false)
  const [FiltrosMostrado, setFiltrosMostrado] = useState(false)
  const [FiltroEvento, setFiltroEvento] = useState("Evento")
  const [FiltroLugar, setFiltroLugar] = useState("Lugar")
  return (
    <GlobalContext.Provider value={{NavbarMostrado, setNavbarMostrado, FiltrosMostrado, setFiltrosMostrado, FiltroEvento, setFiltroEvento, FiltroLugar, setFiltroLugar}}>
        {props.children}
    </GlobalContext.Provider >
  )
}
