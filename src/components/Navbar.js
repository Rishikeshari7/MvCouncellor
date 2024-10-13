'use client'
import React, { useEffect, useState,useRef } from 'react'
import Image from 'next/image'
import Logo from "../../public/Logo.jpg"
import { navbarData } from "@/data/navbarData"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import GoogleTranslate from './language/Lang'
import { MdOutlineClear } from "react-icons/md";
const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        console.log(pathName);
    }, [pathName]);

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Close the menu
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className='flex text-black justify-between items-center py-3 px-4 md:px-14 h-[70px] shadow-xl'>
            <div>
                <Image src={Logo} className='h-16 w-[7.5rem]' alt="Logo" />
            </div>
            <div className="flex ">
            <div className='hidden md:flex rounded-full mr-6 bg-[#faf9ac59]'>
                {navbarData.map((data) => (
                    <div key={data.id} className={`${pathName === data.path ? "bg-custom-gradient" : "bg-[#faf9ac59]"} font-medium px-3 py-[6px] rounded-full`}>
                        <Link href={data.path}>{data.name}</Link>
                    </div>
                ))}
               
            </div>
             <div className="absolute right-12 top-[18px] md:right-5 ">
             <GoogleTranslate/>
            </div>
            </div>
           
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-xl focus:outline-none">
               {isMenuOpen ? (<MdOutlineClear className='text-2xl'/>) : (<GiHamburgerMenu />) }
            </button>
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden z-30 absolute top-16 left-0 w-full bg-white/30 backdrop-blur-xl shadow-lg flex flex-col items-center space-y-2 py-4">
    {navbarData.map((data) => (
        <Link onClick={()=>setIsMenuOpen(false)} key={data.id} href={data.path} className={`w-full text-center py-2 relative ${pathName === data.path && "bg-custom-gradient"}`}>
            {data.name}
        </Link>
    ))}
</div>

            )}
        </div>
    )
}

export default Navbar;
