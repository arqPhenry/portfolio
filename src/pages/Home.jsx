import React from 'react'
import '@styles/Home.scss'
import { NavBar } from '@containers/NavBar'
import { Presentacion } from '@containers/Presentacion'
import { Datos } from '@containers/Datos'
import { Acercade } from '@containers/Acercade'
import { Portafolio } from '@containers/Portafolio'
import { Educacion } from '@containers/Educacion'
import { Formulario } from '@components/Formulario'
import { Footer } from '@containers/Footer'

const Home = () => {
  return (
        <div className='Home'>
            <NavBar />
            <Presentacion />
            <div id='info' className='info'>
                <Acercade />
                <Datos />
            </div>
            <Portafolio />
            <Educacion />
            <Formulario />
            <Footer />
        </div>
  )
}

export { Home }
