'use client'

import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { UserContext } from '@/context/userContext';
import { Button } from '@/components/ui/button';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { faqs } from '@/components/assets/faqs';

const contact = () => {
    const { setCurrentTab } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    const { register, handleSubmit, reset } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        setCurrentTab('contact');
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
                <title>Contact Us | Digital Protein | Let's Connect</title>
                <meta name="description" content="Have questions or need a custom digital solution? Get in touch with Digital Protein today. Let's collaborate on innovative technology solutions for your business." />
                <meta name="keywords" content="Contact Digital Protein, business inquiries, digital solutions, customer support, technology consulting" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Contact Us | Digital Protein | Let's Connect" />
                <meta property="og:description" content="Reach out to Digital Protein for business inquiries, technology solutions, or support. Let's build the future together." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/contact" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Digital Protein | Let's Connect" />
                <meta name="twitter:description" content="Need assistance or have a project idea? Contact Digital Protein for expert digital solutions and collaboration." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div
                className='w-full h-auto flex flex-col gap-6 items-center justify-center pt-32'
                style={{
                    backgroundImage: "url('/bg/bg_3.jpg')",
                    backgroundRepeat: "no-repeat",
                }}
            >

                <div className='flex flex-col items-center justify-center w-full h-auto'>

                    <div className='flex flex-col w-10/12 h-auto justify-center items-center text-center gap-4'>
                        <h1 className='md:text-7xl text-4xl font-bold text-[#fff]'>Let's Talk</h1>
                        <div className=' text-[#ffffff] md:text-xl text-base font-light md:leading-loose leading-6'>Have a question, collaboration idea, or want to be part of Digital Protein? Reach out to us!</div>
                    </div>
                    <form className='w-10/12 flex flex-col gap-6 py-10' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                            <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                <label htmlFor="fName" className='text-[#fff] text-sm'>First Name</label>
                                <input {...register('fName')} type="text" id='fName' name='fName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none text-black bg-white font-medium text-base' required />
                            </div>
                            <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                <label htmlFor="lName" className='text-[#fff] text-sm'>Last Name</label>
                                <input {...register('lName')} type="text" id='lName' name='lName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none text-black bg-white font-medium text-base' required />
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                            <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                <label htmlFor="email" className='text-[#fff] text-sm'>Email</label>
                                <input {...register('email')} type="email" id='email' name='email' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none text-black bg-white font-medium text-base' required />
                            </div>
                            <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                <label htmlFor="phone" className='text-[#fff] text-sm'>Phone Number</label>
                                <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none text-black bg-white font-medium text-base' required />
                            </div>
                        </div>
                        <div className='flex flex-row gap-10'>
                            <div className='w-full flex flex-col items-start justify-center gap-1'>
                                <label htmlFor="textArea" className='text-[#fff] text-sm'>Tell us more about your inquiry</label>
                                <textarea {...register('textArea')} id="textArea" cols={30} rows={10} className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none text-black bg-white font-medium text-base'></textarea>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 w-full h-auto justify-end'>
                            <Button variant={'manual'} type='submit' className='w-40 h-12 rounded flex items-center justify-center px-4 py-2' disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</Button>
                        </div>
                        {submitSuccess && <p className="text-green-600">Form submitted successfully!</p>}
                    </form>

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

export default contact