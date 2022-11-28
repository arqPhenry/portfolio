import React from 'react'
import '@styles/NavBar.scss'
import loguito from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export const handleClickLogo = () => {
  document.getElementById('inicio').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const handleClickInfo = () => {
  document.getElementById('info').scrollIntoView({ behavior: 'smooth', block: 'center' })
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
    <header>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <button onClick={handleClickLogo}>Inicio</button>
            </li>
            <li>
              <button onClick={handleClickInfo}>Info</button>
            </li>
            <li>
              <button onClick={handleClickContact}>Contacto</button>
            </li>
            <li>
              <button onClick={handleClickPortfolio}>Portafolio</button>
            </li>
            <li>
              <button onClick={handleClickEducation}>Educacion</button>
            </li>
          </ul>
        </nav>
        <img src={loguito} alt='logo' onClick={handleClickLogo} />
        <div>
          <NavLink to='/' className='link'>ES</NavLink>
          <NavLink to='/en' className='link'>EN</NavLink>
        </div>
      </div>
    </header>
  )
}

export { NavBar }
