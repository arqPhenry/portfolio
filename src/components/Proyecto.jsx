import React from 'react'
import '@styles/Proyecto.scss'
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi'

const Proyecto = ({ titulo, descrp, fecha, link, repo }) => {
  return (
    <div className='proyecto'>
        <h4>{titulo}</h4>
        <p>{descrp}</p>
        <div>
            <span>{fecha}</span>
            <div className='links'>
              <a href={repo} target='_blank' rel='noreferrer'><button>Repo <HiCode size='18px' /></button></a>
              <a href={link} target='_blank' rel='noreferrer'><button>Abrir <HiOutlineExternalLink size='18px' /></button></a>
            </div>
        </div>
    </div>
  )
}

export { Proyecto }
