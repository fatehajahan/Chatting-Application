import React from 'react'
import SideBar from '../SideBar/SideBar'
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegSmileBeam } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";

import id1 from '../../assets/id1.png'
import id2 from '../../assets/id2.png'
import id3 from '../../assets/id3.png'

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'

import chat1 from '../../assets/chat1.png'
import chat2 from '../../assets/chat2.png'
import chat3 from '../../assets/chat3.png'
import chat4 from '../../assets/chat4.png'
import chat5 from '../../assets/chat5.png'
import chat6 from '../../assets/chat6.png'

import send from '../../assets/sendbtn.png'

const Messaging = () => {
    return (
        <div>
            <div className=' p-[20px] flex gap-x-[43px] '>
                <div className='w-[9%] h-[954px]'>
                    <SideBar />
                </div>

                <div className='w-[30%] group-and-friends'>
                    <div className="search flex justify-between items-center relative ">
                        <FaSearch className='absolute ml-[23px] z-10' />
                        <CiMenuKebab className='absolute ml-[380px] z-10 cursor-pointer' />
                        <input type="search" placeholder='search' className='py-[17px] pl-[78px] w-[427px] rounded-[20px] drop-shadow-md' />
                    </div>

                    <div className="grouplist py-[21px] px-[22px] mt-[43px] drop-shadow-xl bg-white rounded-2xl ">
                        <div className="title flex items-center justify-between ">
                            <h2 className='font-pops font-semibold text-[20px]'>Groups List</h2>
                            <CiMenuKebab className=' cursor-pointer ' />
                        </div>

                        <div className="ids">
                            <div className="id1 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={id1} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Friends Reunion</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] pr-[51px]'>Hi Guys, Wassup!</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>

                            <div className="id2 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={id2} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Friends Forever</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D]'>Good to see you.</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>

                            <div className="id3 pt-[17px] flex items-center justify-between">
                                <div className='flex items-center'>
                                    <img src={id3} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Crazy Cousins</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>What plans today?</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="friends py-[21px] px-[22px] mt-[30px] drop-shadow-xl bg-white rounded-2xl ">
                        <div className="title flex justify-between items-center ">
                            <h2 className='font-pops font-semibold text-[20px]'>Friends</h2>
                            <CiMenuKebab className=' cursor-pointer ' />
                        </div>

                        <div className="ids">
                            <div className="id1 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={rag} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Raghav</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>Dinner?</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>

                            <div className="id2 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={swa} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Swathi</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>Sure!</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>

                            <div className="id3 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={kir} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Kiran</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>Hi.....</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>

                            <div className="id3 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={tejas} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>Tejeshwini C</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>I will call him today.</p>
                                    </div>
                                </div>

                                <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[68%] relative shadow-xl rounded-lg '>
                    <div>
                        <div className='flex items-center gap-x-[33px] justify-between relative'>
                            <div className='flex items-center gap-x-[33px] ml-[38px] '>
                                <img src={swa} alt="" />
                                <div className="name">
                                    <h2 className='font-pops font-semibold text-[24px]'>Swathi</h2>
                                    <p>Online</p>
                                </div>
                            </div>
                            <CiMenuKebab className='absolute cursor-pointer right-0 text-[40px] text-maroon mr-[38px]' />
                        </div>

                        {/* <div className='bg-[#D9D9D9] w-[60%] after:absolute after:contents-[]'></div> */}
                    </div>
                    <div className='after:absolute after:bg-[rgb(0,0,0,0.2)] after:w-[95%] after:h-[0.4%] after:top-[95px] after:text-center ml-[38px] '></div>

                    <div className='chats relative'>
                        <div className='pb-[47px] ml-[38px] mr-[38px]'>
                            <img src={chat1} alt="" className='pt-[100px] me-auto' />
                            <img src={chat2} alt="" className='pt-[35px] me-auto' />
                            <img src={chat3} alt="" className='ms-auto' />
                            <img src={chat4} alt="" className='ms-auto pt-[35px]' />
                            <img src={chat5} alt="" className='me-auto pt-[35px]' />
                            <img src={chat6} alt="" className='ms-auto pt-[35px]' />
                        </div>
                        <div className='after:absolute after:bg-[rgb(0,0,0,0.2)] after:w-[95%] after:h-[0.4%] after:bottom-[0px] after:text-center ml-[38px] '></div>
                    </div>

                    <div className='flex items-center  gap-x-2'>
                        <div className="writeChat relative">
                            <input type="text" className='bg-[#F1F1F1] py-[20px] pl-[30px] pr-[900px] mt-[35px] rounded-lg ml-[38px]  ' />
                            <FaRegSmileBeam className='absolute right-[70px] top-[60px] text-[#707070] text-[18px] cursor-pointer' />
                            <CiCamera className='absolute right-[20px] top-[56px] text-[#707070] text-[22px] cursor-pointer' />
                        </div>

                        <div className='w-[5%]'><img src={send} alt="" className='cursor-pointer mt-[35px]' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messaging