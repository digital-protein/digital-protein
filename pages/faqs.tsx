import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { UserContext } from '@/context/userContext';
import { faqs } from '@/components/assets/faqs';
import { CaretUpIcon } from '@radix-ui/react-icons';

const Faqs = () => {
    const { setCurrentTab } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setCurrentTab('faqs');
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
                <title>FAQs | Digital Protein | Your Questions, Answered</title>
                <meta name="description" content="Find answers to common questions about Digital Protein's services, digital solutions, and support. Explore our FAQs to get the information you need." />
                <meta name="keywords" content="Digital Protein FAQs, support, common questions, technology solutions, customer assistance" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="FAQs | Digital Protein | Your Questions, Answered" />
                <meta property="og:description" content="Looking for answers? Browse our FAQs to learn more about Digital Protein's services, support, and technology solutions." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/faqs" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FAQs | Digital Protein | Your Questions, Answered" />
                <meta name="twitter:description" content="Got questions? Our FAQs cover everything you need to know about Digital Protein's services and support." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div
                    className='w-full md:min-h-screen h-auto flex flex-col items-center justify-center gap-48 relative overflow-hidden'
                    style={{
                        backgroundImage: "url('/bg/bg_4.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "100%"
                    }}
                >

                    <div className='flex flex-col gap-4 items-center justify-center text-center w-11/12 mt-32 text-white'>
                        <div className='md:text-xl text-base font-normal'>Frequently Asked Questions</div>
                        <div className='md:text-7xl text-3xl font-bold'>
                            Discover. Learn. <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#175398] to-[#154e8f]'>Understand</span>
                        </div>
                        <div className='md:w-2/3 w-full md:text-lg text-base'>
                            Have questions about Digital Protein? Find answers to common inquiries about our services, support, and digital solutions. Explore our FAQs to get the information you need.
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>General Questions</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Services & Solutions</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Pricing & Plans</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Technical Support</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Careers & Hiring</div>
                        <div className='py-2 px-5 cursor-pointer serviceCard'>Partnerships</div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-16 py-24 text-white'>
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
    )
}

export default Faqs