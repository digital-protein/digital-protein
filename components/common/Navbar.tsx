'use client';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button';
import { UserContext } from '@/context/userContext';

const Navbar = () => {
    const router = useRouter();
    const { currentTab } = useContext(UserContext);

    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <React.Fragment>
            <header className="fixed top-0 left-0 w-full py-4 flex justify-center items-center z-50 transition-all duration-300 border-b-2 border-[#175398] bg-[#00000080] backdrop-blur-[3px]">

                <div className='flex flex-row justify-between items-center w-10/12 h-full z-40'>
                    <Link href={'/'}>
                        <Image src="/logo/digital-protein.svg" alt="digital protein logo" width={200} height={50} className="w-52 h-auto cursor-pointer" />
                    </Link>

                    <div className="md:hidden flex items-center text-white">
                        <HamburgerMenuIcon onClick={() => setIsActive(!isActive)} className={isActive ? 'hidden' : 'flex w-5 h-5'} />
                        <Cross1Icon onClick={() => setIsActive(!isActive)} className={isActive ? 'flex w-5 h-5' : 'hidden'} />
                    </div>

                    <nav className="text-white text-center lg:flex hidden lg:w-auto lg:space-x-8 justify-between items-center w-[55%]">
                        <Link href={'/services'} className={`${currentTab === 'services' && 'text-[#175398]'} cursor-pointer hover:text-[#175398]`}>Services</Link>
                        <Link href={'/company'} className={`${currentTab === 'company' && 'text-[#175398]'} cursor-pointer hover:text-[#175398]`}>Company</Link>
                        <Link href={'/portfolio'} className={`${currentTab === 'portfolio' && 'text-[#175398]'} cursor-pointer hover:text-[#175398]`}>Portfolio</Link>
                        <Link href={'/career'} className={`${currentTab === 'career' && 'text-[#175398]'} cursor-pointer hover:text-[#175398]`}>Career</Link>
                    </nav>

                    <Link href='/contact' className="hidden lg:block">
                        <Button variant={currentTab === 'contact' ? 'manual' : 'default'} className="relative text-base font-normal">
                            Schedule a Call
                        </Button>
                    </Link>
                </div>

            </header >

            <div className={`${isActive ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-[100vh] bg-black text-white transition-all flex-col items-center gap-4 py-20 z-40`}>

                <div className='flex flex-col gap-3 items-start w-10/12'>
                    <Button
                        variant={currentTab === 'home' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/'); setIsActive(!isActive) }}
                    >
                        Home
                    </Button>

                    <Button
                        variant={currentTab === 'services' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/services'); setIsActive(!isActive) }}
                    >
                        Services
                    </Button>

                    <Button
                        variant={currentTab === 'portfolio' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/portfolio'); setIsActive(!isActive) }}
                    >
                        Portfolio
                    </Button>

                    <Button
                        variant={currentTab === 'company' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/company'); setIsActive(!isActive) }}
                    >
                        Company
                    </Button>

                    <Button
                        variant={currentTab === 'career' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/career'); setIsActive(!isActive) }}
                    >
                        Career
                    </Button>

                    <Button
                        variant={currentTab === 'contact' ? 'manual' : 'outline'}
                        className='w-full cursor-pointer'
                        onClick={() => { router.push('/contact'); setIsActive(!isActive) }}
                    >
                        Contact Us
                    </Button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Navbar