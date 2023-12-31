import React from 'react';
//images
import Image from '../assets/avatar.png';
//icons
import {FaGithub, FaYoutube, FaDribbble, FaLinkedinIn, FaLinkedin, FaTrashRestore, FaBroadcastTower }from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            JOHAN <span>POVEDA</span>
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Soy un</span>
            <TypeAnimation sequence={[
              'Desarrollador',
              2000,
              'Front-End',
              2000,
              'Perseverante',
              2000,

            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'> Soy un apacionado Desarrollador Front-End capacitado en HTML5, CSS3, JavaScript, React , Bootstrap, manejo de Git y Github plataformas de diseño como Adobe Photoshop, Figma, Trello entre otras habilidades.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'><a href="#contact">Contactame</a></button>
            <a href='C:\Users\user\OneDrive\Escritorio\intento\src\documents\blueprofessionalmodernCVresume3.pdf' className='text-gradient btn-link'>My Curriculum Vitae</a>
          </motion.div>
          {/*socials*/}
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/johan-poveda1008/nom'>
              <FaLinkedin/>
            </a>
            <a href='https://github.com/JohanKingtero' target="_blank">
              <FaGithub/>
            </a>
            <a href='https://torre.ai/johanpoveda?r=Y0Py7MOc'>
              <FaBroadcastTower/>
            </a>
          </motion.div>
        </div>
        {/*image*/}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default Banner;
