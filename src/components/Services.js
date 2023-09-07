import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
//services data
const services=[
  {
    name: 'Banco de Recursos Fundacion Educamas',
    description: 'Objetivo Crear una interfaz de usuario intuitiva, atractiva y altamente funcional para el banco de material de la fundacion Educamas, que facilite a los desarrolladores web el acceso.',
    link:'Learn more'
  },
  {
    name: 'Wheel of doom ',
    description: 'Juego de azar con tematica pirata, interactivo usando funcionalidades de JavaScript, divertido, dinamico con sonidos y animaciones que te atrapan en el juego como un verdadero pirata',
    link:'Learn more'
  },
  {
    name: 'Landing Dizzer ',
    description: 'Capaz de replicar y crear landings pages excactas de platafomas existentes dandole estilos y colores unicos',
    link:'Learn more'
  },
  {
    name: 'Reproductor de musica',
    description: ' Un instante para escuchar la musica que te gusta con la mejor experiencia, escucha la playlist mejor posicionada en el mundo',
    link:'Learn more'
  },
]
const Services = () => {
  return (

   <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/*text y imagen*/}
        <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg_:mb-0'>
          <h2 className='h2 text-accent mb-6'>Mis experiencias</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Aqui tienes cuatro proyectos que he desarrolado. Dale click a las flechas para ver un demo y leer mas para verlo en Github</h3>
          <button className='btn btn-sm'>Trabaja Conmigo</button>
        </motion.div>
        {/*services*/}
        <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
          {/*services list*/}
          <div>
            {services.map((service, index)=>{
              //destructure service
              const {name, description, link} = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'key={index}>
                 <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                 <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                 </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Services;
