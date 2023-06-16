import React from 'react';
import Link from 'next/link';

const Hero = ({heading, message, button, button2, heading2, message2 }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img'>
        
        <div className='p-5 text-white mt-[8rem] mr-[10%] ml-[10%]'>
            <div>
              <h2 className='text-5xl font-normal '>{heading}</h2>
              <p className='pt-1 pb-12 text-xl font-thin '>{message}</p>
            </div>
            <div>
              <Link href='https://www.graystoneactionsports.co.uk/graystonenewsblog/coping-2023'>
              <a target="_blank">
              <button className='mt-5 rounded px-8 py-2 mr-10  bg-pink text-dkgrey hover:bg-white'>{button}</button>
              </a>
              </Link>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
              <a target="_blank">
              <button className='mt-5 rounded px-8 py-2 bg-pink text-dkgrey hover:bg-white'>{button2}</button>
              </a>
              </Link>
            </div>
 
        </div>
    </div>
  ); 
}

export default Hero