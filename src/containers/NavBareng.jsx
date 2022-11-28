import React from 'react'
import '@styles/NavBar.scss'
import loguito from '../assets/logo.svg'
import { handleClickInfo, handleClickContact, handleClickLogo, handleClickPortfolio, handleClickEducation } from './NavBar'
import { NavLink } from 'react-router-dom'

const NavBareng = () => {
  return (
    <header>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <button onClick={handleClickLogo}>Home</button>
            </li>
            <li>
              <button onClick={handleClickInfo}>Info</button>
            </li>
            <li>
              <button onClick={handleClickContact}>Contact</button>
            </li>
            <li>
              <button onClick={handleClickPortfolio}>Portfolio</button>
            </li>
            <li>
              <button onClick={handleClickEducation}>Education</button>
            </li>
          </ul>
        </nav>
        <img src={loguito} onClick={handleClickLogo} alt='logo' />
        <div>
          <NavLink to='/' className='link'>ES</NavLink>
          <NavLink to='/en' className='link'>EN</NavLink>
        </div>
      </div>
    </header>
  )
}

export { NavBareng }
