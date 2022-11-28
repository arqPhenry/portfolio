import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMailSend } from 'react-icons/bi'
import '@styles/Formulario.scss'

const Form = () => {
  return (
    <div className='formcontainer' id='formcontainer'>
        <div className='formdelimitador' id='formdelimitador'>
        <div className='formtitulo'>
            <h2>Contact me <HiOutlineMail size='26px' /></h2>
        </div>
        <p>I am available for freelance work, collaborations or just to say hello. If you want to contact me, please fill out the form below.</p>
        <form className='kwes-form' action='https://kwesforms.com/api/foreign/forms/uQ9RMFv4yJArZGMuYWi1'>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' placeholder='Tony Stark' />
            </fieldset>

            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' placeholder='iam-ironman@avengers.com'/>
            </fieldset>

            <fieldset>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id='subject' placeholder='Henry, i need you, Jarvis broke down 🤖' />
            </fieldset>

            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea name="message" id='message' placeholder="A problem arose in the battle with Ultron, he accessed Jarvis' systems, bypassing all the security walls, and now he plans to wipe out the entire internet. I shut it down, but I need you to redo his algorithm and bring it back to normal..." />
            </fieldset>

            <fieldset>
                <button type="submit">Submit <BiMailSend size='18px' /></button>
            </fieldset>
        </form>

        </div>
    </div>
  )
}

export { Form }
