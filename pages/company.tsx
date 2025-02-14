import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const company = () => {
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

            </div>

            <Footer />

        </div>
    )
}

export default company