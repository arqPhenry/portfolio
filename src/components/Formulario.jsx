import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMailSend } from 'react-icons/bi'
import '@styles/Formulario.scss'

const Formulario = () => {
  return (
    <div className='row formcontainer mt-4' id='formcontainer'>
        <div className='col-8 mx-auto py-3 formdelimitador' id='formdelimitador'>
            <div className='formtitulo'>
                <h2>Contáctame <HiOutlineMail size='26px' /></h2>
            </div>
            <p>Estoy disponible para trabajos independientes, colaboraciones o simplemente para saludar. Si quieres ponerte en contacto conmigo, rellena el siguiente formulario.</p>
            <form className='kwes-form' action='https://kwesforms.com/api/foreign/forms/uQ9RMFv4yJArZGMuYWi1'>
                <fieldset>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id='name' placeholder='Tony Stark' />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id='email' placeholder='iam-ironman@avengers.com'/>
                </fieldset>

                <fieldset>
                    <label htmlFor="subject">Asunto</label>
                    <input type="text" name="subject" id='subject' placeholder='Henry, te necesito, Jarvis se descompuso 🤖' />
                </fieldset>

                <fieldset>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id='message' placeholder='Surgió un problema en la batalla con Ultrón, accedió a los sistemas de Jarvis, saltandose todos los muros de seguridad, y ahora planea borrar el internet entero. Lo desconecté, pero te necesito para rehacer su algoritmo y devolverlo a la normalidad...' />
                </fieldset>

                <fieldset>
                    <button type="submit">Enviar <BiMailSend size='18px' /></button>
                </fieldset>
            </form>

        </div>
    </div>
  )
}

export { Formulario }
