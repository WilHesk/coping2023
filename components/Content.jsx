import React from 'react';
import Link from 'next/link';

const Content = ({heading, subhead, time1, event1, time2, event2, time3, event3, time4, event4, time5, event5, time6, event6,  button, button2 }) => {
  return (
    <div className='flex items-center justify-center h-auto pt-20 pb-20 mb-12 bg-fixed bg-center bg-dkgrey'>
        
            <div className='text-white '>
              <h2 className='pl-4 pr-4 pt-4 pb-2 text-5xl font-normal text-white '>{heading}</h2>
              <p className='pl-4 pr-20 text-xl font-thin text-pink'>{subhead}</p>
              <div className='mt-[2rem]'>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time1}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event1}</p>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time2}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event2}</p>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time3}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event3}</p>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time4}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event4}</p>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time5}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event5}</p>
              <p className='pl-4 py-5 pb-0 pr-20 text-xl '>{time6}</p>
              <p className='pl-4 py-5 pt-0 pr-20 font-thin '>{event6}</p>
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

  ); 
}

export default Content