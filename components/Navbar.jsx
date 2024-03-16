import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-dkgrey'>
        <div className='max-w-[1240px] m-auto flex justify-between pl-2 pt-1 items-center text-white'>
            <div className='flex items-center'> 
                <div className='py-2 pl-2'>
                <Image
                    src='/icon-white-copinguk.svg'
                    alt='/' 
                    width='40' 
                    height='40' 
                />
                </div>
            </div>

            
            <ul className='hidden text-white sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#festival'>Festival</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#strategy'>Strategy</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block text-white sm:hidden z-10 pr-10'>
                {nav ? (
                    <AiOutlineClose size={30} /> 
                ) : (
                    <AiOutlineMenu size={30} />
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
                        <Link href='/#about'>Festival</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/#gallery'>Strategy</Link>
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