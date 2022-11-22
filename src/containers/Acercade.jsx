import React from 'react'
import '@styles/Acercade.scss'
import { Etiqueta } from '../components/Etiqueta'

const Acercade = () => {
  return (
    <section className='acercademi'>
        <Etiqueta texto={'Acerca de mí'} />
        <p>
            Desarrollador web frontend especializado en <strong>React.js</strong>, y en la creación de
            aplicaciones móviles. Interesado en el desarrollo de productos digitales <strong>altamente impactantes</strong> con <strong>interfaces únicas y usos envolventes</strong>. Con grandes influencias por el <strong>performance, buenas prácticas y metodologías ágiles</strong>. <br />
            <br />
            Actualmente estudiante de <strong>Ingeniería de Software</strong> en @Platzi, y de <strong>Arquitectura</strong> en Universidad de Buenos Aires, FADU. <br />
            <br />
            A futuro, quiero aportar en la toma de decisiones en la creación de nuestro entorno físico, por medio de la tecnología. Haciendo la unión de ambas disciplinas, y creando así nuevos parámetros.
        </p>
    </section>
  )
}

export { Acercade }
