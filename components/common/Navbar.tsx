'use client';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button';

const Navbar = () => {
    const router = useRouter();

    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="fixed top-0 left-0 w-full py-4 flex justify-center items-center z-50 transition-all duration-300 border-b-[1.5px] border-[#E45D25] bg-[#00000080] backdrop-blur-[10px]">

            <div className='flex flex-row justify-between items-center w-10/12 h-full'>
                <Link href={'/'}>
                    <Image src="/logo/digital-protein.svg" alt="digital protein logo" width={200} height={50} className="w-20 h-auto cursor-pointer" />
                </Link>

                <div className="lg:hidden flex items-center text-white">
                    <HamburgerMenuIcon onClick={() => setIsActive(!isActive)} className={isActive ? 'hidden' : 'flex w-5 h-5'} />
                    <Cross1Icon onClick={() => setIsActive(!isActive)} className={isActive ? 'flex w-5 h-5' : 'hidden'} />
                </div>

                <nav className="text-white text-center lg:flex hidden lg:w-auto lg:space-x-8 justify-between items-center w-[55%]">
                    <Link href={'/services'} className="cursor-pointer hover:text-[#E45D25]">Services</Link>
                    <Link href={'/company'} className="cursor-pointer hover:text-[#E45D25]">Company</Link>
                    <Link href={'/insights'} className="cursor-pointer hover:text-[#E45D25]">Insights</Link>
                    <Link href={'/career'} className="cursor-pointer hover:text-[#E45D25]">Career</Link>
                </nav>

                <Link href='/contact' className="hidden lg:block">
                    <Button variant={'default'} className="relative text-base font-normal">
                        Schedule a Call
                    </Button>
                </Link>
            </div>

            <div className={`${isActive ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-[100vh] bg-black text-white transition-all flex-col items-center gap-4`}>

                <div className='md:w-10/12 w-11/12 h-auto flex flex-row justify-between py-4 items-center gap-5 text-base shadow'>
                    <Link href='/' className='cursor-pointer'>
                        <Image src='/logo/digital-protein.svg' alt='logo digital protein' width={200} height={80} className='w-24' />
                    </Link>

                    <Cross1Icon className={`cursor-pointer ${isActive ? 'block' : ''}`} onClick={toggleNavbar} />
                </div>

                <div className='flex flex-col gap-6 items-start w-11/12'>
                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/'); setIsActive(!isActive) }}
                    >
                        Home
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/services'); setIsActive(!isActive) }}
                    >
                        Services
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/company'); setIsActive(!isActive) }}
                    >
                        Company
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/our-team'); setIsActive(!isActive) }}
                    >
                        Our Team
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointerm'}`}
                        onClick={() => { router.push('/contact'); setIsActive(!isActive) }}
                    >
                        Contact Us
                    </div>
                </div>

            </div>
        </header >
    )
}

export default Navbar