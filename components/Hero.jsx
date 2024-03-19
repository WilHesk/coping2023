import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message, festivaltitle, strategytitle, festival, strategy }) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img '>
      
      <div className='flex flex-col items-center justify-center text-white max-w-screen-md mt-20'>
      
        <div className='flex flex-col items-center pb-2 sm:flex-row mx-10'>
        
          <div className='px-10'>
            <Image
              src='/logo-white-copinguk.svg'
              alt='/' 
              width='100' 
              height='100' 
            />
          </div>
            
          <div className='flex flex-col text-center sm:text-left'>
            <h2 className='text-4xl font-normal'>{heading}</h2>
            <p className='pt-1 font-light'>{message}</p>
          </div>
      
        </div>
      
      <div className='flex flex-row items-center justify-center text-white leading-tight mx-[8%] w-auto max-w-screen-md'>
        <div className='flex flex-col items-center py-2 sm:flex-row'>
          
          <div className='my-4 mx-4 flex justify-center flex-col bg-white text-dkgrey hover:bg-pink rounded-3xl'>
            <Link href='#festival'>
              <a className='px-8 py-2'>
              <h1 className='pt-4 font-bold text-xl uppercase leading-6'>{festivaltitle}</h1> 
              <p className='pt-2 pb-4 font-light'>{festival}</p> 
              </a>
            </Link>            
          </div>

          <div className='my-4 mx-4 flex justify-center flex-col bg-white text-dkgrey hover:bg-pink rounded-3xl'>
            <Link href='#strategy'>
              <a className='px-8 py-2'>
              <p className='pt-4 font-bold text-xl uppercase leading-6'>{strategytitle}</p>
              <p className='pt-2 pb-4 font-light'>{strategy}</p>
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