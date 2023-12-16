import React from 'react'
import Link from 'next/link';
import { FaTicket } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
const Nav = () => {
    return (
        <>
            <nav className='flex justify-between  p-4 bg-gray-900 text-white'>
                <div className='flex items-center space-x-4'>
                    <Link href="/" className='text-default-text text-xl'>
                        <IoMdHome size={25} />
                    </Link>
                    <Link href="/TicketApp/newId">
                        <FaTicket size={25} />
                    </Link>
                </div>
                <div>
                    <p className="text-default-text">adityazende6710@gmail.com</p>
                </div>
            </nav>
        </>
    )
}

export default Nav;