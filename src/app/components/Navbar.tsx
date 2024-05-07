"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <div className='bg-[#071829] text-white p-2 flex items-center justify-between'>
                <img src="./logo.png" alt="" />
                <button className='text-xl text-blue-400  font-bold' onClick={() => router.push('/')} >Sign Out</button>
            </div>
            <hr className='bg-[#F5F5F5]' />
        </>
    )
}

export default Navbar
