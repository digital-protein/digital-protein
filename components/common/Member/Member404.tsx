import Link from 'next/link'
import React from 'react'

const Member404 = () => {
    return (
        <div className='w-full h-screen bg-[#212121] flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>404 - Member Not Found</h1>
                <p>Sorry, the member you are looking for does not belong to our organization.</p>
                <div className='text-lg'>
                    Go back to the <Link href="/" className='transition-all font-bold hover:underline'>homepage</Link>
                </div>
            </div>
            <div className="loader"></div>
        </div>
    )
}

export default Member404