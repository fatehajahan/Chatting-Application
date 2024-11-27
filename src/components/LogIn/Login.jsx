import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import login from '../../assets/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [logemail, setLogemail] = useState('')
  const [logemailErr, setLogemailErr] = useState('')

  const logEmail = (e) => {
    setLogemail(e.target.value);
    setLogemailErr('')
  }

  const [logpass, setLogpass] = useState('')
  const [logpasserr, setLogpassErr] = useState('')
  const [logshowpass, setLogshowpass] = useState(false)

  const logPass = (e) => {
    setLogpass(e.target.value)
    setLogpassErr('')
  }

  const logIn = () => {
    if (!logemail) {
      setLogemailErr('Please give your email ID')
    }
    if (!logpass) {
      setLogpassErr('Please Enter Your password')
    }
  }

  return (
    <div className=''>
      <div className="md:flex items-center ">
        <div className="md:w-1/2 md:pt-0 pt-[30px] flex flex-col items-center">
          <div className='title'>
            <h1 className='font-open text-[33px] text-[#03014C] font-bold pb-[29px]'>Login to your account!</h1>

            <div className='flex items-center border-2 border-[rgb(3,1,76,0.5)] w-[220px] py-[23px] justify-center rounded-md gap-x-[10px] cursor-pointer mx-auto'>
              <FcGoogle className='text-[30px]' />
              <p className='text-[13px] font-open font-semibold text-[#03014C]'>Login with Google</p>
            </div>
          </div>

          <div className="inputs ">
            <div className="email md:w-[370px] w-[330px] mx-auto relative pt-[32px]">
              <label htmlFor="" className='font-open font-normal text-[13px] text-[rgb(3,1,76,0.6)] '>
                Email Addres
              </label>
              <input
                onChange={logEmail}
                type="email"
                placeholder='Youraddres@email.com'
                className='py-[16px] w-full border-[rgb(3,1,76,0.3)] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C] placeholder:font-open placeholder:font-semibold ' />
              <p className='text-red-500 absolute font-nuni font-medium'>{logemailErr}</p>
            </div>

            <div className="password md:w-[370px] w-[330px] mx-auto relative mt-[60px]">
              {
                logshowpass
                  ? <FaEyeSlash
                    onClick={() => setLogshowpass(!logshowpass)}
                    className='absolute md:right-[25px] right-[15px] top-[54%] text-[18px] cursor-pointer'
                  />
                  : <FaEye
                    onClick={() => setLogshowpass(!logshowpass)}
                    className='absolute md:right-[25px] right-[15px] top-[54%] text-[18px] cursor-pointer'
                  />
              }
              <label htmlFor="" className='font-open font-normal text-[13px] text-[rgb(3,1,76,0.6)] '>
                Password
              </label>
                <input
                  onChange={logPass}
                  type={`${logshowpass ? "text" : "password"}`}
                  placeholder='Enter your password'
                  className='py-[16px] w-full border-[rgb(3,1,76,0.3)] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C] placeholder:font-open placeholder:font-semibold bg-transparent ' />
              <p className='text-red-500 absolute font-nuni font-medium' >{logpasserr}</p>
            </div>
          </div>

          <div className="btns md:w-[370px] w-[330px] mx-auto">
            <p
              onClick={logIn}
              className=' cursor-pointer py-[26px] w-full text-center mt-[55px] bg-[#5F34F5] font-open text-[20px] font-semibold  text-white rounded-[8px] md:mb-[44px] mb-[30px] '>Login to Continue</p>

            <Link to="/registration" className='font-open font-normal text-[13px] text-[#03014C]'>Don’t have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></Link>
          </div>

        </div>


        <div className="md:w-1/2">
          <img src={login} alt="" className='w-full md:block hidden h-screen object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Login