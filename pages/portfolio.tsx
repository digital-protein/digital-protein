import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { UserContext } from '@/context/userContext';
import projects from '@/components/assets/projects';
import Link from 'next/link';

const Portfolio = () => {
    const { setCurrentTab } = useContext(UserContext);

    useEffect(() => {
        setCurrentTab('portfolio');
    }, [setCurrentTab]);

    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Portfolio | Digital Protein | Our Work & Innovations</title>
                <meta name="description" content="Explore Digital Protein's portfolio showcasing our expertise in AI, web development, cloud computing, and digital transformation. See our innovative projects in action." />
                <meta name="keywords" content="Digital Protein portfolio, web development projects, AI solutions, cloud computing, case studies, technology solutions, digital transformation projects" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Portfolio | Digital Protein | Our Work & Innovations" />
                <meta property="og:description" content="Discover Digital Protein’s cutting-edge projects in AI, web development, and cloud computing. Check out how we are transforming businesses with technology." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/portfolio" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfolio | Digital Protein | Our Work & Innovations" />
                <meta name="twitter:description" content="Explore our portfolio of innovative solutions in AI, cloud computing, and web development. See how Digital Protein is shaping the future." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div
                    className='w-full md:min-h-screen h-auto flex flex-col items-center justify-center gap-48 relative overflow-hidden'
                    style={{
                        backgroundImage: "url('/bg/bg_3.jpg')",
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

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-12 pt-16 pb-24 text-white'>
                        <div className='w-full flex flex-col'>
                            <div className='text-blue-600 font-normal mb-2'>Industries</div>
                            <div className='md:text-3xl font-semibold mb-4'>Industries We Empower with Innovation</div>
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-between gap-12'>

                            {projects?.map((industry: any, index: any) => (
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

            </div>

            <Footer />

        </div>
    )
}

export default Portfolio