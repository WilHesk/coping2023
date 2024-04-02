import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Strategyclicker = ({ strategytitle, strategysubtitle, strategyp1, strategyclick }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='h-5/6 rounded-3xl flex items-center justify-center w-screen max-w-screen-lg flex-col md:flex-row'>
          
          <div className='rounded-xl flex justify-center flex-col bg-white border-4 hover:border-pink border-dkpink backdrop-blur-md sm:p-10'>
            <Link href='/festival'>
              <a className='px-4'>
              <div className='pt-10 pb-6'>
                  <Image
                    src='/Coping-strategy-logo-grey-2024.svg'
                    alt='coping festival skateboarder kickflipping stairset at graystone action sports' 
                    width='200' 
                    height='100'
                    className='object-conatin'
                  />
                </div> 
                <h1 className='py-1 font-bold text-xl uppercase leading-6'>{strategytitle}</h1> 
                <h1 className='py-1 font-medium text-l text-dkpink leading-5'>{strategysubtitle}</h1> 
                <p className='py-1 font-light text-md leading-6'>{strategyp1}</p>
                <p className='pt-1 pb-4 font-bold text-dkpink'>{strategyclick}</p> 
              </a>
            </Link>            
          </div>
        </div>         
    </section>      
  ); 
}

export default Strategyclicker