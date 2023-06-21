"use client";

import React from 'react'
import {useMemo} from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'

import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

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
            w-[300px]
            md:flex
            p-2'>
                
                <Box>
                    <div className='
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-2'>
                    {routes.map((item) => (
                        <SidebarItem 
                            key={item.label} 
                            {...item}/>                            
                    ))}
                    </div>
                </Box>

                <Box className='
                flex
                flex-col
                gap-y-4
                h-[30vh]
                px-5
                py-2'>
                    <div>
                        <p>
                            Profile Section
                        </p>
                    </div>
                </Box>

                <Box className='
                overflow-y-auto 
                h-full'>
                    <Library/>
                </Box>

                <Box className='
                flex
                flex-col
                gap-y-4
                h-[10vh]
                px-5
                py-2'>
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
            py-2'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar