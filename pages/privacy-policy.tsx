import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen bg-black'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
                <title>Privacy Policy | Digital Protein | Your Data, Our Responsibility</title>
                <meta name="description" content="Learn how Digital Protein collects, uses, and protects your personal data. Read our Privacy Policy to understand your rights and choices." />
                <meta name="keywords" content="Digital Protein Privacy Policy, data protection, user privacy, personal information, security, GDPR compliance" />
                <meta name="author" content="Digital Protein" />

                <meta property="og:title" content="Privacy Policy | Digital Protein | Your Data, Our Responsibility" />
                <meta property="og:description" content="Review Digital Protein’s Privacy Policy to learn about data collection, usage, security, and your rights as a user." />
                <meta property="og:image" content="/logo/og-digitalprotein.png" />
                <meta property="og:url" content="https://www.digitalprotein.in/privacy-policy" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy | Digital Protein | Your Data, Our Responsibility" />
                <meta name="twitter:description" content="Understand how Digital Protein handles your personal data and ensures your privacy and security." />
                <meta name="twitter:image" content="/logo/og-digitalprotein.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center bg-black text-white'>
                    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-16 py-24 text-white'>
                        <div className='w-full flex flex-col items-center md:text-left text-center'>
                            <div className='text-blue-600 font-normal mb-2'>Privacy Policy</div>
                            <div className='md:text-3xl text-2xl font-semibold mb-4'>Your Data, Our Responsibility</div>
                        </div>

                        <div className='text-white md:text-lg text-base flex flex-col gap-6'>
                            <div className='font-light'>
                                <strong>1. Introduction</strong><br />
                                At Digital Protein, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and secure your information.
                            </div>

                            <div className='font-light'>
                                <strong>2. Information We Collect</strong><br />
                                We may collect personal information such as your name, email, phone number, and browsing data when you interact with our website or services.
                            </div>

                            <div className='font-light'>
                                <strong>3. How We Use Your Information</strong><br />
                                We use your data to provide, improve, and personalize our services, including customer support, analytics, and marketing communications.
                            </div>

                            <div className='font-light'>
                                <strong>4. Data Security</strong><br />
                                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                            </div>

                            <div className='font-light'>
                                <strong>5. Sharing of Information</strong><br />
                                We do not sell or share your personal data with third parties except as required by law or to provide our services effectively.
                            </div>

                            <div className='font-light'>
                                <strong>6. Cookies and Tracking Technologies</strong><br />
                                Our website may use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
                            </div>

                            <div className='font-light'>
                                <strong>7. Your Rights</strong><br />
                                You have the right to access, modify, or delete your personal data. Contact us if you wish to exercise these rights.
                            </div>

                            <div className='font-light'>
                                <strong>8. Changes to This Policy</strong><br />
                                We may update this Privacy Policy periodically. Continued use of our services implies acceptance of the revised policy.
                            </div>

                            <div className='font-light'>
                                <strong>9. Contact Us</strong><br />
                                If you have any questions regarding our Privacy Policy, please reach out to us at <a href="mailto:support@digitalprotein.in" className='text-blue-500'>support@digitalprotein.in</a>.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default PrivacyPolicy;