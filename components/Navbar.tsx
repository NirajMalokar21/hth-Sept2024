import React from 'react'
import Theme from './Theme'

const Navbar = () => {
  return (
    <div className='border-2 border-red-500 bg-red-700 w-full p-2 px-4 h-[70px] flex flex-row items-center justify-between'>
        <h1 className='h1-bold text-white'>RAVEN MAP</h1>
        <div className='flex flex-row items-center justify-center gap-4'>
            <Theme />
            <button className='text-white text-xl font-semibold p-1 rounded-sm px-2 '>Log-In</button>
        </div>
    </div>
  )
}

export default Navbar