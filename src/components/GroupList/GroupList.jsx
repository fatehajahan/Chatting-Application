import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import id1 from '../../assets/id1.png'
import id2 from '../../assets/id2.png'
import id3 from '../../assets/id3.png'

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'

const GroupList = () => {
    return (
        <div>
            <div className="search flex items-center relative">
                <FaSearch className='absolute ml-[23px] z-10' />
                <CiMenuKebab className='absolute ml-[380px] z-10 cursor-pointer' />
                <input type="search" placeholder='search' className='py-[17px] pl-[78px] w-[427px] rounded-[20px] drop-shadow-md' />
            </div>

            <div className="grouplist py-[21px] px-[22px] mt-[43px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex items-center relative">
                    <h2 className='font-pops font-semibold text-[20px]'>Groups List</h2>
                    <CiMenuKebab className='absolute ml-[360px] cursor-pointer ' />
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
                            <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="frndreq py-[21px] px-[22px] mt-[30px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex items-center relative">
                    <h2 className='font-pops font-semibold text-[20px]'>Friend  Request</h2>
                    <CiMenuKebab className='absolute ml-[360px] cursor-pointer ' />
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
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

                        <div className="joinbtn bg-[#5F35F5] px-[22px] rounded-[5px] cursor-pointer">
                            <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupList