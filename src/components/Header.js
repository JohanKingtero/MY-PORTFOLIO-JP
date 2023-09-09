import React from 'react';
//images
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href="#">
          <img className='w-[28vh] h-[20vh]'src={Logo} alt=''/>
        </a>
        {/*Button*/}
        <button className='btn btn-sm'><a href='#Contact'>Trabaja Conmigo</a></button>
      </div>
    </div>
    </header>;
};

export default Header;
