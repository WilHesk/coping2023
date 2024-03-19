import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Strategy = ({ heading, subhead, h31, p1, p2, p3, p4, button }) => {
  return (
    <section id='strategy' className='flex items-center justify-center h-auto bg-fixed bg-center bg-white text-dkgrey'>
        <div  className='max-w-screen-sm px-7'>
          <div className='-mb-20'>
            <Image
              src='/coping-strategy-logo-grey-2024.svg'
              alt='/' 
              width='300' 
              height='300' 
            />
          </div>
            
              <h2 className='pt-10 text-xl font-normal'>{heading}</h2>
              <p className='pt-2 text-2xl font-normal text-pink uppercase'>{subhead}</p>
            
            <div className='pt-2 font-light'>
              <p className='text-xl font-normal'>{h31}</p>
              <p className='pt-4'>{p1}</p>
              <p className='pt-4'>{p2}</p>
              <p className='pt-4'>{p3}</p>
              <p className='pt-4 pb-8'>{p4}</p>
            </div>

            <div className='py-6 flex  flex-col items-center'>
              <Link href='/contact'>
                <a className='px-6 py-4 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>{button}</a>
              </Link>
            </div>     

            <div className='bg-dkgrey flex p-0.5 my-10'></div>       
              
            </div>
        </section>    
  ); 
}

export default Strategy