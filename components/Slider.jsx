import React from 'react'
import Image from 'next/image';
import { SliderData } from './SliderData'

const Slider = ({slides}) => {
  return (
    <div id='gallery'>
        <h1 className='p-5 text-2xl'>Gallery</h1>
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <Image 
                        src={slide.image}
                        alt='/' 
                        width='1440' 
                        height='800' 
                        objectFit='cover'
                    />
                );
            })}
        </div>
    </div>
  );
};

export default Slider