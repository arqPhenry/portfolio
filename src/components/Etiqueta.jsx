import React from 'react'
import '@styles/Etiqueta.scss'

const Etiqueta = ({ texto }) => {
  return (
    <div className='eticontainer'>
      <span className='Etiqueta'>
        {texto}
      </span>
    </div>
  )
}

export { Etiqueta }
