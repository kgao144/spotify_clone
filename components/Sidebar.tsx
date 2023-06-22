"use client";

import React from 'react'
import {useMemo} from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'

import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import Profile from './Profile';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    
    const pathName = usePathname();
    
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search',
        }
    ], [pathName])
    
    return (
        <div className='flex h-full'>
            <div className='
            hidden 
            bg-black
            flex-col
            gap-y-2
            h-full
            w-[280px]
            md:flex
            p-2
            pr-0
            '>
                <Box>
                    <div className='
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-2
                    '>
                    {routes.map((item) => (
                        <SidebarItem 
                            key={item.label} 
                            {...item}/>                            
                    ))}
                    </div>
                </Box>

                <Box className='
                h-[300px]
                bg-pfp
                rounded-xl
                pt-[40px]
                pb-2
                flex

                items-center
                justify-center
                '>
                    <Box className='
                    bg-white/60
                    backdrop-blur-[4px]
                    w-[95%]
                    h-auto
                    
                    '>
                        <Profile />
                    </Box>
                </Box>
                
                

                <Box className='
                overflow-y-auto 
                h-full
                '>
                    <Library/>
                </Box>

                <Box className='
                flex
                flex-col
                gap-y-4
                h-[20vh]
                px-5
                py-2
                '>
                    <div>
                        <p>
                            Copyright Section
                        </p>
                    </div>
                    <div>
                        <p>
                            Language Button
                        </p>
                    </div>
                </Box>

            </div>
            <main className='
            h-full
            flex-1
            overflow-y-auto
            py-2
            '>
                {children}
            </main>
        </div>
    )
}

export default Sidebar