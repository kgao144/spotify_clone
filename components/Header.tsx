"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => { 

    const router = useRouter();
    const handeLogout = () => {
        // handle logout 
    }
    return (
        <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
            className
        )}>
            <div className='
            w-full
            mb-4
            flex
            items-center
            justify-between
            '>
                <div className='
                hidden
                md:flex
                gap-x-2
                items-center
                '>
                    <button className='
                    bg-black
                    rounded-full
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition'
                    onClick={()=> router.back()}
                    >
                        <RxCaretLeft size={35}/>
                    </button>

                    <button className='
                    bg-black
                    rounded-full
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    '
                    onClick={()=> router.forward()}
                    >
                        <RxCaretRight size={35}/>
                    </button>
                </div>

                <div className='
                flex 
                md:hidden 
                gap-x-2 
                items-center
                '>
                    <button className='
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    '>
                        <HiHome className='text-black' size={25}/>
                        <div className='
                        
                        transition
                        text-black
                        text-medium
                        font-semibold
                        items-center
                        justify-center
                        px-2
                        pt-[4px]
                        '>
                            Home
                        </div>
                    </button>

                    <button className='
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    '>
                        <BiSearch className='text-black' size={25}/>
                    </button>
                </div>

                <div className='
                flex
                justify-between
                items-center
                gap-x-4
                '>
                    <>
                        <div>
                            <Button className='
                            '>
                                Sign Up
                            </Button>
                        </div>

                        <div>
                            <Button className='
                            px-[35px]
                            bg-[#e7e7e7]
                            text-black
                            '>
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>

        </div>
    )
}

export default Header