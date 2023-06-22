"use client";



import Image from 'next/image';
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import pfpsm from '../public/pfpsm.png'


const Profile = () => {
    return (
            <div className='
            rounded-xl
            h-[100px]
            flex
            flex-row
            items-center
            justify-start
            pl-4
            gap-x-4
            '>

                <Image src={pfpsm} alt={'rounded pfp'} className='
                rounded-full
                w-1/3
                '/>

                <div className='
                flex
                flex-col
                items-start
                justify-center

                '>
                    <p className='
                    text-black
                    text-medium
                    font-bold
                    pt-6
                    '>
                        Name
                    </p>

                    <p className='
                    text-black
                    text-medium
                    font-semibold
                    '>
                        Description
                    </p>
                </div>
            </div>
    )
}

export default Profile