import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Festivalclicker = ({ festivaltitle, festivalsubtitle, festivalp1, festivalclick }) => {
  return (
    <section id='festival' className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      <div  className='p-5 h-5/6 rounded-3xl flex items-center justify-center w-screen max-w-screen-lg bg-dkgrey bg-opacity-80 backdrop-blur-md flex-col md:flex-row'>
        
        <div className='p-5 min-w-1/2 max-w-1/2'>
          <div className='p-5 rounded-xl flex justify-center flex-col bg-white border-4 hover:border-pink border-dkpink backdrop-blur-md'>
            <Link href='/festival'>
              <a className='px-4'>
              <div className='pt-4 pb-6'>
                <Image
                  src='/Coping-festival-logo-grey-2024.svg'
                  alt='coping festival skateboarder kickflipping stairset at graystone action sports' 
                  width='250' 
                  height='120'
                  className='object-conatin'
                />
              </div> 
                <h1 className='py-1 font-bold text-xl uppercase leading-6'>{festivaltitle}</h1> 
                <h1 className='py-1 font-medium text-l text-dkpink leading-5'>{festivalsubtitle}</h1> 
                <p className='py-1 font-light text-sm leading-6'>{festivalp1}</p>
                <p className='pt-1 pb-4 font-bold text-dkpink'>{festivalclick}</p> 
              </a>
            </Link>            
          </div>
        </div>
      </div>

          
    </section>    
  ); 
}

export default Festivalclicker