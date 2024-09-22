'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MvcouncellorLogo from "../../public/MvcouncellorLogo.png"
import { navbarData } from "@/data/navbarData"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        console.log(pathName);
    }, [pathName]);

    return (
        <div className='flex justify-between items-center py-3 px-4 md:px-14  shadow-xl'>
            <div>
                <Image src={MvcouncellorLogo} className='h-10' alt="Logo" />
            </div>
            <div className='hidden md:flex rounded-full text-customGreen bg-[#E9EFEC]'>
                {navbarData.map((data) => (
                    <div key={data.id} className={`${pathName === data.path ? "bg-customGreen text-white" : "bg-[#E9EFEC]"} px-3 py-[6px] rounded-full`}>
                        <Link href={data.path}>{data.name}</Link>
                    </div>
                ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-xl focus:outline-none">
                <GiHamburgerMenu />
            </button>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#E9EFEC] flex flex-col items-center space-y-2 py-4">
                    {navbarData.map((data) => (
                        <Link key={data.id} href={data.path} className={`w-full text-center py-2 ${pathName === data.path ? "bg-customGreen text-white" : "text-customGreen"}`}>
                            {data.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar;
