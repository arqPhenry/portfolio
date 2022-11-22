import React from 'react'
import '@styles/NavBar.scss'
import loguito from '../assets/logo.svg'

export const handleClickLogo = () => {
  document.getElementById('inicio').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const NavBar = () => {
  const navLinks = ['Inicio', 'Info', 'Portafolio', 'Contacto', 'Educacion']

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}`

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
      <ul key={content}>
        <li>
          <button onClick={handleClickNav} >{content}</button>
        </li>
      </ul>
    )
  }

  return (
    <header>
      <div className='container'>
        <nav>
          {navLinks.map(nav => renderNavLink(nav))}
        </nav>
        <img src={loguito} alt='logo' />
        <div>
          <button>ES</button>
          <button>EN</button>
        </div>
      </div>
    </header>
  )
}

export { NavBar }
