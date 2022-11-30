import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider(props) {
  const [NavbarMostrado, setNavbarMostrado] = useState(false)
  const [FiltrosMostrado, setFiltrosMostrado] = useState(false)
  return (
    <GlobalContext.Provider value={{NavbarMostrado, setNavbarMostrado, FiltrosMostrado, setFiltrosMostrado}}>
        {props.children}
    </GlobalContext.Provider >
  )
}
