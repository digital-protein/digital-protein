import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { teams } from '@/components/assets/teams';

const ourteam = () => {
    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Meet Our Team | Digital Protein | Innovating Together</title>
                <meta name="description" content="Get to know the talented minds behind Digital Protein. Our team of experts drives innovation in technology, AI, web development, and cloud computing." />
                <meta name="keywords" content="Digital Protein team, technology experts, AI engineers, software developers, cloud computing specialists, innovation leaders" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Meet Our Team | Digital Protein | Innovating Together" />
                <meta property="og:description" content="Meet the brilliant minds behind Digital Protein. Our expert team is dedicated to building next-gen technology solutions." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/team" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet Our Team | Digital Protein | Innovating Together" />
                <meta name="twitter:description" content="Discover the people who make Digital Protein a powerhouse of innovation in technology, AI, and cloud computing." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center mt-10 mb-20'>

                <h1 className='md:text-5xl text-base font-bold text-white my-6 text-center'>Meet Our Team</h1>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>

                    <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between'>

                        {teams.map((item, index) => (
                            <div key={index} className='w-96 flex flex-col gap-4'>
                                <Image src={item.image} alt={item.name} width={300} height={300} className='w-96 h-96 cursor-pointer' />
                                <div className='flex flex-col items-center justify-center text-center capitalize'>
                                    <Link href={`/our-team/${item.link}`}>
                                        <span className='text-xl font-bold text-white transition-all hover:underline cursor-pointer'>{item.name}</span>
                                    </Link>
                                    <span className='text-lg text-[#FF2B06] cursor-pointer'>{item.position}</span>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default ourteam