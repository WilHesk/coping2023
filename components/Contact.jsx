import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({heading, subhead, email, insta, p }) => {
  return (
    <section className='bg-dkgrey flex flex-col gap-8 sm:flex-row sm:items-end '>
        <div  className='mx-auto max-w-screen-sm px-7 pt-40'>
            <div className='text-white pt-4'>
              <h2 className='pt-4 pb-1 text-5xl font-normal text-white '>{heading}</h2>
              <p className='text-xl font-light text-pink'>{subhead}</p>
              <p className='text-light'>{p}</p>
            </div>
            <div className='text-white pt-4 pb-8'>
              <p className='text-xl font-light'>{email}</p>
              <p className='text-xl font-light'>{insta}</p>
            </div>

            

            
              
            </div>
        </section>    
  ); 
}

export default Contact