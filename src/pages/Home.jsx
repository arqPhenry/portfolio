import React from 'react'
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
        <div className='container'>
          <NavBar />
          <main>
            <Presentacion />
            <div className='row mt-4'>
              <Acercade />
              <Datos />
            </div>
            <Portafolio />
            <Educacion />
            <Formulario />
          </main>
          <Footer />
        </div>
  )
}

export { Home }
