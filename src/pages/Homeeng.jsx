import React from 'react'
import '@styles/Home.scss'
import { NavBareng } from '@containers/NavBareng'
import { Presentation } from '@containers/Presentation'
import { Aboutme } from '@containers/Aboutme'
import { Portfolio } from '@containers/Portfolio'
import { Education } from '@containers/Education'
import { Form } from '@components/Form'
import { Footer } from '@containers/Footer'
import { Data } from '../containers/Data'

const Homeeng = () => {
  return (
        <div className='Home'>
            <NavBareng />
            <Presentation />
            <div id='info' className='info'>
                <Aboutme />
                <Data />
            </div>
            <Portfolio />
            <Education />
            <Form />
            <Footer />
        </div>
  )
}

export { Homeeng }
