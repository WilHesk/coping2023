import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Strategy = ({ heading, subhead, h31, p1, p2, p3, p4, button }) => {
  return (
    <section id='strategy' className='flex items-center justify-center h-auto text-white bg-dkgrey'>
      <div className='max-w-screen-sm px-7'>
        <div className='-mb-20'>
          <Image
            src='/coping-strategy-logo-white-2024.svg'
            alt='/'
            width='280'
            height='280'
          />
        </div>

        <h2 className='pt-10 text-xl font-light'>{heading}</h2>
        <p className='pt-2 text-2xl font-medium text-pink uppercase'>{subhead}</p>

        <div className='font-light'>
          <p className='text-lg font-medium'>{h31}</p>
          
          <div className='py-10'>

          <Image
                    src='/human kind illustration coping strategy.svg'
                    alt="/human kind illustration"
                    width='1000'
                    height='1000'
                    className='object-contain'
                />
          </div>
          
          <p className='pt-4'>{p1}</p>
          <p className='pt-4'>{p2}</p>
          <p className='pt-4'>{p3}</p>
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

export default Strategy