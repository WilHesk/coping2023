import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message, button, }) => {
  return (
    <section className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img'>
        <div className='p-5 text-white mt-[8rem] mr-[8%] ml-[8%]'>
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