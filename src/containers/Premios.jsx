import React from 'react'
import '@styles/Premios.scss'
import { Etiqueta } from '../components/Etiqueta'

const Premios = () => {
  return (
    <section className='premios' id='premios'>
        <Etiqueta texto={'Premios'} />
        <div className='contenedor'>
            <div className='premio'>
                <figure></figure>
                <div>
                    <span>Ganador de Beca edX 2019</span>
                    <span>Caracas, VE, 2019</span>
                </div>
            </div>
            <div className='premio'>
                <figure></figure>
                <div>
                    <span>Mejor promedio Bachillerato idk</span>
                    <span>Caracas, VE, 2017</span>
                </div>
            </div>
            <div className='premio'>
                <figure></figure>
                <div>
                    <span>OtroOtroOtroOtro</span>
                    <span>Caracas, VE, 2020</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export { Premios }
