'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import { domains } from '@/components/assets/domain';

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

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center mt-10 mb-20'>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center md:gap-10 gap-6'>
                        <h1 className='md:text-4xl text-xl font-bold text-white'>Revolutionizing Digital Solutions</h1>
                        <p className='text-lg text-[#818181] text-justify'>
                            At Digital Protein, we blend innovation and technology to craft powerful digital experiences.
                            From cutting-edge web solutions to scalable cloud architectures, we help businesses thrive in
                            the digital era. Join us in shaping the future of technology.
                        </p>
                        <button
                            className='px-6 py-1.5 transition-all bg-transparent hover:bg-[#fff] text-[#fff] hover:text-black text-semibold border-2 border-[#fff] rounded-full'
                        >
                            Explore More
                        </button>
                    </div>
                    <div className='w-1/2 h-auto flex items-center justify-center'>
                        <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} priority={true} />
                    </div>
                </div>

                <div className='flex flex-col gap-1 items-center justify-center my-10'>
                    <h2 className='md:text-3xl text-xl font-semibold capitalize'>What we do?</h2>
                    <p className='text-lg text-[#818181]'>We don’t try to do everything—we specialize in a few domains, ensuring expertise and perfection without any mistakes.</p>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex flex-row flex-wrap items-center justify-center gap-8'>

                    {domains.map((item, index) => (
                        <div key={index} className='w-[48%] h-56 border border-[#acacac] flex flex-col items-start justify-between p-6'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='md:text-3xl text-xl font-bold text-white'>{item.title}</h3>
                                <p className='text-lg text-[#818181] font-medium'>
                                    {item.description}
                                </p>
                            </div>
                            <button
                                className='px-6 py-1.5 transition-all bg-transparent hover:bg-[#fff] text-[#fff] hover:text-black text-semibold border-2 border-[#fff] rounded-full'
                            >
                                Explore More
                            </button>
                        </div>
                    ))}

                </div>

            </div>

            <Footer />

        </div>
    );
}
