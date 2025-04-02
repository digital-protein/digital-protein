import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import React from 'react'

const TermsOfService = () => {
    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Terms of Service | Digital Protein | Our Policies</title>
                <meta name="description" content="Read Digital Protein's Terms of Service to understand our policies, user agreements, and guidelines for using our digital solutions and services." />
                <meta name="keywords" content="Digital Protein Terms of Service, user agreement, policies, legal, service terms, conditions" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Terms of Service | Digital Protein | Our Policies" />
                <meta property="og:description" content="Review Digital Protein's Terms of Service for details on usage policies, service agreements, and legal guidelines." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/terms-of-service" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms of Service | Digital Protein | Our Policies" />
                <meta name="twitter:description" content="Learn more about Digital Protein's Terms of Service, including user agreements and policy guidelines." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-16 py-24 text-white'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Terms of Service</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Understand Our Policies and Guidelines</div>
                        </div>

                        <div className='text-white md:text-lg text-base flex flex-col gap-6'>
                            <div className='font-light'>
                                <strong>1. Acceptance of Terms</strong><br />
                                By accessing and using Digital Protein’s website and services, you agree to comply with these Terms of Service. If you do not agree, please refrain from using our services.</div>

                            <div className='font-light'>
                                <strong>2. Use of Services</strong><br />
                                Our services are intended to provide digital solutions, including web development, AI integrations, and consulting. You agree to use our services lawfully and not engage in activities that may harm our platform or other users.</div>

                            <div className='font-light'>
                                <strong>3. Intellectual Property</strong><br />
                                All content, including text, graphics, logos, and software, is the property of Digital Protein or its licensors. Unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited.</div>

                            <div className='font-light'>
                                <strong>4. User Responsibilities</strong><br />
                                You are responsible for maintaining the confidentiality of your account information. Any activity under your account is your responsibility. Notify us immediately in case of unauthorized access.</div>

                            <div className='font-light'>
                                <strong>5. Limitation of Liability</strong><br />
                                Digital Protein is not liable for any indirect, incidental, or consequential damages arising from your use of our services. We provide our services "as is" without warranties of any kind.</div>

                            <div className='font-light'>
                                <strong>6. Termination of Services</strong><br />
                                We reserve the right to suspend or terminate your access to our services if you violate these terms or engage in harmful activities.</div>

                            <div className='font-light'>
                                <strong>7. Modifications to Terms</strong><br />
                                We may update these terms from time to time. Continued use of our services after changes means you accept the updated terms.</div>

                            <div className='font-light'>
                                <strong>8. Contact Us</strong><br />
                                If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:support@digitalprotein.in" className='text-blue-500'>support@digitalprotein.in</a>.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default TermsOfService