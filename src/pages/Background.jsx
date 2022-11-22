import React from 'react'
import '@styles/Background.scss'

const Background = () => {
  return (
    <>
        <div className='shape scale-up-center' id="shape1"></div>
        <div className='shape scale-up-center fade-delay-2000' id="shape2"></div>
        <div className='shape scale-up-center fade-delay-4000' id="shape3"></div>
        <div className='shape scale-up-center fade-delay-2000' id="shape4"></div>
        <div className='shape scale-up-center' id="shape5"></div>
    </>
  )
}

export { Background }
