import React from 'react'
import Personaje from "../../assets/Personaje.png"
import duotone from "../../assets/duotone.png"
import {motion} from "framer-motion"
import { slipeUp, slipeInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>

     <div className='grid grid-cols-1 md:grid-cols-2'>

       {/*Textos y descripcion*/}
       <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img 
          src={duotone} alt="Logo del juego" 
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"
          />
        <motion.p
        className='py-12 text-white'
        variants={slipeUp(0.3)}
        initial="initial"
        animate="animate"
        >
          Soy un diseñador web y gráfico que le mete toda la berraquera a su trabajo. <br /> <br />
          ¿Qué hago? <br />
          Diseño web: Creo páginas web que no solo sean bonitas, sino que también sean fáciles de usar y que te ayuden a conseguir tus objetivos. <br /> Me enfoco en la experiencia del usuario para que tus visitantes se sientan a gusto navegando por tu página. <br /> <br />
          Diseño gráfico para redes sociales: Diseño piezas gráficas llamativas y creativas que te ayudarán a destacar en las redes sociales. Creo contenido visual que te ayudará a conectar con tu audiencia y a transmitir tu mensaje de forma efectiva. <br /> <br />
          Creación de contenido: No solo diseño, sino que también te ayudo a crear contenido para tus redes sociales. Escribo textos persuasivos y creo videos atractivos que te ayudarán a aumentar el engagement y a conseguir más seguidores. <br /> <br />
        </motion.p>
        <motion.div 
          className='flex justify-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
        >
          <a className='bg-sky-600 py-2 px-12 rounded-3xl text-white hover:bg-sky-700 transition-all 
          duration-300 items-center cursor-pointer' 
          href="https://linktr.ee/alexm522" // Reemplaza con la URL deseada
          target="_blank" // Abre el enlace en una nueva pestaña (opcional)
          rel="noopener noreferrer">
            Mas Información
            <i className='bi bi-rocket text-xl ml-2'></i>
          </a>
         </motion.div>
      </div>

      {/*Imagen*/}
      <motion.div 
        className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={slipeInFromSide("right" , 0.5)}
        initial="initial"
        animate="animate"
      >
        <img src={Personaje} alt='Personaje'/>
      </motion.div>

     </div>
    </section>
  )
}

export default Hero
