import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message, festivaltitle, strategytitle, festival, strategy, strategyclick, festivalclick }) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img '>
      
      <div className='flex flex-col items-center justify-center text-white mt-20'>
      
        <div className='flex flex-col items-center pb-1 mx-10 sm:flex-row'>
        
          <div className='-mt-10 px-10 sm:mt-0'>
            <Image
              src='/logo-white-copinguk.svg'
              alt='/' 
              width='140' 
              height='140' 
            />
          </div>
            
          <div className='flex flex-col text-center w-72 sm:text-left'>
            <h2 className='text-3xl font-normal'>{heading}</h2>
            <p className='font-light'>{message}</p>
          </div>
      
        </div>
      
      <div className='flex flex-row justify-center text-white leading-tight mx-[8%] w-auto max-w-screen-sm'>
        <div className='flex flex-col items-center p-2 sm:flex-row'>
          
          <div className='my-2 mx-8 flex justify-center flex-col hover:bg-pink hover:text-dkgrey border-2 border-pink rounded-3xl backdrop-blur-md w-72'>
            <Link href='/festival'>
              <a className='px-4'>
              <h1 className='pt-4 font-bold text-xl uppercase leading-6'>{festivaltitle}</h1> 
              <p className='py-1 font-light text-sm'>{festival}</p>
              <p className='pb-4 font-bold text-pink hover:text-dkgrey'>{festivalclick}</p> 
              </a>
            </Link>            
          </div>

          <div className='my-2 mx-8 flex justify-center flex-col hover:bg-pink hover:text-dkgrey border-2 border-pink rounded-3xl backdrop-blur-md w-72'>
            <Link href='/strategy'>
              <a className='px-4'>
              <p className='pt-4 font-bold text-xl uppercase leading-6'>{strategytitle}</p>
              <p className='py-1 font-light text-sm'>{strategy}</p>
              <p className='pb-4 font-bold text-pink hover:text-dkgrey'>{strategyclick}</p>
              </a>
            </Link>     
          </div>                                     
        </div>
      </div>
      </div>
    </section>
  ); 
}

export default Hero