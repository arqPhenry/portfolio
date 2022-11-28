import React from 'react'
import imagenPerfil from '../assets/perfil.jpg'
import '@styles/Presentacion.scss'

const Presentation = () => {
  return (
    <section id='inicio' className='presentacion'>
        <div className='titulo'>
            <h1>Hello, i am Henry Navas</h1>
            <h3>Front-end Developer | Web & Mobile Apps | React.js</h3>
        </div>
        <figure>
            <img src={imagenPerfil} alt="perfil" />
        </figure>
    </section>
  )
}

export { Presentation }
