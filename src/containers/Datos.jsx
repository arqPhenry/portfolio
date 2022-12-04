import React from 'react'
import '@styles/Datos.scss'
import { Etiqueta } from '../components/Etiqueta'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi'
import { FormattedMessage } from 'react-intl'
import cv from '../assets/HenryNavasCV.pdf'

const Datos = () => {
  const handleClickMail = () => {
    document.getElementById('formcontainer').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className='col-12 col-md-4 datos' id='contacto'>
      <div className="col-12"><Etiqueta texto={<FormattedMessage id='contact.title' />}/></div>
      <div className='col-12 contacto'>
        <ul>
          <li className='rounded-3 py-2'>
            <a href="https://www.linkedin.com/in/navashenrym/" target='_blank' rel='noreferrer'>
              <AiOutlineLinkedin size= '24px' />
              <span>LinkedIn</span>
            </a>
          </li>
          <li className='rounded-3 py-2'>
            <a href="https://github.com/arqPhenry" target='_blank' rel='noreferrer'>
              <AiOutlineGithub size= '24px' />
              <span>GitHub</span>
            </a>
          </li>
          <li onClick={handleClickMail} className='rounded-3 py-2'>
            <HiOutlineMail size= '24px' />
            <span>Mail</span>
          </li>
          <li className='rounded-3 py-2'>
            <a href={cv} target='_blank' rel='noreferrer'>
            <HiOutlineDocumentText size= '24px' />
            <span>CV</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12">
        <div id='ubicacion' className='ubicacion text-center rounded-3 py-2'>
          <span>📍 Buenos Aires, Argentina</span>
        </div>
      </div>

    </section>
  )
}

export { Datos }
