import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#171717] border-t border-t-[#2b2b2b]'>

      <div className="md:w-10/12 w-11/12 h-auto flex flex-col py-4 text-[#fff] md:pt-16 pt-8 pb-8">

        <div className='flex lg:flex-row flex-col items-start justify-between flex-wrap md:py-0 py-6 md:gap-4 gap-8 mb-8'>

          <div className='min-w-64 flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
            <p className='mb-2 text-[#fff] text-base font-semibold'>Services We Offer</p>
            <Link href='/' className='font-normal md:w-64 w-full'>Mobile App Development</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>UI & UX Designs</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Software Development</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Management Systems</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>DevOps & Automation</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Blockchain Development</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Cloud Services</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Digital Transformation</Link>
          </div>

          <div className='min-w-64 flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
            <p className='mb-2 text-[#fff] text-base font-semibold'>Portfolio</p>
            <Link href='/' className='font-normal md:w-64 w-full'>Alumni Management</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Institute Webpage</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>E-Commerce Webpage</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Learning Management System</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Portfolio Websites</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Job Portal</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>Event Management System</Link>
            <Link href='/' className='font-normal md:w-64 w-full'>...more</Link>
          </div>

          <div className='min-w-64 flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#77838F]'>
            <p className='mb-2 text-[#fff] text-base font-semibold'>Resources</p>
            <Link href='/company' className='font-normal md:w-64 w-full'>About Company</Link>
            <Link href='/career' className='font-normal md:w-64 w-full'>Career With Us</Link>
            <Link href='/contact' className='font-normal md:w-64 w-full'>Contact Us</Link>
            <Link href='/insights' className='font-normal md:w-64 w-full'>Insights</Link>
            <Link href='/faqs' className='font-normal md:w-64 w-full'>FAQS</Link>
            <Link href='/terms-of-service' className='font-normal md:w-64 w-full'>Terms of Service</Link>
            <Link href='/privacy-policy' className='font-normal md:w-64 w-full'>Privacy Policy</Link>
          </div>

          <div className='min-w-64 flex flex-col gap-3'>
            <div className='flex flex-row items-center gap-1 text-[22px]'>
              <Link href='/' className='cursor-pointer'>
                <Image src="/logo/digital-protein.svg" alt="company-logo" width={200} height={50} className="w-72 h-auto cursor-pointer" />
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
                info@digitalprotein.in <br />
              </div>
            </div>
          </div>

        </div>

        <hr className='bg-[#77838F]' />

        <div className='w-full h-auto flex lg:flex-row flex-col md:justify-start justify-center py-4'>
          <div className='flex flex-row items-center md:justify-start justify-center w-full text-sm text-[#77838F]'>
            © 2025 Digital Protein. All Right Reserved.
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer