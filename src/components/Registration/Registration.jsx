import React, { useState } from 'react'
import reg from '../../assets/registration.png'

const Registration = () => {
    const [up, setup] = useState({
        mail: false,
        name: false,
        password: false,
    });

    return (
        <div>
            <div className="flex justify-between">
                <div className="leftSection w-1/2 pt-[110px] pl-[190px]">
                    <h1 className='font-nuni text-[#11175D] font-bold text-[34px] '>Get started with easily register</h1>
                    <p className=' font-nuni text-[rgb(0,0,0,0.5)] font-normal text-[20px] pt-[13px] '>Free register and you can enjoy it</p>

                    <div className="inputs relative pt-[40px]">
                        <div className="mail">
                            <label htmlFor="mail" className={`bg-white absolute  py-[12px] px-[20px] top-[55px] left-[53px] transition-all ${up.mail
                                ? 'top-[15px] left-[53px]'
                                : 'top-[20px] text-base'
                                }`}>Mail Address</label>
                            <input type="mail" placeholder=' '
                                onFocus={() => setup({ ...up, mail: true })}
                                onBlur={() => setup({ ...up, mail: false })}
                                className='  block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md ' />
                        </div>

                        <div className="name pt-[34px] relative">
                            <label htmlFor="" className={`bg-white absolute  py-[12px] px-[20px] top-[50px] left-[53px] transition-all ${up.name
                                ? 'top-[15px] left-[53px]'
                                : 'top-[20px] text-base'
                                }`}>Full name</label>
                            <input type="text" placeholder=''
                                onFocus={() => setup({ ...up, name: true })}
                                onBlur={() => setup({ ...up, name: false })}
                                className='  block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md ' />
                        </div>

                        <div className="password pt-[34px] relative">
                            <label htmlFor="" className={`bg-white absolute  py-[12px] px-[20px] top-[50px] left-[53px] transition-all ${up.password
                                ? 'top-[15px] left-[53px]'
                                : 'top-[20px] text-base'
                                }`}>Password</label>
                            <input type="password" placeholder=''
                             onFocus={() => setup({ ...up, password: true })}
                             onBlur={() => setup({ ...up, password: false })}
                             className='  block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md  ' />
                        </div>
                    </div>

                    <div className="btn mt-[60px]">
                        <a href="#" className='py-[20px] px-[145px] bg-[#5F35F5] text-white font-bold transition duration-300 rounded-full w-[368px] hover:bg-[#11175D] hover:text-white '>Sign up</a>

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