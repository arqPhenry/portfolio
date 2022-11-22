import React from 'react'
import '@styles/Footer.scss'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { handleClickLogo } from './NavBar'

const Footer = () => {
  return (
    <footer>
        <button onClick={handleClickLogo}><HiArrowNarrowUp size='18px' /></button>
        <span>
            Henry Navas ®<br />
            2022. All rights reserved.
        </span>
    </footer>
  )
}

export { Footer }
