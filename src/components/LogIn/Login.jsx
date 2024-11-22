import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import login from '../../assets/login.png'

const Login = () => {
  return (
    <div>
      <div className="flex items-center ">
        <div className="w-1/2 flex flex-col items-center">
          <div className='title'>
            <h1 className='font-open text-[33px] text-[#03014C] font-bold pb-[29px]'>Login to your account!</h1>

            <div className='flex items-center border-2 border-[rgb(3,1,76,0.5)] w-[220px] py-[23px] justify-center rounded-md gap-x-[10px] cursor-pointer'>
              <FcGoogle className='text-[30px]' />
              <p className='text-[13px] font-open font-semibold text-[#03014C]'>Login with Google</p>
            </div>
          </div>

          <div className="inputs ">
            <div className="email pt-[32px]">
              <label htmlFor="" className='font-open font-normal text-[13px] text-[rgb(3,1,76,0.6)] '>
                Email Addres
              </label>
              <input type="email" placeholder='Youraddres@email.com' className='py-[16px] w-[370px] border-[rgb(3,1,76,0.3)] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C] placeholder:font-open placeholder:font-semibold ' />
            </div>

            <div className="password pt-[60px]">
              <label htmlFor="" className='font-open font-normal text-[13px] text-[rgb(3,1,76,0.6)] '>
                Password
              </label>
              <div className='flex items-center relative'>
                <input type="email" placeholder='Enter your password' className='py-[16px] w-[370px] border-[rgb(3,1,76,0.3)] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C] placeholder:font-open placeholder:font-semibold  ' />
                <FaEye className='absolute top-[20px] right-[0px] cursor-pointer text-[26px] ' />
              </div>
            </div>
          </div>

          <div className="btns">
            <p className=' cursor-pointer py-[26px] w-[370px] text-center mt-[55px] bg-[#5F34F5] font-open text-[20px] font-semibold  text-white rounded-[8px] '>Login to Continue</p>

            <p className='font-open font-normal text-[13px] text-[#03014C] pt-[44px]'>Don’t have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></p>
          </div>

        </div>


        <div className="w-1/2">
          <img src={login} alt="" className='w-full h-screen object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Login