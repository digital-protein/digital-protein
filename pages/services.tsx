import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { UserContext } from '@/context/userContext';
import { Button } from '@/components/ui/button';
import services from '@/components/assets/services';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { faqs } from '@/components/assets/faqs';

const ServicePage = () => {
    const { setCurrentTab } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setCurrentTab('services');
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

            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div
                    className='w-full md:h-screen h-auto flex flex-col items-center justify-between overflow-hidden relative'
                    style={{
                        backgroundImage: "url('/bg/bg_1.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "100%"
                    }}
                >

                    <Image src={'/bg/header/left-line.svg'} alt='sphere' width={384} height={384} className='md:flex hidden absolute left-0 -top-20 md:w-40 w-12 pt-8 rotate-45' priority={true} />
                    <Image src={'/bg/header/right-line.svg'} alt='sphere' width={384} height={384} className='md:flex hidden absolute right-0 bottom-0 md:w-44 w-12 pt-8 rotate-45' priority={true} />

                    <div className='pt-32 flex flex-col gap-2 items-center justify-center text-center w-11/12 text-white z-20'>
                        <div className='md:text-xl text-base font-normal'>Services We Provide</div>
                        <div className='md:text-7xl text-3xl font-bold md:pb-5 pb-2'>Empower. Transform.  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Succeed</span></div>
                        <div className='md:w-10/12 w-full md:text-xl text-base'>
                            Explore our wide range of services designed to drive innovation, enhance efficiency, and deliver exceptional results. Let us help you achieve your goals with cutting-edge solutions tailored to your needs.
                        </div>
                    </div>

                    <div className="md:w-10/12 w-11/12 md:h-125 h-64 overflow-hidden rounded-t-2xl z-10 shadow group">
                        <Image src={`/bg/bg_5.jpg`} alt='about company' width={400} height={300} className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105" />
                    </div>

                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex flex-col pb-24 text-white'>

                    <div className='w-full md:hidden flex flex-col items-center md:text-left text-center pt-24'>
                        <div className='text-blue-600 font-normal mb-2'>Industries</div>
                        <div className='md:text-3xl text-2xl font-semibold mb-4'>Industries We Empower with Innovation</div>
                    </div>

                    {services?.map((service: any, index: any) => (
                        <div key={index} id={service?.id} className={`w-full h-auto text-white md:pt-24 pt-12 flex ${index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"} gap-16 items-start cursor-pointer`}>
                            <Image src={`/bg/bg_3.jpg`} alt='' width={330} height={330} className='md:w-1/2 w-full md:h-96 h-64 object-cover rounded-md shadow-lg' />
                            <div className='md:w-1/2 w-full flex flex-col md:gap-24 gap-6'>
                                <div className='flex flex-col md:gap-6 gap-3 items-start mt-4'>
                                    <Image src={`/services/icons/${service.icon}`} alt='' width={30} height={30} className='w-12 h-auto' />
                                    <div className="md:text-3xl text-2xl font-semibold">{service.title}</div>
                                    <div className="text-sm font-light h-16">{service.description}</div>
                                </div>
                                <Link href={service.link} className='w-full'>
                                    <Button variant={'manual'} className='cursor-pointer'>Explore More</Button>
                                </Link>
                            </div>
                        </div>
                    ))}

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

export default ServicePage