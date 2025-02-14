import React from 'react'
import Personaje from "../../assets/Personaje.png"
import duotone from "../../assets/duotone.png"
import {motion} from "framer-motion"
import { slipeUp } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>

     <div className='grid grid-cols-1 md:grid-cols-2'>

      {/*Textos y descripcion*/}
      <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
        <motion.img 
        src={duotone} alt='Logo' 
        variants={slipeUp(0.2)}
        initial="initial"
        animate="animate"
        />
        <motion.p
        variants={slipeUp(0.3)}
        initial="initial"
        animate="animate"
        >
        <p className='py-12 text-white'>
        Soy un diseñador web y gráfico que le mete toda la berraquera a su trabajo. <br /> <br />
        ¿Qué hago? <br />
        Diseño web: Creo páginas web que no solo sean bonitas, sino que también sean fáciles de usar y que te ayuden a conseguir tus objetivos. Me enfoco en la experiencia del usuario para que tus visitantes se sientan a gusto navegando por tu página. <br /> <br />
        Diseño gráfico para redes sociales: Diseño piezas gráficas llamativas y creativas que te ayudarán a destacar en las redes sociales. Creo contenido visual que te ayudará a conectar con tu audiencia y a transmitir tu mensaje de forma efectiva. <br /> <br />
        Creación de contenido: No solo diseño, sino que también te ayudo a crear contenido para tus redes sociales. Escribo textos persuasivos y creo videos atractivos que te ayudarán a aumentar el engagement y a conseguir más seguidores. <br /> <br />
        </p>
        </motion.p>
        <div className='flex justify-center gap-4'>
          <a className='bg-sky-700 py-2 px-12 rounded-3xl text-white
          hover:bg-purple700 transition-all items-center cursor-pointer'>
            Visitar<i class='bi bi-rocket text-xl ml-2'></i>
          </a>
          <a className='text-white flex items-center cursor-pointer'>
            Mas información
            <i class='bi bi-whatsapp text-xl ml-2'></i>
            </a>

        </div>
      </div>

      {/*Imagen*/}
      <div className='p-5 sm:p-5 md:p-5 xl:p-36'>
        <img src={Personaje} alt='Personaje'/>
      </div>

     </div>
    </section>
  )
}

export default Hero
