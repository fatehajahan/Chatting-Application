import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import reg from '../../assets/registration.png'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Comment } from 'react-loader-spinner'
import { getDatabase, ref, set } from "firebase/database";


const Registration = () => {
    const auth = getAuth();
    const db = getDatabase();
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }

    const [fullName, setFullName] = useState("")
    const [fullNameErr, setFullNameErr] = useState("")
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameErr("")
    }

    const [success, setSuccess] = useState("")

    const [pass, setPass] = useState("")
    const [passErr, setPassErr] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const handlePass = (e) => {
        setPass(e.target.value)
        setPassErr("")
    }

    const handleSubmit = () => {
        if (!email) {
            setEmailErr('Please give Your Email Id');
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailErr('Please Give a Valid Email Id')
            }
        }
        if (!fullName) {
            setFullNameErr('Please Give Your Name')
        }
        if (!pass) {
            setPassErr('Please Give a PASSWORD')
        } else {
            if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(pass)) {
                setPassErr('Password must be at least 6 characters long and include a special character.')
            }
        }

        if (/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(pass, email)) {
            createUserWithEmailAndPassword(auth, email, pass, fullName)
                .then((user) => {
                    updateProfile(auth.currentUser, {
                        displayName: fullName, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    })
                        .then(() => {
                            console.log(user);
                            sendEmailVerification(auth.currentUser)
                            setLoading(true)
                            toast.success('Registration Successfully Done');
                            setTimeout(() => {
                                navigate('/login')
                            }, 5000)
                        }).then(() => {
                            set(ref(db, 'users/' + user.user.uid), {
                                username: user.user.displayName,
                                email: user.user.email
                            });
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("auth/email-already-in-use")) {
                        setEmailErr('this email is already taken');
                    }
                });
        }
    }

    return (
        <div>
            <div className="md:flex justify-between items-center">
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
                    transition:Bounce />

                <div className="leftSection md:pl-[190px] relative ">
                    <h1 className='font-nuni text-maroon font-bold md:text-[34px] text-[29px] md:text-left text-center md:pt-0 pt-[20px] '>Get started with easily register</h1>
                    <p className=' font-nuni text-[rgb(0,0,0,0.5)] font-normal text-[20px] md:pt-[13px] pt-[8px] md:text-left text-center '>Free register and you can enjoy it</p>

                    {success && (
                        <p className='text-green-700 text-[15px] font-nuni font-bold absolute'>{success}</p>
                    )}

                    <div className="inputs relative md:pt-[40px] pt-[20px] flex flex-col justify-center items-center md:items-start ">

                        {/* Email */}
                        <div className="mail relative w-[368px]">
                            <label htmlFor=""
                                className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[-7px]">Mail Address
                            </label>
                            <input type="email"
                                onChange={handleEmail}
                                placeholder='youremail@gmai.com'
                                className='block md:py-[26px] py-[18px] px-[30px] md:px-[45px] placeholder-maroon mx-auto md:w-full w-[300px]  border-2 border-[rgb(17,23,93,0.5)] rounded-md  placeholder:text-maroon '
                            />

                            <p className='text-red absolute font-nuni font-medium md:pl-0 pl-[8px]'>{emailErr}</p>
                        </div>

                        {/* Name */}
                        <div className='md:mt-[30px] mt-[10px] w-[368px]'>
                            <div className="name pt-[34px] relative">

                                <label htmlFor=""
                                    className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[25px] transition-all">Full name
                                </label>
                                <input
                                    type="text"
                                    onChange={handleFullName}
                                    placeholder='Fateha Jahan'
                                    className='block md:py-[26px] py-[18px] px-[30px] md:px-[45px] placeholder-maroon w-[300px] md:w-full mx-auto border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                                />
                                <p className='text-red absolute font-nuni font-medium md:pl-0 pl-[8px]'>{fullNameErr}</p>
                            </div>
                        </div>

                        {/* Password */}
                        <div className='md:mt-[30px] mt-[10px] w-[368px]'>
                            <div className="password pt-[34px] relative">
                                {
                                    showPass
                                        ? <FaEyeSlash
                                            onClick={() => setShowPass(!showPass)}
                                            className='absolute md:right-[25px] right-[55px] md:top-[66px] top-[55px] text-[18px] cursor-pointer'
                                        />
                                        : <FaEye
                                            onClick={() => setShowPass(!showPass)}
                                            className='absolute md:right-[25px] right-[55px] md:top-[66px] top-[55px] text-[18px] cursor-pointer'
                                        />
                                }
                                <label htmlFor="" className="font-nuni bg-white absolute px-[20px] text-[14px] left-[53px] top-[25px] transition-all">
                                    Password
                                </label>
                                <input
                                    type={`${showPass ? "text" : "password"}`}
                                    onChange={handlePass}
                                    placeholder='. . . .'
                                    className='block md:py-[26px] py-[18px] px-[30px] md:px-[45px] placeholder-maroon mx-auto md:w-full w-[300px] border-2 border-[rgb(17,23,93,0.5)] rounded-md '
                                />
                                <p className='text-red absolute font-nuni font-medium md:pl-0 pl-[8px] '>{passErr}</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-center '>
                        {
                            loading ? <Comment
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="comment-loading"
                                wrapperStyle={{
                                    marginLeft: "130px",
                                }}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#5F35F5"
                            />
                                : (
                                    <div className="btn mt-[60px] text-center md:w-[368px] md:ml-0  ">
                                        <div
                                            onClick={handleSubmit}
                                            className='py-[20px] bg-maroon text-white font-bold transition duration-300 rounded-full md:w-full w-[320px] mx-auto hover:bg-maroon hover:text-white cursor-pointer'>Sign up
                                        </div>

                                        <Link to="/login" className=' block md:pt-[50px] pt-[30px]  font-open text-[#03014C] '>Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></Link>
                                    </div>
                                )
                        }

                    </div>
                </div>
                <div className="rightSection w-1/2">
                    <img src={reg} alt="" className='w-full h-screen object-cover md:block hidden' />
                </div>
            </div>
        </div>
    )
}

export default Registration