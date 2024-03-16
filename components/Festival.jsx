import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Festival = ({ heading, subhead, h31, p1, p2, p3, p4, button }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-auto bg-fixed bg-center bg-white'>
        <div  className='max-w-screen-sm px-7'>
            
              <Image
                src='/coping-festival-logo-grey-2024.svg'
                alt='/' 
                width='400' 
                height='400' 
              />
                       
              <h2 className='pb-2 text-5xl font-normal'>{heading}</h2>
              <p className='text-xl font-light text-pink'>{subhead}</p>
            
            <div className='pt-3'>
              <p className='text-xl '>{h31}</p>
              <p className='font-thin pt-4'>{p1}</p>
              <p className='font-thin pt-4'>{p2}</p>
              <p className='font-thin pt-4'>{p3}</p>
              <p className='font-thin pt-4 pb-8'>{p4}</p>
            </div>

            <div className='pt-10 flex  flex-col items-center'>
              <Link href='/contact'>
                <a className='m-1 px-4 py-2 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>{button}</a>
              </Link>
            </div>            
              
            </div>
        </section>    
  ); 
}

export default Festival