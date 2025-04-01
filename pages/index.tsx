'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import Link from 'next/link';
import projects from '@/components/assets/projects';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { faqs } from '@/components/assets/faqs';

export default function Home() {
    const { setCurrentTab } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setCurrentTab('home');
    }, [setCurrentTab]);


    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

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

                <div className='w-full h-auto flex items-center justify-center pt-32 pb-24'
                    style={{
                        backgroundImage: "url('/bg/bg_3.jpg')",
                        backgroundRepeat: "no-repeat",
                    }}
                >

                    <Image src={'/about/left-line.svg'} alt='sphere' width={384} height={384} className='md:flex hidden absolute left-0 top-20 md:h-96 h-64 md:w-24 w-12 pt-8' priority={true} />
                    <Image src={'/about/right-line.svg'} alt='sphere' width={384} height={384} className='md:flex hidden absolute right-0 top-20 md:h-96 h-64 md:w-24 w-12 pt-8' priority={true} />

                    <div className='flex flex-col gap-4 items-center justify-center text-center md:w-10/12 w-11/12 text-white'>
                        <div className='md:text-xl text-base font-normal'>Empowering Innovation, Scaling Success.</div>
                        <div className='md:text-7xl text-2xl font-bold'>
                            <div>Fast-Track Your Success with</div>
                            <div className='md:text-7xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Global Tech Innovators.</div>
                        </div>
                        <div className='md:w-2/3 w-full md:text-xl text-base mb-4'>Leverage cutting-edge technology, AI-driven insights, and top-tier nearshore talent to accelerate growth and drive business success with OceanzCloud.</div>
                        <Button variant={'manual'} className="relative px-6 py-5 text-base rounded-md transition-all font-normal">
                            Schedule a Call
                        </Button>

                        <div className='flex flex-row justify-between flex-wrap md:gap-0 gap-6 mt-10'>
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                            <Image src={'/bg/sphere.svg'} alt='sphere' width={550} height={550} className='md:w-[22%] w-full h-80 object-cover border-4 border-[#1a1a1a] rounded-lg' priority={true} />
                        </div>

                    </div>

                </div>

                <div className='w-full h-auto flex flex-col items-center justify-center md:pt-24 pt-0 pb-24 bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-12'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Our Trusted Partners</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Companies We've Collaborated With</div>
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-center'>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                            <div className='md:w-1/4 w-auto h-52 px-10 flex items-center justify-center border border-gray-900'>
                                <Image src={'/bg/sphere.svg'} alt='company icon' width={120} height={120} className='w-44' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-12 pb-24 text-white'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Industries</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Industries We Empower with Innovation</div>
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-between gap-12 pt-4'>

                            {projects?.slice(0, 4)?.map((industry: any, index: any) => (
                                <div key={index} className="md:w-[47%] w-full h-auto text-white flex flex-col gap-4 items-start cursor-pointer">
                                    <Link href={`/industry/${industry.link}`} className="w-full h-80 overflow-hidden rounded-md shadow group">
                                        <Image src={industry.image} alt='' width={330} height={330} className='w-full object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105' />
                                    </Link>
                                    <div className='flex flex-row gap-6 items-center mt-4'>
                                        <Image src={`/projects/${industry.icon}`} alt='' width={30} height={30} className='w-12 h-auto' />
                                        <div className="text-base font-semibold">{industry.title}</div>
                                    </div>
                                    <div className="text-sm font-light h-16">{industry.description}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-16 mb-24 text-white'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Frequently Asked Questions</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Your Guide to Our Services and Solutions</div>
                        </div>

                        <div className="relative flex flex-row flex-wrap items-start justify-between self-center pb-6">
                            {faqs?.map((item: any, index: any) => (
                                <div
                                    className="md:w-[49%] w-full md:text-base text-sm py-5 px-5 my-3 cursor-pointer bg-[#171717] text-white border border-[#2b2b2b] rounded-md faqsCard"
                                    key={index}
                                    onClick={() => toggle(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="md:pr-4 pr-0 font-normal">{item.que}</p>
                                        {selected === index ? (
                                            <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-0' />
                                        ) : (
                                            <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-180' />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            selected === index
                                                ? "overflow-hidden transition-all md:py-4 py-3 max-h-96 ease-out duration-700 font-light"
                                                : "overflow-hidden transition-all max-h-0 duration-300"
                                        }
                                    >
                                        <p>{item.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
}
