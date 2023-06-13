import React from 'react';
import Link from 'next/link';

const Content = ({heading, subhead, para1, para2, button }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-dkgrey'>
        
            <div>
              <h2 className='text-5xl font-normal text-white '>{heading}</h2>
              <p className='py-5 text-xl text-white'>{subhead}</p>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
              <a target="_blank">
              <button className='px-8 py-2 border bg-pink'>{button}</button>
              </a>
              </Link>
            </div>
            <div className='mt-[2rem]'>
              <h2 className='text-5xl font-normal '>{para1}</h2>
              <p className='py-5 text-xl '>{para2}</p>
            </div>
 
        </div>

  ); 
}

export default Content