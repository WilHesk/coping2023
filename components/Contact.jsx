import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({heading, subhead, h31, p1, button, button2 }) => {
  return (
    <div className='flex items-center justify-center h-auto pt-20 pb-20 mb-12 bg-fixed bg-center bg-dkgrey'>
        <div  className='max-w-screen-md '>
            <div className='text-white '>
              <h2 className='pl-4 pr-4 pt-4 pb-2 text-5xl font-normal text-white '>{heading}</h2>
              <p className='pl-4 pr-20 text-xl font-thin text-pink'>{subhead}</p>
              <div className='mt-[2rem]'>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{h31}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{p1}</p>
            </div>

            <div className='pl-4'>
            <Link href='https://www.instagram.com/copinguk/'>
            <a target="_blank">
              <Image 
                objectFit='cover'
                src="/coping-gallery-image5.jpg"
                width={600}
                height={400}
                alt="coping festival image"
              />
            </a>  
          
              </Link>
            </div>

            <div className='pt-10'>
              <Link href='https://www.graystoneactionsports.co.uk/graystonenewsblog/coping-2023'>
              <a target="_blank">
              <button className=' m-4 px-8 py-2 rounded bg-pink text-dkgrey hover:bg-white'>{button}</button>
              </a>
              </Link>
              <Link href='https://www.jumblebee.co.uk/copingfestival2023auction'>
              <a target="_blank">
              <button className='m-4 px-8 py-2 rounded bg-pink text-dkgrey hover:bg-white '>{button2}</button>
              </a>
              </Link>
            </div>
              
            </div>
        </div>    
 
        </div>

  ); 
}

export default Contact