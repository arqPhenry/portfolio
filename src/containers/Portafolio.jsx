import React from 'react'
import '@styles/Portafolio.scss'
import { Etiqueta } from '../components/Etiqueta'
import { Proyecto } from '../components/Proyecto'

const Portafolio = () => {
  const t1 = 'Ecommerce Site - YardSale Shop'
  const descrp1 = `Users can: - Conveniently scroll through the page and view all products.
  - Add the products they want to their cart and see the cart information in real time.
  - They can filter by category the products they want.
  - They can log in and view their purchase history.
  - Access from pc, tablet or mobile as it is a 100% responsive website. Among other features.`
  const fecha1 = 'June 2022'
  const link1 = 'https://yardsale-shop.netlify.app/'
  const repo1 = 'https://github.com/arqPhenry/YardSale-Shop'

  const t2 = 'PWA, Social Network - PetGram'
  const descrp2 = `Social network for pets
  PWA where users can:
  
  - View photos of the cutest pets in the world.
  - Register, and log in to the web as it has a server at Vercel.
  - Filter the photos by categories.
  - Like the photos with their own users.
  - See a summary of the photos that have been liked.
  - View your personal profile information.
  - View photo details.`
  const fecha2 = 'August 2022'
  const link2 = 'https://petgram-phenry-arqphenry.vercel.app/'
  const repo2 = 'https://github.com/arqPhenry/react-avanzado'

  const t3 = 'Task Manager - ToDo Machine'
  const descrp3 = `App for to-do management.

  Users can:
  - Annotate their pending tasks and mark them as completed or pending as appropriate.
  - Delete tasks whenever they want.
  - Enter the tasks and close the app without losing the data, as they are saved in their local storage.`
  const fecha3 = 'May 2022'
  const link3 = 'https://arqphenry.github.io/ToDo-Machine/'
  const repo3 = 'https://github.com/arqPhenry/ToDo-Machine'

  const t4 = 'Advice generator'
  const descrp4 = `Advice generator app using the Advice Slip API.

  Users can:
  - Generate a new piece of advice by clicking the dice icon.
  - View the optimal layout for the app depending on their device's screen size.
  - See hover states for all interactive elements on the page.`
  const fecha4 = 'March 2022'
  const link4 = 'https://arqphenry.github.io/adviceGenerator/'
  const repo4 = 'https://github.com/arqPhenry/adviceGenerator'

  return (
    <section className='portafolio' id='portafolio'>
        <Etiqueta texto={'Últimos proyectos'} />
        <div className='proyectos'>
            <Proyecto
                titulo={t1}
                descrp={descrp1}
                fecha={fecha1}
                link={link1}
                repo={repo1} />
            <Proyecto
                titulo={t2}
                descrp={descrp2}
                fecha={fecha2}
                link={link2}
                repo={repo2} />
            <Proyecto
                titulo={t3}
                descrp={descrp3}
                fecha={fecha3}
                link={link3}
                repo={repo3} />
            <Proyecto
                titulo={t4}
                descrp={descrp4}
                fecha={fecha4}
                link={link4}
                repo={repo4} />
        </div>
    </section>
  )
}

export { Portafolio }
