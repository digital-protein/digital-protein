import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { UserContext } from '@/context/userContext';
import projects from '@/components/assets/projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { faqs } from '@/components/assets/faqs';
import { CaretUpIcon } from '@radix-ui/react-icons';

const Portfolio = () => {
    const { setCurrentTab } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setCurrentTab('portfolio');
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
                    className='w-full md:min-h-screen h-auto flex flex-col items-center justify-center md:gap-48 gap-24 relative overflow-hidden'
                    style={{
                        backgroundImage: "url('/bg/bg_2.jpg')",
                        backgroundRepeat: "no-repeat",
                    }}
                >

                    <div className='flex flex-col gap-4 items-center justify-center text-center w-11/12 mt-32 text-white'>
                        <div className='md:text-xl text-base font-normal'>Case Studies</div>
                        <div className='md:text-7xl text-3xl font-bold'>
                            Empower. Transform. <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Succeed</span>
                        </div>
                        <div className='md:w-2/3 w-full md:text-lg text-base'>
                            Explore our portfolio of cutting-edge digital solutions crafted to drive success. From dynamic websites to powerful applications, our work showcases innovation, creativity, and technical expertise. Let our projects speak for themselves.
                        </div>
                    </div>

                    <div className='md:w-10/12 w-11/12 flex flex-col items-start justify-start gap-4'>
                        <div className='flex flex-row gap-6'>
                            <div className='cursor-pointer text-2xl font-medium text-white border-b-2 border-b-white'>Industries</div>
                            <div className='cursor-pointer text-2xl font-medium text-white border-b-2 border-b-white'>Services</div>
                        </div>
                        <div className='w-full flex flex-row flex-wrap items-center justify-start gap-4 md:pb-0 pb-12'>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>Mobile App Developer</div>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>AI/ML Engineer</div>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>Cloud Engineer</div>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>DevOps Engineer</div>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>Database Administrator</div>
                            <div className='py-2 px-5 cursor-pointer serviceCard'>QA Engineer / Tester</div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-20 pt-16 pb-24 text-white'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Industries</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Industries We Empower with Innovation</div>
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

                <div className='w-full h-auto flex flex-col items-center justify-center py-24 bg-white text-black'>
                    <div className='w-full h-auto flex flex-col items-center justify-center gap-24'>

                        <div
                            className='md:w-10/12 w-11/12 flex flex-col p-8 items-center justify-center text-center rounded-2xl relative overflow-hidden customShadow'
                            style={{
                                backgroundImage: "url('/services/banner-light.svg')",
                                backgroundRepeat: "no-repeat",
                            }}
                        >

                            <div className='text-blue-600 font-normal mb-2'>Connect</div>
                            <div className='md:text-3xl text-xl font-semibold md:mb-4 mb-0'>Unlock your business's true potential with top-tier digital solutions.</div>
                            <div className='w-auto h-auto'>
                                <Button variant={'manual'} className='mt-8'>Connect with our Experts</Button>
                            </div>
                        </div>

                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-16 text-black'>
                            <div className='w-full flex flex-col items-center md:text-left text-center'>
                                <div className='text-blue-600 font-normal mb-2'>Frequently Asked Questions</div>
                                <div className='md:text-3xl text-2xl font-semibold mb-4'>Your Guide to Our Services and Solutions</div>
                            </div>

                            <div className="relative flex flex-row flex-wrap items-start justify-between self-center">
                                {faqs?.map((item: any, index: any) => (
                                    <div
                                        className="md:w-[49%] w-full md:text-base text-sm py-5 px-5 my-3 cursor-pointer bg-[#fff] text-black border border-[#2b2b2b] rounded-md faqsCard"
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

            </div>

            <Footer />

        </div>
    )
}

export default Portfolio