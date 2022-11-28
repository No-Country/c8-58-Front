import React, { useState } from "react";
import { useTranslation } from 'react-i18next'

const Language = () => {
const [lang, setLang] = useState('')
const [t, i18n] = useTranslation('global')

  const handleLanguage = (language) => {
    if(language.target.value === 'en') i18n.changeLanguage('en')
    if(language.target.value === 'es') i18n.changeLanguage('es')
    setLang(language.target.value)
    localStorage.setItem('language', language.target.value)
  }
  const idioma = localStorage.getItem('language')
// A donde vaya el texto a traducir hay que importar "import { useTranslation } from 'react-i18next'"
// Y crear una constante "const [t] = useTranslation('global')"; i18n es solo para donde este el select de cambio de idioma
// Los textos se modifican en la carpeta transtlation->en/es->global.json
// Para ponerlos en los componentes solo poner en el lugar donde iria el texto esto "{t('language.change')}" 
//                                                                          (cambiar language.change con el texto adecuado)


  return (
    <>
    <b>{t('language.change')}</b>
    <select 
      onChange={(e) => handleLanguage(e)} 
      defaultValue={idioma}
      className="text-black"
    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
    </>
  )
}

export default Language
