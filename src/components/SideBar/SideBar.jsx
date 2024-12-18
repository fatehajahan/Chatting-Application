import React, { createRef, useState } from 'react'
import sideprofile from '../../assets/sideProfile.jpeg'
import defaultimage from '../../assets/default.png'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

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

    const [image, setImage] = useState();
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();

    const onChange = (e) => {
        e.preventDefault();
        let files;
        console.log(e, 'eee');

        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        console.log(files, 'adds');
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            console.log(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const handleRemove = () =>{
        setImage(false)
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

                        <div className="choosePht md:w-[370px] w-[295px] mx-auto relative pt-[0px]">

                            {
                                image
                                    ? <div className='overflow-hidden '>
                                        <div
                                            className="img-preview w-[100px] h-[100px] mx-auto overflow-hidden " />
                                    </div>
                                    : <div className='overflow-hidden '>
                                        <img src={defaultimage} alt="" className='mx-auto' />
                                    </div>
                            }
                            <label htmlFor="" className='font-open font-normal text-[20px] text-black '>
                                Choose a Photo
                            </label>

                            {
                                image &&
                                <Cropper
                                    ref={cropperRef}
                                    style={{ height: 400, width: "100%" }}
                                    zoomTo={0.5}
                                    initialAspectRatio={1}
                                    preview=".img-preview"
                                    src={image}
                                    viewMode={1}
                                    minCropBoxHeight={10}
                                    minCropBoxWidth={10}
                                    background={false}
                                    responsive={true}
                                    autoCropArea={1}
                                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                    guides={true}
                                />
                            }

                            <input
                                onChange={onChange}
                                type="file"
                                className='py-[16px] w-full border-maroon border-opacity-[0.5] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-maroon placeholder:font-open placeholder:font-semibold ' />
                        </div>

                        <div className="flex gap-x-[20px]">
                            <p
                                className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '>Upload
                            </p>

                            <p
                                onClick={handleRemove}
                                className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '> Remove Photo
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SideBar