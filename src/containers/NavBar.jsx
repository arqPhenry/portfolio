import React from 'react'
import '@styles/NavBar.scss'
// import loguito from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

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
  return (
    <nav className="navbar navbar-expand-lg navbar-dark rounded-bottom fixed-top py-0">
      <div className="container d-flex">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={handleClickLogo}>Inicio</button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickContact}>Contacto</button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickPortfolio}>Portfolio</button>
            </li>
            <li className="nav-item">
              <button onClick={handleClickEducation}>Educación</button>
            </li>
          </ul>
        </div>
        <div className='ms-auto d-flex'>
          <NavLink to='/' className='link'>ES</NavLink>
          <NavLink to='/en' className='link'>EN</NavLink>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
