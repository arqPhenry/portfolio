import React from 'react'
import imagenPerfil from '../assets/perfil.jpg'
import '@styles/Presentacion.scss'

const Presentacion = () => {
  return (
    <section id='inicio' className='presentacion'>
        <div className='titulo'>
            <h1>Hola, soy Henry Navas</h1>
            <h3>Front-end Developer | Web & Mobile Apps | React.js</h3>
        </div>
        <figure>
            <img src={imagenPerfil} alt="" />
        </figure>
    </section>
  )
}

export { Presentacion }
