'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from "../../public/Logo.jpg"
import { navbarData } from "@/data/navbarData"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import GoogleTranslate from './language/Lang'
const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        console.log(pathName);
    }, [pathName]);

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
                <GiHamburgerMenu />
            </button>
            {isMenuOpen && (
                <div className="md:hidden z-30 absolute top-16 left-0 w-full bg-white/30 backdrop-blur-xl shadow-lg flex flex-col items-center space-y-2 py-4">
    {navbarData.map((data) => (
        <Link key={data.id} href={data.path} className={`w-full text-center py-2 relative ${pathName === data.path && "bg-custom-gradient"}`}>
            {data.name}
        </Link>
    ))}
</div>

            )}
        </div>
    )
}

export default Navbar;
