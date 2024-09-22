import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 border-red-500 bg-red-700 w-full p-2 px-4 h-[70px] flex flex-row items-center justify-between'>
        <h1>RAVEN MAP</h1>
        <button className='bg-white p-1 rounded-sm px-2 '>Log In</button>
    </div>
  )
}

export default Navbar