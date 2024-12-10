import React from 'react'
import { CiMenuKebab } from "react-icons/ci";

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'

const FriendsGroup = () => {
    return (
        <div className='flex flex-col gap-y-[43px]'>
            <div className="friends pt-[19px] pb-[82px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex items-center relative">
                    <h2 className='font-pops font-semibold text-[20px]'>Friends</h2>
                    <CiMenuKebab className='absolute ml-[280px] cursor-pointer ' />
                </div>

                <div className="ids">
                    <div className="id1 pt-[40px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={rag} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Raghav</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Dinner?</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id2 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={swa} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Swathi</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Sure!</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={kir} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Kiran</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Hi.....</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={tejas} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Tejeshwini C</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>I will call him today.</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>
                </div>
            </div>

            <div className="groups pt-[19px] pb-[70px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex items-center relative">
                    <h2 className='font-pops font-semibold text-[20px]'>My Groups</h2>
                    <CiMenuKebab className='absolute ml-[280px] cursor-pointer ' />
                </div>

                <div className="ids">
                    <div className="id1 mt-[32px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={rag} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Raghav</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Dinner?</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id2 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={swa} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Swathi</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Sure!</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={kir} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Kiran</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Hi.....</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={tejas} alt=""  width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Tejeshwini C</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>I will call him today.</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FriendsGroup