import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';




const ForgotPassword = () => {
    const auth = getAuth();

    const [email, setemail] = useState('')
    const [emailErr, setemailErr] = useState('')

    const Email = (e) => {
        setemail(e.target.value);
        setemailErr('')
    }

    const setPassword = () => {
        if (!email) {
            setemailErr('Please give your email ID')
        }
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success('Please Check Your Email..!!')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(error);

                    if (errorCode.includes('auth/invalid-credential')) {
                        toast.error('Please give your Registered Email id')
                    }
                });
        }
    }

    return (
        <div className='bg-maroon w-full h-screen '>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white w-[500px] py-[20px] px-[20px] rounded-md text-center'>
                    <h1 className='text-[30px] font-nuni font-semibold text-maroon'>Forgot Password</h1>

                    <div className="email md:w-[370px] w-[295px] mx-auto relative pt-[70px]">
                        <label htmlFor="" className='font-open font-normal text-[13px] text-maroon '>
                            Email Addres
                        </label>
                        <input
                            onChange={Email}
                            type="email"
                            placeholder='Youraddres@email.com'
                            className='py-[16px] w-full border-maroon border-opacity-[0.5] border-b-[3px] block focus:border-[#03014C] focus:outline-none placeholder:text-maroon placeholder:font-open placeholder:font-semibold ' />
                        <p className='text-red absolute font-nuni font-medium'>{emailErr}</p>
                    </div>

                    <div className="flex gap-x-[20px]">
                        <p
                            onClick={setPassword}
                            className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '>Reset
                        </p>

                        <Link to='/login'
                            className=' cursor-pointer py-[15px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold text-white rounded-[8px] transition duration-300 hover:bg-maroon hover:bg-opacity-[0.5] hover:text-maroon '> Back to Log in page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword