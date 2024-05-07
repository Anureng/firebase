import Home from '@/app/components/Home'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen bg-[#071829]'>
            <Navbar />
            <Home />
        </div>
    )
}

export default page
