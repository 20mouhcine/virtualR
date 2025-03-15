import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b-slate-300 border-neutral-700/800">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" className='w-10 h-10 mr-2' />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href} className='hover:text-white text-gray-300 transition-all'>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X/>:<Menu/>}
                    </button>

                </div>
            </div>
            {isOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg;hidden'>
                    <ul className=''>
                        {navItems.map((item,index)=>(
                            <li key={index} className='py-4 text-xl hover:bg-gray-400 transition-all ease-in-out w-full'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        <div className='flex space-x-6'>
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>Create an account</a>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    </nav>
)
}
