import React from 'react'
import '@styles/Proyecto.scss'
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi'
import { FormattedMessage } from 'react-intl'
import { Modal } from '../components/Modal'

// eslint-disable-next-line react/prop-types
const Proyecto = ({ titulo, descrp, fecha, link, repo, mid, images }) => {
  return (
    <>
      <div className='proyecto'>
        <h4>{titulo}</h4>
        <div className='yafue'>
          <p>{descrp}</p>
          <button type="button" className="btn btn-secundary" data-bs-toggle="modal" data-bs-target={`#${mid}`}><img src={images[0]} alt="" /></button>
        </div>
        <div>
            <span>{fecha}</span>
            <div className='links'>
              <a href={repo} target='_blank' rel='noreferrer'><button>Repo <HiCode size='18px' /></button></a>
              <a href={link} target='_blank' rel='noreferrer'><button><FormattedMessage id='portf.open-button'/> <HiOutlineExternalLink size='18px' /></button></a>
            </div>
        </div>
      </div>
      {mid && <Modal id={mid} images={images} />}
    </>
  )
}

export { Proyecto }
