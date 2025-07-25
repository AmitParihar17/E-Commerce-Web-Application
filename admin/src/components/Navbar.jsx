import React from 'react'
import {assets} from "../assets/assets.js"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="Logo" />
      <button onClick={() =>setToken("") } className='bg-gray-600 text-white px-5 py-2 rounded-full sm:px-7 sm:py-2 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar
