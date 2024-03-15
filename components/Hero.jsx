import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message, button, }) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img'>
        <div className='text-white mx-[5%]'>
            <div className='flex justify-center p-10'>
              <Image
                src='/logo-white-copinguk.svg'
                alt='/' 
                width='300' 
                height='300' 
              />
            </div>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <p className='pt-1 pb-6 text-xl font-thin '>{message}</p>
            </div>
            <div>
              <Link href='/contact'>
                <a className='m-1 px-4 py-2 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>
                  {button}
                </a>
              </Link>
            </div>
        </div>
    </section>
  ); 
}

export default Hero