import React from 'react'
import '@styles/Acercade.scss'
import { Etiqueta } from '../components/Etiqueta'

const Acercade = () => {
  return (
    <section className='col-12 col-md-8 acercademi'>
      <div className="col-12"><Etiqueta texto={'Acerca de mí'} /></div>
      <div className="col">
        <p>
          Desarrollador web frontend especializado en <strong>React.js</strong>, y en la creación de
          aplicaciones móviles. Interesado en el desarrollo de productos digitales <strong>altamente impactantes</strong> con <strong>interfaces únicas y usos envolventes</strong>. Con grandes influencias por el <strong>performance, buenas prácticas y metodologías ágiles</strong>. <br />
          <br />
          A futuro, quiero aportar en la toma de decisiones en la creación de nuestro entorno físico, por medio de la tecnología. Haciendo la unión de ambas disciplinas, y creando así nuevos parámetros.
        </p>
      </div>
    </section>
  )
}

export { Acercade }
