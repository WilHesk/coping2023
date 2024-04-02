import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Festival = ({ heading, subhead, h31, p1, p2, p3, p4, button }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-auto bg-dkgrey'>
      <div className='max-w-screen-sm px-7'>
        <div className='-mb-20'>
          <Image
            src='/coping-festival-logo-white-2024.svg'
            alt='coping festival logo'
            width='320'
            height='320'
          />
        </div>
        <h2 className='pt-10 text-xl text-white font-light'>{heading}</h2>
        <p className='pt-2 text-2xl font-medium text-pink uppercase'>{subhead}</p>

        <div className='font-light text-white'>
          <p className='text-lg font-medium'>{h31}</p>
          <p className='pt-4'>{p1}</p>
          <p className='pt-4'>{p2}</p>
          <p className='pt-4'>{p3}</p>
          <div className='py-10'>
            <Image
              src='/coping-gallery-image5.jpg'
              alt='/'
              width='2000'
              height='1333'
            />
          </div>
          <p className='pt-4 pb-8'>{p4}</p>
        </div>

        <div className='py-6 flex  flex-col items-center'>
          <Link href='/contact'>
            <a className='px-6 py-4 rounded bg-pink text-dkgrey hover:bg-white hover:text-dkpink'>{button}</a>
          </Link>
        </div>

        <div className='bg-dkgrey flex p-0.5 my-10'></div>

      </div>
    </section>
  );
}

export default Festival