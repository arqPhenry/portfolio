import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMailSend } from 'react-icons/bi'
import '@styles/Formulario.scss'
import { FormattedMessage } from 'react-intl'

const Formulario = () => {
  return (
    <div className='row formcontainer mt-4' id='formcontainer'>
        <div className='col-10 col-md-8 mx-auto py-3 formdelimitador' id='formdelimitador'>
            <div className='formtitulo'>
                <h2><FormattedMessage id='form.title' /> <HiOutlineMail size='26px' /></h2>
            </div>
            <p><FormattedMessage id='form.descrp' /></p>
            <form className='kwes-form' action='https://kwesforms.com/api/foreign/forms/uQ9RMFv4yJArZGMuYWi1'>
                <fieldset>
                    <label htmlFor="name"><FormattedMessage id='form.name' /></label>
                    <input type="text" name="name" id='name' placeholder='Tony Stark' />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id='email' placeholder='iam-ironman@avengers.com'/>
                </fieldset>

                <fieldset>
                    <label htmlFor="subject"><FormattedMessage id='form.subject' /></label>
                    <input type="text" name="subject" id='subject' placeholder='Henry, i need you, Jarvis broke down 🤖' />
                </fieldset>

                <fieldset>
                    <label htmlFor="message"><FormattedMessage id='form.message' /></label>
                    <textarea name="message" id='message' placeholder="A problem arose in the battle with Ultron, he accessed Jarvis' systems, bypassing all the security walls, and now he plans to wipe out the entire internet. I shut it down, but I need you to redo his algorithm and bring it back to normal..."/>
                </fieldset>

                <fieldset>
                    <button type="submit"><FormattedMessage id='form.submit'/> <BiMailSend size='18px' /></button>
                </fieldset>
            </form>

        </div>
    </div>
  )
}

export { Formulario }
