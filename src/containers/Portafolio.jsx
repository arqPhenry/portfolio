import React from 'react'
import '@styles/Portafolio.scss'
import { Etiqueta } from '../components/Etiqueta'
import { Proyecto } from '../components/Proyecto'
import { FormattedMessage } from 'react-intl'
import { MP1photos, MP2photos, MP3photos, MP4photos } from '../hooks/imagenes'

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
  const mdi1 = 'MP1'
  const MP1 = MP1photos

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
  const mdi2 = 'MP2'
  const MP2 = MP2photos

  const t3 = 'Task Manager - ToDo Machine'
  const descrp3 = `App for to-do management.

  Users can:
  - Annotate their pending tasks and mark them as completed or pending as appropriate.
  - Delete tasks whenever they want.
  - Enter the tasks and close the app without losing the data, as they are saved in their local storage.`
  const fecha3 = 'May 2022'
  const link3 = 'https://arqphenry.github.io/ToDo-Machine/'
  const repo3 = 'https://github.com/arqPhenry/ToDo-Machine'
  const mdi3 = 'MP3'
  const MP3 = MP3photos

  const t4 = 'Advice generator'
  const descrp4 = `Advice generator app using the Advice Slip API.

  Users can:
  - Generate a new piece of advice by clicking the dice icon.
  - View the optimal layout for the app depending on their device's screen size.
  - See hover states for all interactive elements on the page.`
  const fecha4 = 'March 2022'
  const link4 = 'https://arqphenry.github.io/adviceGenerator/'
  const repo4 = 'https://github.com/arqPhenry/adviceGenerator'
  const mdi4 = 'MP4'
  const MP4 = MP4photos

  return (
    <section className='row portafolio mt-4' id='portafolio'>
        <div className='col'>
            <Etiqueta texto={<FormattedMessage id='portf.title'/>} />
            <div className='proyectos'>
                <Proyecto
                    titulo={t1}
                    descrp={descrp1}
                    fecha={fecha1}
                    link={link1}
                    repo={repo1}
                    mid={mdi1}
                    images={MP1} />
                <Proyecto
                    titulo={t2}
                    descrp={descrp2}
                    fecha={fecha2}
                    link={link2}
                    repo={repo2}
                    mid={mdi2}
                    images={MP2} />
                <Proyecto
                    titulo={t3}
                    descrp={descrp3}
                    fecha={fecha3}
                    link={link3}
                    repo={repo3}
                    mid={mdi3}
                    images={MP3} />
                <Proyecto
                    titulo={t4}
                    descrp={descrp4}
                    fecha={fecha4}
                    link={link4}
                    repo={repo4}
                    mid={mdi4}
                    images={MP4} />
            </div>
        </div>
    </section>
  )
}

export { Portafolio }
