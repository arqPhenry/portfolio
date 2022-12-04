import React from 'react'
import '@styles/Acercade.scss'
import { Etiqueta } from '../components/Etiqueta'
import { FormattedMessage } from 'react-intl'

const Acercade = () => {
  return (
    <section className='col-12 col-md-8 acercademi mb-3'>
      <div className="col-12"><Etiqueta texto={<FormattedMessage id='about.title' />} /></div>
      <div className="col">
        <FormattedMessage id='about.info' />
      </div>
    </section>
  )
}

export { Acercade }
