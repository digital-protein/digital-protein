import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    // <div className='w-full h-auto py-10 flex items-center justify-center bg-[#101010]'>
    //   <div className='md:w-10/12 w-11/12 h-auto flex flex-row justify-between items-center relative'>

    //     <Link href='/' className='cursor-pointer'>
    //       <Image src='/logo/digital-protein.svg' alt='logo digital protein' width={200} height={80} className='md:w-28 w-20' />
    //     </Link>

    //   </div>
    // </div>
    <div className='w-full flex flex-col items-center justify-center bg-[#171717] border-t border-t-[#2b2b2b]'>

      <div className="md:w-10/12 w-11/12 h-auto text-[#fff] pt-16 pb-8">

        <div className='flex flex-col py-4'>

          <div className='flex lg:flex-row flex-col items-start justify-between flex-wrap md:py-0 py-6 md:gap-4 gap-8 mb-8'>

            <div className='min-w-58 flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Our Expertise</p>
              <Link href='/' className='font-normal w-52'>Mobile App Development</Link>
              <Link href='/' className='font-normal w-52'>AI-ML Development</Link>
              <Link href='/' className='font-normal w-52'>AR VR Development</Link>
              <Link href='/' className='font-normal w-52'>Natural Language Processing</Link>
              <Link href='/' className='font-normal w-52'>Web Development</Link>
              <Link href='/' className='font-normal w-52'>Blockchain & Web 3.0</Link>
              <Link href='/' className='font-normal w-52'>SaaS Product Engineering</Link>
              <Link href='/' className='font-normal w-52'>eCommerce Development</Link>
              <Link href='/' className='font-normal w-52'>...more</Link>
            </div>

            <div className='min-w-58 flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Portfolio</p>
              <Link href='/' className='font-normal w-52'>E-commerce Transformation</Link>
              <Link href='/' className='font-normal w-52'>AI-Powered Analytics</Link>
              <Link href='/' className='font-normal w-52'>Cloud Migration Success</Link>
              <Link href='/' className='font-normal w-52'>Fintech App Scaling</Link>
              <Link href='/' className='font-normal w-52'>Healthcare Tech Innovation</Link>
              <Link href='/' className='font-normal w-52'>Retail Digital Growth</Link>
              <Link href='/' className='font-normal w-52'>Cybersecurity Reinforcement</Link>
              <Link href='/' className='font-normal w-52'>...more</Link>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
              <a href='' className='mb-2 text-[#fff] text-base font-semibold'>Industries</a>
              <div className='flex flex-row gap-20'>
                <div className='flex flex-col gap-2 items-start justify-center'>
                  <a href='/' className='font-normal w-52'>Security</a>
                  <a href='/' className='font-normal w-52'>Transportation</a>
                  <a href='/' className='font-normal w-52'>Telecommunication</a>
                  <a href='/' className='font-normal w-52'>Healthcare</a>
                  <a href='/' className='font-normal w-52'>Education</a>
                  <a href='/' className='font-normal w-52'>EGrocery Store</a>
                  <a href='/' className='font-normal w-52'>Fitness</a>
                  <a href='/' className='font-normal w-52'>Beauty Salon</a>
                  <a href='/' className='font-normal w-52'>...more</a>
                </div>

              </div>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Resources</p>
              <Link href='/company' className='font-normal w-52'>About Company</Link>
              <Link href='/career' className='font-normal w-52'>Career</Link>
              <Link href='/contact' className='font-normal w-52'>Contact Us</Link>
              <Link href='/insights' className='font-normal w-52'>Insights</Link>
              <Link href='/faqs' className='font-normal w-52'>FAQS</Link>
              <Link href='/terms-of-service' className='font-normal w-52'>Terms of Service</Link>
              <Link href='/privacy-policy' className='font-normal w-52'>Privacy Policy</Link>
            </div>

            <div className='w-auto flex flex-col gap-3'>
              <div className='flex flex-row items-center gap-1 text-[22px]'>
                <Link href='/' className='cursor-pointer'>
                  <Image src="/logo/digital-protein.svg" alt="digital protein logo" width={200} height={50} className="w-44 h-auto cursor-pointer" />
                </Link>
              </div>
              <div className='text-[#77838F]'>
                <div className='text-lg font-light mb-4'>
                  Call us <br />
                  <span className='text-[#1967d2] text-2xl font-bold'>+91 45454-34234</span>
                </div>
                <div className='text-[14px] font-light leading-6'>
                  Address Here<br />
                  Address Here<br />
                  Address Here<br />
                  info@digitalprotein.com <br />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer