import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message, button, button2, heading2, message2 }) => {
  return (
    <div className='flex items-center justify-center h-auto mb-1 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dkgrey/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[15rem] mr-[20%] ml-[20%]'>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <p className='py-5 text-xl '>{message}</p>
            </div>
            <div>
              <Link href='https://www.graystoneactionsports.co.uk/graystonenewsblog/coping-2023'>
              <a target="_blank">
              <button className='mt-5 rounded px-8 py-2 mr-10  bg-pink'>{button}</button>
              </a>
              </Link>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
              <a target="_blank">
              <button className='mt-5 rounded px-8 py-2 bg-pink'>{button2}</button>
              </a>
              </Link>
            </div>
            <div className='mt-[2rem]'>
              <h2 className='text-5xl font-normal '>{heading2}</h2>
              <p className='py-5 text-xl '>{message2}</p>
            </div>
 
        </div>
    </div>
  ); 
}

export default Hero