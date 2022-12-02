import React from 'react'
import '@styles/Footer.scss'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { handleClickLogo } from './NavBar'

const Footer = () => {
  return (
    <footer className='row py-4 mt-4'>
      <div className='col text-center align-items-center d-flex flex-column'>
        <button onClick={handleClickLogo} className='mb-2'><HiArrowNarrowUp size='18px' /></button>
        <span>
            Henry Navas ®<br />
            2022. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export { Footer }
