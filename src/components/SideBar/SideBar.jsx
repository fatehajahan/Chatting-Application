import React, { useState } from 'react'
import sideprofile from '../../assets/sideProfile.jpeg'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";


const SideBar = () => {
    const [upload, setUpload] = useState(false)
    const handleUpload = () => {
        console.log('dssd');
        setUpload(true)
    }
    const [home, sethome] = useState(false)
    const homeClick = () => {
        sethome(!home)
        setmessage(false)
        setbell(false)
        setsetting(false)
    }

    const [message, setmessage] = useState(false)
    const messageClick = () => {
        setmessage(!message)
        sethome(false)
        setbell(false)
        setsetting(false)
    }

    const [bell, setbell] = useState(false)
    const bellClick = () => {
        setbell(!bell)
        sethome(false)
        setmessage(false)
        setsetting(false)
    }

    const [setting, setsetting] = useState(false)
    const settingClick = () => {
        setsetting(!bell)
        sethome(false)
        setmessage(false)
        setbell(false)
        setexit(false)
    }

    const [exit, setexit] = useState(false)
    const exitClick = () => {
        setexit(!exit)
        sethome(false)
        setmessage(false)
        setbell(false)
        setsetting(false)
    }
    return (
        <div>
            <div className='p-[20px]'>
                <div className='bg-maroon py-[38px] px-[40px] rounded-[20px] mx-auto '>
                    <div className='relative  w-[100px] h-[100px] mb-[60px] mx-auto '>
                        <img src={sideprofile} alt="" className=' rounded-full w-[100px] h-[100px]' />
                        <div onClick={handleUpload} className='w-[100px] h-[100px] bg-[rgb(0,0,0)] opacity-0 transition duration-300 absolute top-0 left-0 rounded-full hover:opacity-[0.7] flex justify-center items-center cursor-pointer'>
                            <FaCloudUploadAlt className='text-white text-[25px] opacity-[1]' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-[56px] ">

                        <div className='home'>
                            <Link to='/profilepage' >
                                <button className={
                                    `${home ? "bg-white py-[22px] rounded-md " : "hover:text-maroon py-[22px] rounded-md"}`}

                                    onClick={homeClick}>

                                    <IoHomeOutline className={`text-[46px] w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer ${home ? "text-maroon " : "text-[46px] text-white w-[110px] rounded-xl  top-[70%] left-[22px]  cursor-pointer"} `} />
                                </button>
                            </Link>
                        </div>


                        <div className='message'>
                            <Link to="/message" >
                                <button className={
                                    `${message ? "bg-white py-[22px] rounded-md " : "hover:text-maroon py-[22px] rounded-md"}`}

                                    onClick={messageClick}>

                                    <AiOutlineMessage className={`text-[46px] w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer ${message ? "text-maroon" : "text-[46px] text-white w-[110px] rounded-xl  top-[70%] left-[22px] cursor-pointer"} `} />
                                </button>
                            </Link>
                        </div>


                        <div className='notification'>
                            <Link to='/notification'>
                                <button className={
                                    `${bell ? "bg-white py-[22px] rounded-md " : "hover:text-maroon py-[22px] rounded-md"}`}

                                    onClick={bellClick}>

                                    <CiBellOn className={`text-[46px] w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer ${bell ? "text-maroon" : "text-[46px] text-white w-[110px] rounded-xl  top-[70%] left-[22px] cursor-pointer"} `} />
                                </button>
                            </Link>
                        </div>


                        <div className='setting'>
                            <Link >
                                <button className={
                                    `${setting ? "bg-white py-[22px] rounded-md " : " hover:text-maroon py-[22px] rounded-md"}`}

                                    onClick={settingClick}>

                                    <IoIosSettings className={`text-[46px] w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer ${setting ? "text-maroon" : "text-[46px] text-white w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer"} `} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='exit mt-[56px] flex justify-center'>
                        <Link >
                            <button className={
                                `${exit ? "bg-white py-[22px] rounded-md " : "hover:bg-white hover:text-maroon py-[22px] rounded-md"}`}

                                onClick={exitClick}>

                                <ImExit className={`text-[46px] w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer ${exit ? "text-maroon" : "text-[46px] text-white w-[110px] rounded-xl top-[70%] left-[22px] cursor-pointer"} `} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {
                upload &&
                <div className='bg-maroon w-full absolute top-0 h-full z-40 flex justify-center items-center'>
                    <div className='bg-white w-[500px] py-[20px] px-[20px] rounded-md text-center'>
                        <h1 className='text-[30px] font-nuni font-semibold text-black'>Forgot Password</h1>

                        <div className="email md:w-[370px] w-[295px] mx-auto relative pt-[70px]">
                            <label htmlFor="" className='font-open font-normal text-[20px] text-black '>
                                Choose a Photo
                            </label>
                            <input
                                // onChange={Email}
                                type="file"
                                className='py-[16px] w-full border-maroon border-opacity-[0.5] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-maroon placeholder:font-open placeholder:font-semibold ' />
                        </div>

                        <div className="flex gap-x-[20px]">
                            <p
                                // onClick={setPassword}
                                className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '>Upload
                            </p>

                            <Link
                                className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '> Remove Photo
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SideBar