import React from 'react'
import '@styles/Educacion.scss'
import { Etiqueta } from '../components/Etiqueta'
import { Certificado } from '../components/Certificado'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SiJavascript, SiReact, SiCss3, SiHtml5, SiWebpack, SiGit, SiNextdotjs, SiBootstrap, SiZapier, SiGraphql, SiCypress, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiNpm, DiSass } from 'react-icons/di'
import { BsPlayCircle } from 'react-icons/bs'

const Educacion = () => {
  return (
    <section className='row educacion py-3 mt-4'>
            <div className='col-12 col-lg-6 formal' id='educacion'>
                <Etiqueta texto={'Educación'}/>
                <div className='grados mb-2'>
                    <div className='grado'>
                        <h4>React.js Developer</h4>
                        <span>Platzi · Abril 2022 - Actualidad</span>
                        <p>
                            Ruta de Frontend con React, con todas sus bases: <br />
                            · React Hooks <br />
                            · Patrones de render <br />
                            · Manejo Profesional del Estado <br />
                            · Navegación con React Router, etc.
                        </p>
                    </div>
                    <div className='grado mt-2'>
                        <h4>Frontend Developer</h4>
                        <span>Platzi · Sep 2021 - Actualidad</span>
                        <p>
                            Formación como frontend web developer haciendo uso de
                            tecnologías actuales (ECMAscript 6, WebPack,
                            TailwindCSS, NPM, Bootstrap, TypeScript, etc.), código
                            limpio, optimizaciones, testing y habilidades blandas.
                        </p>
                    </div>
                    <div className='grado mt-2 pb-3'>
                        <h4>Arquitecto</h4>
                        <span>Universidad de Buenos Aires · 2022 - 2024</span> <br />
                        <span>Universidad Simón Bolívar, Caracas · 2017 - 2020</span>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6 tecnologias'>
                <Etiqueta texto={'Tecnologías'}/>
                <div className='certificados mb-2'>
                    <Certificado titulo={'HTML'}><SiHtml5 size='26px' /></Certificado>
                    <Certificado titulo={'CSS'}><SiCss3 size='26px' /></Certificado>
                    <Certificado titulo={'JavaScript'}><SiJavascript size='26px' /></Certificado>
                    <Certificado titulo={'Typescript'}><SiTypescript size='26px' /></Certificado>
                    <Certificado titulo={'React.js'}><SiReact size='26px' /></Certificado>
                    <Certificado titulo={'NPM'}><DiNpm size='26px' /></Certificado>
                    <Certificado titulo={'GIT'}><SiGit size='26px' /></Certificado>
                    <Certificado titulo={'Webpack'}><SiWebpack size='26px' /></Certificado>
                    <Certificado titulo={'Next.js'}><SiNextdotjs size='26px' /></Certificado>
                    <Certificado titulo={'Bootstrap'}><SiBootstrap size='26px' /></Certificado>
                    <Certificado titulo={'Sass'}><DiSass size='26px' /></Certificado>
                    <Certificado titulo={'TailwindCSS'}><SiTailwindcss size='26px' /></Certificado>
                    <Certificado titulo={'GraphQL'}><SiGraphql size='26px' /></Certificado>
                    <Certificado titulo={'GH Actions'}><BsPlayCircle size='26px' /></Certificado>
                    <Certificado titulo={'Zapier'}><SiZapier size='26px' /></Certificado>
                    <Certificado titulo={'Cypress'}><SiCypress size='26px' /></Certificado>
                </div>
                <div className='vercertificados'>
                    <a href="https://www.linkedin.com/in/navashenrym/details/certifications/" target='_blank' rel='noreferrer'><button className='rounded-3'>Ver más <HiOutlineExternalLink size='18px' /></button></a>
                </div>
            </div>
    </section>
  )
}

export { Educacion }
