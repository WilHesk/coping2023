import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Strategyclicker = ({ strategytitle, strategyp1, strategyclick }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      <div  className='p-5 h-3/4 rounded-3xl flex items-center justify-center w-screen max-w-screen-lg bg-dkgrey bg-opacity-80 backdrop-blur-md flex-col sm:flex-row'>
        <div className='p-5'>
          <Image
            src='/coping-festival-skateboarding-stair-set.jpg'
            alt='coping festival skateboarder kickflipping stairset at graystone action sports' 
            width='1000' 
            height='1000'
            className='rounded-xl '
          />
        </div> 
        <div className='p-5 min-w-1/2 max-w-1/2'>
          <div className='p-5 rounded-xl flex justify-center flex-col bg-white hover:bg-pink hover:text-dkgrey border-2 border-pink backdrop-blur-md'>
            <Link href='/festival'>
              <a className='px-4'>
                <h1 className='pt-4 font-bold text-xl uppercase leading-6'>{strategytitle}</h1> 
                <p className='py-1 font-light text-sm'>{strategyp1}</p>
                <p className='pb-4 font-bold'>{strategyclick}</p> 
              </a>
            </Link>            
          </div>
        </div>
      </div>

          
    </section>      
  ); 
}

export default Strategyclicker