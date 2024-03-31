import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message}) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img '>
      
      <div className='flex flex-col items-center justify-center text-white mt-20'>
      
        <div className='flex items-center pb-1 mx-10 flex-col md:flex-row'>
        
          <div className='-mt-10 px-10 md:mt-0'>
            <Image
              src='/logo-white-copinguk.svg'
              alt='/' 
              width='140' 
              height='140' 
            />
          </div>
            
          <div className='flex flex-col text-center w-72 md:text-left'>
            <h2 className='text-4xl font-normal'>{heading}</h2>
          </div>
      
        </div>

        <div className='pt-6 px-12 flex flex-auto items-center justify-center w-auto text-center max-w-xl  md:pt-2'>
          <p className='text-xl font-light'>{message}</p>
        </div>

      </div>
    </section>
  ); 
}

export default Hero