'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { teams } from '@/components/assets/teams';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Member404 from '@/components/common/Member/Member404';

const SpeakerDetail = () => {
    const router = useRouter();
    const { member } = router.query;

    const memberData = teams.find((person) => person.link === member);

    if (!memberData) {
        return <Member404 />;
    }

    return (
        <div className='bg-black'>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>{memberData.name} | Team Member | Digital Protein</title>
                <meta name="description" content={`Get to know ${memberData.name}, a key member of Digital Protein. Our team is dedicated to driving innovation in AI, web development, and cloud computing.`} />
                <meta name="keywords" content={`${memberData.name}, Digital Protein team, technology experts, AI engineers, software developers, cloud computing specialists, innovation leaders`} />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content={`${memberData.name} | Team Member | Digital Protein`} />
                <meta property="og:description" content={`Meet ${memberData.name} from Digital Protein. Discover how our experts are transforming the digital world with cutting-edge technology and innovative solutions.`} />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content={`https://www.digitalprotein.in/our-team/${member}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${memberData.name} | Team Member | Digital Protein`} />
                <meta name="twitter:description" content={`Learn more about ${memberData.name}, a key innovator at Digital Protein. Explore how our team is shaping the future of digital solutions.`} />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center bg-black'>

                <div className='w-10/12 h-full flex flex-col items-center gap-20 my-20'>

                    <div className='flex flex-row gap-20 w-full flex-wrap items-center justify-around'>
                        <div className='w-full h-auto rounded-3xl flex md:flex-row flex-col gap-10'>

                            <div className='flex flex-col gap-4 md:min-w-96 min-w-auto items-center justify-center h-auto'>
                                <Image src={`${memberData.image}`} alt={memberData.name} width={300} height={300} className='md:w-96 w-80 md:h-96 h-80 object-cover rounded-full cursor-pointer' />
                                <div className='flex flex-col text-center'>
                                    <span className='text-xl font-bold text-white cursor-pointer'>{memberData.name}</span>
                                    <span className='text-lg text-[#FF2B06] cursor-pointer'>{memberData.position}</span>
                                </div>
                            </div>

                            <div className='w-auto h-auto flex flex-col items-start justify-start text-center capitalize'>

                                <div className='flex w-full flex-row items-end h-auto gap-2'>
                                    <Image src='/about/upper-quotation.svg' alt='' width={96} height={96} className='w-16 h-16 object-contain' />
                                    <hr className='h-[1px] w-full bg-white mb-6' />
                                </div>
                                <div className='mt-6 text-left italic font-bold'>
                                    {memberData.about.map((para, index) => (
                                        <span key={index}>{para} <br /><br /></span>
                                    ))}
                                </div>
                                <div className='flex w-full flex-row items-end h-auto gap-6'>
                                    <hr className='h-[1px] w-full bg-white mb-10' />
                                    <Image src='/about/down-quotation.svg' alt='' width={96} height={96} className='w-16 h-16 object-contain' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SpeakerDetail