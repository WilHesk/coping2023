import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({heading, subhead, email, insta, p }) => {
  return (
    <section className='bg-dkgrey flex flex-col'>
        <div  className='mx-auto max-w-screen-sm px-7 pt-40'>
            <div className='text-white pt-4'>
              <h2 className='pt-4 pb-1 text-5xl font-normal text-white '>{heading}</h2>
              <p className='text-xl font-light text-pink'>{subhead}</p>
              <p className='text-light'>{p}</p>
            </div>
            <div className='text-white pt-4 pb-8'>
              <div className='flex flex-col items-center py-4 sm:flex-row'>
                <Image
                    src='/icon-email.svg'
                    alt='email icon' 
                    width='50' 
                    height='50' 
                  />
                  <p className='px-4 text-xl font-light'>{email}</p>
                </div>
                <div className='flex flex-col items-center py-4 sm:flex-row'>
                <Image
                    src='/icon-insta.svg'
                    alt='email icon' 
                    width='50' 
                    height='50' 
                  />
                  <p className='px-4 text-xl font-light'>{insta}</p>
                </div>
            </div>

            

            
              
            </div>
        </section>    
  ); 
}

export default Contact