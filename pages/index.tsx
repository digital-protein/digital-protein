'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import { domains } from '@/components/assets/domain';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Digital Protein | Innovating the Future</title>
                <meta name="description" content="Empowering businesses with cutting-edge digital solutions. From web development to cloud infrastructure, Digital Protein transforms your vision into reality." />
                <meta name="keywords" content="Digital Protein, digital solutions, web development, cloud computing, AI, technology, innovation, business growth" />
                <meta name="author" content="digitalprotein.in" />

                <meta property="og:title" content="Digital Protein | Innovating the Future" />
                <meta property="og:description" content="Unlock the potential of your business with Digital Protein’s next-gen digital services, crafted for growth and efficiency." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Protein | Innovating the Future" />
                <meta name="twitter:description" content="Building smart, scalable, and future-ready digital solutions for businesses worldwide." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='flex flex-col items-center justify-center w-full h-auto'>

                <div className='w-full h-auto flex items-center justify-center mt-32'>

                    <Image src={'/about/left-line.svg'} alt='sphere' width={384} height={384} className='absolute left-0 top-20 md:h-96 h-64 md:w-24 w-12 pt-8' priority={true} />
                    <Image src={'/about/right-line.svg'} alt='sphere' width={384} height={384} className='absolute right-0 top-20 md:h-96 h-64 md:w-24 w-12 pt-8' priority={true} />

                    <div className='flex flex-col gap-4 items-center justify-center text-center w-10/12 text-white'>
                        <div className='md:text-xl text-sm font-normal'>Empowering Innovation, Scaling Success.</div>
                        <div className='md:text-7xl text-xl font-bold'>
                            <div>Fast-Track Your Success with</div>
                            <div className='md:text-7xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Global Tech Innovators.</div>
                        </div>
                        <div className='md:w-2/3 w-full md:text-xl text-sm mb-4'>Leverage cutting-edge technology, AI-driven insights, and top-tier nearshore talent to accelerate growth and drive business success with OceanzCloud.</div>
                        <Button variant={'default'} className="relative px-6 py-5 text-base rounded-md transition-all font-normal">
                            Schedule a Call
                        </Button>

                        <div className='flex flex-row justify-between flex-wrap mt-10'>
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                        </div>

                    </div>

                </div>

                <div className='flex flex-col w-full items-center justify-center py-16'>
                    <div className='md:text-xl text-base font-normal text-white'>Our Partners</div>
                    <div className='w-10/12 flex flex-row flex-wrap md:gap-0 gap-8 md:justify-between justify-center items-center pt-10'>
                        <Image src={'/logo.png'} alt='sphere' width={550} height={550} className='w-[22%] h-auto object-cover p-6 serviceCard' priority={true} />
                        <Image src={'/logo.png'} alt='sphere' width={550} height={550} className='w-[22%] h-auto object-cover p-6 serviceCard' priority={true} />
                        <Image src={'/logo.png'} alt='sphere' width={550} height={550} className='w-[22%] h-auto object-cover p-6 serviceCard' priority={true} />
                        <Image src={'/logo.png'} alt='sphere' width={550} height={550} className='w-[22%] h-auto object-cover p-6 serviceCard' priority={true} />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}
