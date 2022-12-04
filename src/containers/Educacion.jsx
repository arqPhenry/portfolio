import React from 'react'
import '@styles/Educacion.scss'
import { Etiqueta } from '../components/Etiqueta'
import { Certificado } from '../components/Certificado'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SiJavascript, SiReact, SiCss3, SiHtml5, SiWebpack, SiGit, SiNextdotjs, SiBootstrap, SiZapier, SiGraphql, SiCypress, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiNpm, DiSass } from 'react-icons/di'
import { BsPlayCircle } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'

const Educacion = () => {
  return (
    <section className='row educacion py-3 mt-4'>
            <div className='col-12 col-lg-6 formal' id='educacion'>
                <Etiqueta texto={<FormattedMessage id='edu.title' />}/>
                <div className='grados mb-2'>
                    <div className='grado'>
                        <h4>React.js Developer</h4>
                        <span>Platzi · <FormattedMessage id='edu.date1' /></span>
                        <p>
                            <FormattedMessage id='edu.RDC' /> <br />
                            · React Hooks <br />
                            · <FormattedMessage id='edu.RDC1' /> <br />
                            · <FormattedMessage id='edu.RDC2' /> <br />
                            · <FormattedMessage id='edu.RDC3' />
                        </p>
                    </div>
                    <div className='grado mt-2'>
                        <h4>Front-end Developer</h4>
                        <span>Platzi · <FormattedMessage id='edu.date2' /></span>
                        <p>
                            <FormattedMessage id='edu.frontDescript' />
                        </p>
                    </div>
                    <div className='grado mt-2 pb-3'>
                        <h4><FormattedMessage id='edu.arch' /></h4>
                        <span>Universidad de Buenos Aires · 2022 - 2024</span> <br />
                        <span>Universidad Simón Bolívar, Caracas · 2017 - 2020</span>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6 tecnologias'>
                <Etiqueta texto={<FormattedMessage id='edu.title-tech' />}/>
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
                    <a href="https://www.linkedin.com/in/navashenrym/details/certifications/" target='_blank' rel='noreferrer'><button className='rounded-3'><FormattedMessage id='edu.see' /> <HiOutlineExternalLink size='18px' /></button></a>
                </div>
            </div>
    </section>
  )
}

export { Educacion }
