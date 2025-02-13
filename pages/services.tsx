import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const services = () => {
    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Our Services | Digital Protein | Innovating the Future</title>
                <meta name="description" content="Discover cutting-edge digital solutions from Digital Protein. We specialize in web development, AI, cloud computing, and innovative business technology." />
                <meta name="keywords" content="Digital Protein, digital transformation, web development, cloud computing, AI solutions, technology consulting, business innovation" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Our Services | Digital Protein | Innovating the Future" />
                <meta property="og:description" content="Explore Digital Protein’s cutting-edge services in web development, AI, cloud computing, and business technology solutions." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/services" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | Digital Protein | Innovating the Future" />
                <meta name="twitter:description" content="We build smart, scalable, and future-ready digital solutions tailored to businesses worldwide. Learn more about Digital Protein's expertise." />
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

export default services