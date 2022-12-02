import React, { useState } from "react";
import { useTranslation } from 'react-i18next'

const Language = ({setLang}) => {
const [t, i18n] = useTranslation('global')

  const handleLanguage = (language) => {
    setLang(language.target.value)
  }
  const idioma = localStorage.getItem('language')
// A donde vaya el texto a traducir hay que importar "import { useTranslation } from 'react-i18next'"
// Y crear una constante "const [t] = useTranslation('global')"; i18n es solo para donde este el select de cambio de idioma
// Los textos se modifican en la carpeta translation->en/es->global.json
// Para ponerlos en los componentes solo poner en el lugar donde iria el texto esto "{t('language.change')}" 
//                                                                          (cambiar language.change con el texto adecuado)

  return (
    <>
    <p className="mr-3">{t("language.change")}</p>
    <select 
      onChange={(e) => handleLanguage(e)}
      defaultValue={idioma}  
      className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer"
    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
    </>
  )
}

export default Language
