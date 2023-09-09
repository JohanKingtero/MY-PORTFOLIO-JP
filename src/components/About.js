import React from 'react';
//countup
import CountUp from 'react-countup';
//Intersection Observer hook
import{useInView} from 'react-intersection-observer';
//motion
import { motion} from 'framer-motion';
//variants
import {fadeIn} from'../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/*img*/}
        <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/*text*/}
        <motion.div
        variants={fadeIn('left', 0.5)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>Sobre mi</h2>
          <h3 className='h3 mb-4'>Hola! Soy un apasionado programador front-end con una mente inquieta y un amor desmedido por el diseño y la creatividad digital. </h3>
          <p className='mb-6'>Mi objetivo es convertir ideas en experiencias visuales impresionantes y funcionales que cautiven a tus usuarios. Con un enfoque meticuloso en la usabilidad y la estética, estoy aquí para transformar tu visión en un sitio web o una aplicación web que destaque en la era digital. Mi pasión por mantenerme actualizado con las últimas tendencias y tecnologías me permite ofrecer soluciones frescas y atractivas. ¡Permíteme ser tu aliado en el mundo digital y llevar tu proyecto al siguiente nivel!</p>
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                InView ?
                <CountUp start={0} end={20} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Años de <br />
                EDAD
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                InView ?
                <CountUp start={0} end={3} duration={3}/> : null}
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Años de  <br />
                Estudio
                
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                InView ?
                <CountUp start={0} end={5} duration={3}/> : null}
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Lenguajes <br />
                Aprendidos
                
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Trabaja conmigo</button>
            <a href="#"/*Link de mi curriculum*/ className='text-gradient btn-link'>
              Curriculum Vitae
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
