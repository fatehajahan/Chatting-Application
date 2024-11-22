import React, { useState } from 'react'
import reg from '../../assets/registration.png'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    const handleSubmit = () => {
        if(!email){
            setEmailErr('Please give Your Email Id');
        }
    }

    return (
        <div>
            <div className="flex justify-between">
                <div className="leftSection w-1/2 pt-[110px] pl-[190px]">
                    <h1 className='font-nuni text-[#11175D] font-bold text-[34px] '>Get started with easily register</h1>
                    <p className=' font-nuni text-[rgb(0,0,0,0.5)] font-normal text-[20px] pt-[13px] '>Free register and you can enjoy it</p>

                    <form className="inputs relative pt-[40px]">

                        {/* Email */}
                        <div className="mail relative">
                            <label htmlFor=""
                                className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[-7px] transition-all">Mail Address
                            </label>
                            <input type="email"
                                onChange={handleEmail}
                                placeholder='fatehajahan2002@gmail.com'
                                className='block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                            />

                            <p className='text-red-500 absolute font-nuni font-medium'>{emailErr}</p>
                        </div>


                        {/* Name */}
                        <div className='mt-[30px]'>
                            <div className="name pt-[34px] relative">

                                <label htmlFor=""
                                    className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[25px] transition-all">Full name
                                </label>
                                <input
                                    type="text"
                                    placeholder='Fateha Jahan'
                                    className='block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                                />
                            </div>
                        </div>


                        {/* Password */}
                        <div className='mt-[30px]'>
                            <div className="password pt-[34px] relative">
                                <label htmlFor="" className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[25px] transition-all">Password
                                </label>
                                <input
                                    type="password"
                                    placeholder='. . . .'
                                    className='block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                                />
                            </div>
                        </div>
                    </form>

                    <div className="btn mt-[60px]">
                        <div
                            onClick={handleSubmit}
                            href="#" className='py-[20px] px-[145px] bg-[#5F35F5] text-white font-bold transition duration-300 rounded-full w-[368px] hover:bg-[#11175D] hover:text-white cursor-pointer '>Sign up
                        </div>

                        <a href="#" className=' block pt-[50px] pl-[40px] font-open text-[#03014C] '>Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></a>
                    </div>

                </div>
                <div className="rightSection w-1/2">
                    <img src={reg} alt="" className='w-full h-screen object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Registration