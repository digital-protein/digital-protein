'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';

const HomePage = () => {
    return (
        <div className='bg-black min-h-screen'>

            <Head>
                <title>Digital Protein | 2024</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col md:gap-0 gap-8 items-center md:pt-16 pt-8 pb-10 bg-black'>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col md:gap-0 gap-8 items-center py-20 mb-10 bg-black'>
                </div>
            </div>

        </div>
    )
}

export default HomePage