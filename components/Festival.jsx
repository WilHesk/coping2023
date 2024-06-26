import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Festival = ({ heading, subhead, h31, p1, p2, p3, p4, button }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-auto bg-dkgrey'>
      <div className='max-w-screen-sm px-7'>        
          
        <Image
              src='/Battle of the stone graphic 2024.svg'
              alt="/coping festival battle of the stone graphic five thousand pounds prize"
              width='1000'
              height='1000'
            />
          <p className='pt-2 text-2xl font-medium text-pink uppercase'>{subhead}</p>

        <div className='font-light text-white'>
          
          <p className='text-lg font-medium'>{h31}</p>
          <Image
              src='/Battle of the stone team slamma graphic 2024.svg'
              alt="/coping festival battle of the stone team graphic 2000 pounds prize"
              width='1000'
              height='1000'
            />
          <p className='pt-4'>{p1}</p>
          
          <div className='py-10'>
            <Image
              src='/coping-gallery-image1.jpg'
              alt="/coping festival pottery workshop with Partington's pots"
              width='2000'
              height='1333'
            />
          </div>
          <p className='pt-4'>{p2}</p>
          <div className='py-10'>
            <Image
              src='/coping-gallery-image5.jpg'
              alt='/coping festival female winners celebrate'
              width='2000'
              height='1333'
            />
          </div>
          <p className='pt-4'>{p3}</p>
          <div className='py-10'>
            <Image
              src='/coping-gallery-image4.jpg'
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