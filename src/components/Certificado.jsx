import React from 'react'
import '@styles/Certificado.scss'

const Certificado = ({ children, titulo }) => {
  return (
    <div className='certificado'>
        {children}
        <span>{titulo}</span>
    </div>
  )
}

export { Certificado }
