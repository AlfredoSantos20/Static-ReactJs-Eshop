import React from 'react'
import DarkMode from './DarkMode';

import {IoMdSearch} from "react-icons/io"; //importing the IoMdSearch icon
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
const MenuLinks = [
    {
        id:1,
        name:"Home",
        link:"/#",
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop",    
    },
    {
        id:3,
        name:"About Us",
        link:"/#about",
    },
    {
        id:4,
        name:"Contact Us",
        link:"/#blog",
    },
];

const DropdownLinks = [
    {
        id:1,
        name:"Trending Products",
        link:"/#",
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#",    
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#",
    }, 
];

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
     <div className='py-4'>
        <div className='container flex justify-between items-center'>
            {/* Logo and Links Section */}
                <div className='flex items-center gap-4'>
                    <a href="#" title="Tazki's Shop" className="text-brandGreen font-semibold tracking-widest text-2xl
                    capitalize sm:text-3xl">Tazki's Shop
                    </a>
                    
                    {/* Menu Items */} 
                    <div  className='hidden lg:block'>
                        <ul className="flex items-center gap-4">  {/*To flex and center the buttons for navbar */}
                            { MenuLinks.map((data, index) => (
                                   <li key={index}>
                                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500
                                    hover:text-black dark:hover:text-white duration-200'>
                                        {" "}
                                        {data.name}</a>
                                   </li> 
                             ))}
                             {/* Dropdown */}
                             <li className='relative cursor-pointer group'>
                                <a href="#" className='flex items-center gap-[2px] font-semibold
                                text-graty-500 dark:hover:text-white py-2'>
                                    Quick Links
                                    <span>
                                    <FaCaretDown className='group-hover:rotate-180
                                    duration-300'/>
                                </span>
                                </a>                     
                                 {/* Dropdown Links */}
                                    <div className='absolute z-[9999] hidden
                                    group-hover:block w-[200px] rounded-md bg-white
                                    shadow-md dark:bg-gray-900 p-2 dark:text-white'>

                                        <ul className='space-y-2'>
                                        { DropdownLinks.map((data, index)=>(
                                                <li key={data.id}>
                                                    <a 
                                                    className='text-gray-500
                                                    dark:hover:text-white
                                                    duration-200 inline-block w-full p-2
                                                    hover:bg-brandGreen/20 rounded-md font-semibold'
                                                    href={data.link}>{data.name}</a>
                                                </li>
                                            )) }
                                        </ul>
                                    </div>
                            </li>      
                        </ul>
                    </div>
                    <div></div>
                </div>
            {/* Navbar Right section */}

            <div className='flex justify-between items-center gap-4'>
                {/* Search Bar section */}
                <div className='relative group hidden sm:block'>
                    <input
                    type="text" 
                    placeholder='Search' 
                    className='search-bar'/>
                     <IoMdSearch
                     className='text-xl text-gray-600 group-hover:text-brandGreen dark:text-gray-400
                     absolute top-1/2 -translate-y-1/2 right-3'/> 
                </div>
                {/* Order-button section */}
                <button className='relative p-3'>
                  <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                  <div className='w-4 h-4 bg-red-500 text-white 
                  rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>10
                  </div>
                </button>

                {/* Dark Mode section */}
                <div>
                <DarkMode /> {/* Calling the DarkMode.jsx */}
                </div>

            </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar