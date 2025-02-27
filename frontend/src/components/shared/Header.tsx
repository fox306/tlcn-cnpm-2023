'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
    const pathname = usePathname();
    return (
        <div className={`${pathname === '/' ? 'bg-bg' : 'bg-white'} flex flex-col items-center`}>
            <div className=" flex items-center justify-between px-20 pt-6 pb-5 w-full">
                <div>
                    <Image
                        src={pathname === '/' ? '/search.png' : '/search2.png'}
                        alt="Search"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="flex items-center gap-10">
                    <div className={pathname === '/' ? 'text-[#FFD6AE]' : 'text-blue'}>
                        <span className="opacity-60">Account balance:</span>
                        <span className="font-semibold ml-2">$20000</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="relative">
                            <FavoriteBorderOutlinedIcon
                                className={`w-7 h-7 ${pathname === '/' ? 'text-orange' : 'text-blue'}`}
                            />
                            <div
                                className={`absolute top-[-8px] right-[-6px] border rounded-full w-4 h-4 border-white ${
                                    pathname === '/' ? 'bg-orange' : 'bg-blue'
                                }`}
                            >
                                <span className="text-white text-xs ml-[0.2rem] absolute">2</span>
                            </div>
                        </div>
                        <div className="relative ">
                            <ShoppingCartOutlinedIcon
                                className={`w-7 h-7 ${pathname === '/' ? 'text-orange' : 'text-blue'}`}
                            />
                            <div
                                className={`absolute top-[-8px] right-[-6px] border rounded-full w-4 h-4 border-white ${
                                    pathname === '/' ? 'bg-orange' : 'bg-blue'
                                }`}
                            >
                                <span className="text-white text-xs ml-[0.2rem] absolute">2</span>
                            </div>
                        </div>

                        <PersonOutlineOutlinedIcon
                            className={`${pathname === '/' ? 'text-orange' : 'text-blue'}`}
                            fontSize="large"
                        />
                    </div>
                </div>
            </div>
            <span
                className={`border-b w-[calc(100vw-128px)] ${
                    pathname === '/' ? 'border-orange' : 'border-blue'
                } opacity-40 block mb-5`}
            ></span>
        </div>
    );
};

export default Header;
