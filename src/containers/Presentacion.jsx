import React from 'react'
import imagenPerfil from '../assets/perfil.jpg'
import { FormattedMessage } from 'react-intl'
import '@styles/Presentacion.scss'

const Presentacion = () => {
  return (
    <section id='inicio' className='container presentacion mt-5'>
      <div className="row align-items-center">
        <div className="col-6 col-md-8 text-center text-md-start">
          <h1 className='fw-bold'><FormattedMessage id='presentation.title' /></h1>
          <h3><FormattedMessage id='presentation.subtitle' /></h3>
        </div>
        <div className="col text-center">
          <figure>
              <img src={imagenPerfil} alt="henrynavas" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export { Presentacion }
