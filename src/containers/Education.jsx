import React from 'react'
import '@styles/Educacion.scss'
import { Etiqueta } from '../components/Etiqueta'
import { Certificado } from '../components/Certificado'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SiJavascript, SiReact, SiCss3, SiHtml5, SiWebpack, SiGit, SiNextdotjs, SiBootstrap, SiZapier, SiGraphql, SiCypress, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiNpm, DiSass } from 'react-icons/di'
import { BsPlayCircle } from 'react-icons/bs'

const Education = () => {
  return (
    <section className='educacion' id='educacion'>
            <div className='formal'>
                <Etiqueta texto={'Education'}/>
                <div className='grados'>
                    <div className='grado'>
                        <h4>React.js Developer</h4>
                        <span>Platzi · Abril 2021 - Present</span>
                        <p>
                            Frontend path with React, with all its bases: <br />
                                · React Hooks <br />
                                · Render Patterns <br />
                                · Professional State Management <br />
                                · Navigation with React Router, etc.
                        </p>
                    </div>
                    <div className='grado'>
                        <h4>Frontend Developer</h4>
                        <span>Platzi · Sep 2020 - Present</span>
                        <p>
                            Training as a frontend web developer making use of
                            current technologies (ECMAscript 6, WebPack,
                            TailwindCSS, NPM, Bootstrap, TypeScript, etc.), clean code, optimizations
                            optimizations, testing and soft skills.
                        </p>
                    </div>
                    <div className='grado'>
                        <h4>Bachelor of Architecture (BArch)</h4>
                        <span>Universidad de Buenos Aires · 2022 - 2024</span> <br />
                        <span>Universidad Simón Bolívar, Caracas · 2017 - 2020</span>
                    </div>
                </div>
            </div>
            <div className='tecnologias'>
                <Etiqueta texto={'Technologies'}/>
                <div className='certificados'>
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
                    <a href="https://www.linkedin.com/in/navashenrym/details/certifications/" target='_blank' rel='noreferrer'><button>See more <HiOutlineExternalLink size='18px' /></button></a>
                </div>
            </div>
    </section>
  )
}

export { Education }
