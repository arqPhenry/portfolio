import React from 'react'
import '@styles/Acercade.scss'
import { Etiqueta } from '../components/Etiqueta'

const Aboutme = () => {
  return (
    <section className='acercademi'>
        <Etiqueta texto={'About me'} />
        <p>
            Frontend web developer specialized in <strong>React.js</strong>, and in the creation of mobile applications. Interested in developing <strong>highly impactful</strong> digital products with <strong>unique interfaces and immersive uses</strong>. Strongly influenced by <strong>performance, best practices and agile methodologies.</strong>  <br />
            <br />
            In the future, I want to contribute to decision making in the creation of our physical environment, through technology. Making the union of both disciplines, and thus creating new parameters.
        </p>
    </section>
  )
}

export { Aboutme }
