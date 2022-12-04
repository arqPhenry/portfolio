import React, { useContext } from 'react'
import { langContext } from '../context/langContext'
import { FormattedMessage } from 'react-intl'
import '@styles/NavBar.scss'
// import loguito from '../assets/logo.svg'

export const handleClickLogo = () => {
  document.getElementById('inicio').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const handleClickPortfolio = () => {
  document.getElementById('portafolio').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const handleClickContact = () => {
  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const handleClickEducation = () => {
  document.getElementById('educacion').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const NavBar = () => {
  const idioma = useContext(langContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark rounded-bottom fixed-top py-0">
      <div className="container d-flex">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={handleClickLogo}><FormattedMessage id='nav.home' defaultMessage='Inicio' /></button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickContact}><FormattedMessage id='nav.contact' defaultMessage='Contacto' /></button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickPortfolio}><FormattedMessage id='nav.portfolio' defaultMessage='Portafolio' /></button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickEducation}><FormattedMessage id='nav.education' defaultMessage='Educacion' /></button>
            </li>
          </ul>
        </div>
        <div className='ms-auto d-flex'>
          <button onClick={() => idioma.establecerLenguaje('es-MX')} className='link'>ES</button>
          <button onClick={() => idioma.establecerLenguaje('en-US')} className='link'>EN</button>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
