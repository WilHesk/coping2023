import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Strategyclicker = ({ strategytitle, strategy, strategyclick }) => {
  return (
    <section id='strategy' className='flex items-center justify-center h-auto bg-fixed bg-center bg-white text-dkgrey'>

<div className='flex flex-row justify-center text-white leading-tight mx-[8%] w-auto max-w-screen-sm'>
        <div className='flex flex-col items-center p-2 sm:flex-row'>
          
   
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

    </section>    
  ); 
}

export default Strategyclicker