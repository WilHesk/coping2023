import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message, button, button2, festival, strategy }) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img '>
        <div className='text-white mx-[10%] max-w-screen-md'>
            <div className='flex justify-center py-10'>
              <Image
                src='/logo-white-copinguk.svg'
                alt='/' 
                width='250' 
                height='250' 
              />
            </div>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <p className='pt-1 pb-6 text-xl font-light '>{message}</p>
            </div>
            <div className='flex justify-center text-center'>
              <div className='flex justify-center flex-col'>
                <Link href='#festival'>
                  <a className='mx-10 px-4 py-2 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>
                    {button}
                  </a>
                </Link>  
                <p className='py-4 font-light uppercase'>{festival}</p> 
              </div>
              <div className='flex justify-center flex-col'>
                <Link href='#strategy'>
                  <a className='mx-10 px-4 py-2 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>
                    {button2}
                  </a>
                </Link> 
                <p className='py-4 font-light uppercase'>{strategy}</p>
              </div>                              
                              
            </div>
        </div>
    </section>
  ); 
}

export default Hero