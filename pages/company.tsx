import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { UserContext } from '@/context/userContext';

const company = () => {
    const { setCurrentTab } = useContext(UserContext);

    useEffect(() => {
        setCurrentTab('company');
    }, [setCurrentTab]);

    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Revolutionizing Digital Solutions | Digital Protein</title>
                <meta name="description" content="At Digital Protein, we craft innovative web, AI, and cloud solutions to empower businesses in the digital world. Discover our cutting-edge technology today!" />
                <meta name="keywords" content="Digital Protein, technology solutions, web development, cloud computing, AI, business innovation, digital transformation" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Revolutionizing Digital Solutions | Digital Protein" />
                <meta property="og:description" content="Explore how Digital Protein is transforming businesses with advanced technology solutions in web, AI, and cloud computing." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/company" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Revolutionizing Digital Solutions | Digital Protein" />
                <meta name="twitter:description" content="Join Digital Protein in shaping the future with cutting-edge web, AI, and cloud technology." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center mb-20'>

                <div
                    className='w-full md:min-h-screen h-auto flex flex-col items-center justify-center gap-48 relative overflow-hidden'
                    style={{
                        backgroundImage: "url('/bg/texture.jpg')",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Image src={'/bg/sphere.svg'} alt='sphere' width={384} height={384} className='absolute -left-10 top-40 object-cover h-64 w-72 border-4 border-white rounded-md' priority={true} />
                    <Image src={'/bg/sphere.svg'} alt='sphere' width={384} height={384} className='absolute -right-10 top-40 object-cover h-64 w-72 border-4 border-white rounded-md' priority={true} />

                    <div className='flex flex-col gap-4 items-center justify-center text-center w-11/12 mt-32 text-white'>
                        <div className='md:text-xl text-base font-normal'>Our Services</div>
                        <div className='md:text-6xl text-3xl font-bold'>
                            Empower. Transform. <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Succeed</span>
                        </div>
                        <div className='md:w-2/3 w-full md:text-lg text-base'>
                            Explore our wide range of services designed to drive innovation, enhance efficiency, and deliver exceptional results. Let us help you achieve your goals with cutting-edge solutions tailored to your needs.
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Mobile App Developer</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>AI/ML Engineer</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Cloud Engineer</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>DevOps Engineer</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Database Administrator</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>QA Engineer / Tester</div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default company