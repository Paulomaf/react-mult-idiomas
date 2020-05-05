import React, { useState } from 'react'
import { i18n } from './translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

function App() {
  const [ language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

  const handleSelectChance = event => {
    console.log(event.target.value)
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
    window.location = window.location
  }
  return (
    <>
      <div>
        <h1>{ i18n.t('titles.app', { 
              name: 'PAULO'
            })}
        </h1>
        <p>{ i18n.t('messages.itWorks') }</p>
        <button>{ i18n.t('buttons.save') }</button>
      </div>
      <small>{ i18n.t('messages.smallText') }</small>
      <div>
        <select onChange={ handleSelectChance } value={ language }>
          <option> Selecione um idioma</option>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
      </div>
    </>
  )
}

export default App
