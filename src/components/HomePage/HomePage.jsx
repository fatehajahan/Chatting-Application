import React from 'react'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.jpg'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className='pb-[90px]'>
          <div className="flex justify-between items-center ">
            <img src={logo} alt="" className='md:w-[20%] w-[40%]' />
            <p className=' w-[80%] font-nuni font-semibold md:text-[40px] text-[20px] text-[#5F34F5] text-right '>Chatting <span className='block'>Application</span></p>
          </div>
          <div className="banner text-center ">
            <img src={banner} alt="" className='mx-auto pb-[50px]' />
            <Link 
            to="/registration" 
            className='bg-[#5F34F5] py-[20px] px-[100px] rounded-xl text-white font-nuni text-[25px] font-bold transition duration-500 hover:bg-[rgb(95,52,245,0.3)] hover:text-[#5F34F5] '>Get Started</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage