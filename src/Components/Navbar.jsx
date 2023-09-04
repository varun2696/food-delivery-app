import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { BsCart3 } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"

const Navbar = () => {
    return (
        <nav className='w-[80%] m-auto bg-white p-4 flex items-center justify-between'>
            {/* left sectoion */}
            <div className='flex items-center space-x-4'>
                <img src="https://foodiezy.netlify.app/logoname.png" alt="" width={'150px'} />
            </div>

            {/* center section  */}
            <div className="w-[60%] flex items-center space-x-2 border rounded-md h-10 px-2 py-1">
                <CiLocationOn className="h-4 w-4" />
                <div className="text-gray-600">Your Location</div>
                <div className="border-r border-gray-400 h-5"></div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent focus:outline-none flex-grow"
                />
                <BiSearch className="h-6 w-6" />
            </div>

            {/* right section */}
            <div className="flex items-center space-x-6">
                {/* User Profile */}
                <CgProfile className="h-8 w-8" />

                {/* Cart Icon */}
                <BsCart3 className="h-8 w-8" />

                {/* Heart Icon */}
                <AiOutlineHeart className="h-8 w-8" />
                <div className='border-l border-gray-400 h-10 hidden md:flex'></div>

                <div className="text-gray-600">
                    Your Bag
                    <div className="font-semibold text-gray-800">₹199.99</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
