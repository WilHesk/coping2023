import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Auction = ({ heading, subhead, h31, p1, button }) => {
  return (
    <section id='auction' className='flex items-center justify-center h-auto pt-20 pb-20 mb-12 bg-fixed bg-center bg-dkgrey'>
        <div  className='max-w-screen-sm px-7'>
            <div className='text-white pt-4'>
              <h2 className='pt-4 pb-1 text-5xl font-normal text-white '>{heading}</h2>
              <p className='text-xl font-thin text-pink'>{subhead}</p>
            </div>
            <div className='text-white pt-4 pb-8'>
              <p className='text-xl '>{h31}</p>
              <p className='font-thin '>{p1}</p>
            </div>

            <div>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
                <a target="_blank">
                  <Image 
                    objectFit='cover'
                    src="/art-auction-1.jpg"
                    width={600}
                    height={400}
                    alt="art auction boards"
                  />
                </a>  
              </Link>
            </div>

            <div className='pt-10 flex  flex-col items-center '>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
              <a target="_blank">
              <button className='m-1 px-4 py-2 rounded bg-pink text-white hover:bg-white hover:text-dkgrey'>{button}</button>
              </a>
              </Link>
            </div>
              
            </div>
        </section>    
  ); 
}

export default Auction