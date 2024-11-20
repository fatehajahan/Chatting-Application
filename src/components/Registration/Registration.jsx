import React, { useState } from 'react'
import reg from '../../assets/registration.png'

const Registration = () => {
    const [up, setUp] = useState({
        email: false,
        name: false,
        password: false,
    });
    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    };

    return (
        <div>
            <div className="flex justify-between">
                <div className="leftSection w-1/2 pt-[110px] pl-[190px]">
                    <h1 className='font-nuni text-[#11175D] font-bold text-[34px] '>Get started with easily register</h1>
                    <p className=' font-nuni text-[rgb(0,0,0,0.5)] font-normal text-[20px] pt-[13px] '>Free register and you can enjoy it</p>

                    <form className="inputs relative pt-[40px]">
                        <div className="mail relative">
                            {/* Email */}
                            <input type="email"
                                placeholder=' '
                                id="email"
                                value={values.email}
                                onChange={handleInputChange}
                                className='block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                                onFocus={() => setUp({ ...up, email: true })}
                                onBlur={() => setUp({ ...up, email: false })} />

                            <label htmlFor="mail" className={`font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] transition-all 
                                ${up.email || values.email
                                    ? 'text-[14px] -top-[10px] transform scale-90'
                                    : 'top-[30px] text-[14px]'
                                }`}>Mail Address
                            </label>
                        </div>



                        {/* Name */}
                        <div className="name pt-[34px] relative">

                            <input
                                type="name"
                                placeholder=' '
                                id="name"
                                value={values.name}
                                onChange={handleInputChange}
                                onFocus={() => setUp({ ...up, name: true })}
                                onBlur={() => setUp({ ...up, name: false })}
                                className='  block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                            />

                            <label htmlFor="" className={` font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] transition-all 
                               ${up.name || values.name
                                    ? 'text-[14px] top-[25px] transform scale-90 font-nuni '
                                    : 'top-[60px] text-[14px]'
                                }`}>Full name
                            </label>
                        </div>


                        {/* Password */}
                        <div className="password pt-[34px] relative">
                            <input
                                type="password"
                                placeholder=' '
                                id="password"
                                value={values.password}
                                onChange={handleInputChange}
                                onFocus={() => setUp({ ...up, password: true })}
                                onBlur={() => setUp({ ...up, password: false })}
                                className='  block py-[26px] px-[45px] placeholder-[#11175D] w-[368px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                            />

                            <label htmlFor="" className={` font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] transition-all 
                               ${up.password || values.password
                                    ? 'text-[14px] top-[25px] transform scale-90 font-nuni '
                                    : 'top-[62px] text-[14px]'
                                }`}>Password
                            </label>
                        </div>
                    </form>

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