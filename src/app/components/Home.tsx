import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Home = () => {
    return (
        <div className='bg-[#071829] '>
            <div className='text-white items-center justify-between flex p-6'>
                <p>Popular Topics 🔥</p>
                <div className='flex items-center justify-center space-x-3'>
                    <FaArrowLeft className='border w-6  rounded-md' />
                    <FaArrowRight className='border w-6  rounded-md' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  '>

                <div className='text-white  border p-3  w-96 space-y-2 rounded-xl' >
                    <div className='flex items-center'>
                        <img src="./rocket.png" alt="" />
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Introduction to Rocket Science</h1>
                            <p className='font-light text-sm'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
                        </div>
                    </div>
                    <button className='w-full border rounded-lg p-2 font-bold text-xl'>Read</button>
                </div>

                <div className='text-white  border p-3  w-96 space-y-2 rounded-xl' >
                    <div className='flex items-center'>
                        <img src="./atom.png" alt="" />
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Introduction to Rocket Science</h1>
                            <p className='font-light text-sm'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
                        </div>
                    </div>
                    <button className='w-full border rounded-lg p-2 font-bold text-xl'>Read</button>
                </div>

                <div className='text-white  border p-3  w-96 space-y-2 rounded-xl' >
                    <div className='flex items-center'>
                        <img src="./chip.png" alt="" />
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Introduction to Rocket Science</h1>
                            <p className='font-light text-sm'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
                        </div>
                    </div>
                    <button className='w-full border rounded-lg p-2 font-bold text-xl'>Read</button>
                </div>

                <div className='text-white  border p-3  w-96 space-y-2 rounded-xl' >
                    <div className='flex items-center'>
                        <img src="./rocket.png" alt="" />
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Introduction to Rocket Science</h1>
                            <p className='font-light text-sm'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
                        </div>
                    </div>
                    <button className='w-full border rounded-lg p-2 font-bold text-xl'>Read</button>
                </div>
            </div>
        </div>
    )
}

export default Home
