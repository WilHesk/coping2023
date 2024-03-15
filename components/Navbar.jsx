import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#20232b');
                setTextColor('#ffffff');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div 
        style={{ backgroundColor: `${color}` }} 
        className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
        <div className='max-w-[1240px] m-auto flex justify-between pl-2 pt-1 items-center text-white'>
            <div className='flex items-center'> 
                <div className='pt-4 pl-2'>
                <Image
                    src='/Logo-white-CopingUK.svg'
                    alt='/' 
                    width='80' 
                    height='80' 
                />
                </div>
            </div>

            
            <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 pr-10'>
                {nav ? (
                    <AiOutlineClose size={30} style={{color: `${textColor}`}} /> 
                ) : (
                    <AiOutlineMenu size={30} style={{color: `${textColor}`}} />
                )}
            </div>
            {/* Mobile Menu */}
            <div 
                className={
                    nav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-dkgrey text-center ease-in duration-300 z-9' 
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-'
                }
            >
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar