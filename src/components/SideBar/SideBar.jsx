import React from 'react'
import sideprofile from '../../assets/sideprofile.png'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { ImExit } from "react-icons/im";


const SideBar = () => {
    return (
        <div className='h-screen pl-[32px]'>
            <div className='bg-[#5F35F5] py-[38px] px-[43px] rounded-[20px] flex flex-col items-center relative '>
                <img src={sideprofile} alt="" />
                <div className="flex flex-col items-center gap-y-[83px]">

                    <IoHomeOutline className='text-[46px] text-[#BAD1FF] transition duration-300 hover:bg-white hover:text-[#5F35F5] w-[110px] rounded-xl  top-[70%] left-[22px] mt-[78px] cursor-pointer' />
                    <AiOutlineMessage className='text-[46px] text-[#BAD1FF] transition duration-300 hover:bg-white hover:text-[#5F35F5] w-[110px] rounded-xl  top-[70%] left-[22px] cursor-pointer' />
                    <CiBellOn className='text-[46px] text-[#BAD1FF] transition duration-300 hover:bg-white hover:text-[#5F35F5] w-[110px] rounded-xl  top-[70%] left-[22px] cursor-pointer' />
                    <IoIosSettings className='text-[46px] text-[#BAD1FF] transition duration-300 hover:bg-white hover:text-[#5F35F5] w-[110px] rounded-xl  top-[70%] left-[22px] cursor-pointer' />

                </div>

                <div className='mt-[187px]'>
                    <ImExit className='text-[46px] text-[#BAD1FF] transition duration-300 hover:bg-white hover:text-[#5F35F5] w-[110px] rounded-xl  top-[70%] left-[22px]'/>
                </div>
            </div>
        </div>
    )
}

export default SideBar