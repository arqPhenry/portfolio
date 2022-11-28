import React from 'react'
import '@styles/Datos.scss'
import { Etiqueta } from '../components/Etiqueta'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi'
import cv from '../assets/HenryNavasCV.pdf'

const Data = () => {
  const handleClickMail = () => {
    document.getElementById('formcontainer').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className='datos' id='datos'>
        <div id='contacto' className='contacto'>
            <Etiqueta texto={'Contact'} />
            <ul>
                <li>
                  <a href="https://www.linkedin.com/in/navashenrym/" target='_blank' rel='noreferrer'>
                    <AiOutlineLinkedin size= '24px' />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/arqPhenry" target='_blank' rel='noreferrer'>
                    <AiOutlineGithub size= '24px' />
                    <span>GitHub</span>
                  </a>
                </li>
                <li onClick={handleClickMail}>
                  <HiOutlineMail size= '24px' />
                  <span>Mail</span>
                </li>
                <li>
                  <a href={cv} target='_blank' rel='noreferrer'>
                  <HiOutlineDocumentText size= '24px' />
                  <span>CV</span>
                  </a>
                </li>
            </ul>
        </div>
        <div id='ubicacion' className='ubicacion'>
            <p>📍 Buenos Aires, Argentina</p>
        </div>
    </section>
  )
}

export { Data }
