import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { teams } from '@/components/assets/teams';
import { UserContext } from '@/context/userContext';

const OurTeam = () => {
    const { setCurrentTab } = useContext(UserContext);

    useEffect(() => {
        setCurrentTab('teams');
    }, [setCurrentTab]);

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

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center mb-20'>

                <div className='flex flex-col items-center justify-center w-full h-auto'>

                    <div className='flex flex-col w-10/12 h-auto justify-center items-center text-center gap-4 my-20'>
                        <h1 className='md:text-6xl text-4xl font-extrabold text-[#818181]'>Meet Our Team</h1>
                        <div className=' text-[#ffffff] md:text-xl text-base font-light md:leading-loose leading-6'>Have a question, collaboration idea, or want to be part of Digital Protein? Reach out to us!</div>
                    </div>

                    <div className='w-10/12 h-auto flex flex-row flex-wrap items-center justify-between'>

                        {teams.map((item, index) => (
                            <div key={index} className='w-96 flex flex-col gap-4'>
                                <Image src={item.image} alt={item.name} width={300} height={300} className='w-96 h-96 cursor-pointer' />
                                <div className='flex flex-col items-center justify-center text-center capitalize'>
                                    <Link href={`/our-team/${item.link}`}>
                                        <span className='text-xl font-bold text-white transition-all hover:underline cursor-pointer'>{item.name}</span>
                                    </Link>
                                    <span className='text-lg text-[#818181] cursor-pointer'>{item.position}</span>
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

export default OurTeam