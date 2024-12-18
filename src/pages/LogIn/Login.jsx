import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import login from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { Provider, useDispatch } from 'react-redux';
import { userLoginInfo } from '../../Slices/userSlice';

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState("");

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


  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        toast.success('Logged in with Google successfully');
        setTimeout(() => {
          navigate('/profilepage');
        }, 2000);

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const logIn = () => {
    if (!logemail) {
      setLogemailErr('Please give your email ID')
    }
    if (!logpass) {
      setLogpassErr('Please Enter Your password')
    }
    if (logemail) {
      signInWithEmailAndPassword(auth, logemail, logpass)
        .then((user) => {
          console.log(user.user);
          dispatch(userLoginInfo(user.user))
          localStorage.setItem("userLoginInfo", JSON.stringify(user.user));
          console.log('log in done');
          toast.success('login successfully done')
          setTimeout(() => {
            navigate('/profilepage')
          }, 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            setLoginErr('Please give your Registered email id and Password...!!')
          }
        });
    }
  }



  return (
    <div >
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
      <div className="md:flex items-center ">
        <div className="md:w-1/2 md:pt-0 pt-[30px] flex flex-col items-center">
          <div className='title'>
            <h1 className='font-open md:text-[33px] text-[25px] text-maroon font-bold pb-[29px]'>Login to your account!</h1>

            <div
              onClick={googleLogin}
              className='flex items-center border-2 border-[rgb(3,1,76,0.5)] md:w-[220px] w-[170px] md:py-[23px] py-[18px] justify-center rounded-md gap-x-[10px] cursor-pointer md:mx-0 mx-auto'>
              <FcGoogle className='md:text-[30px] text-[20px]' />
              <p className='md:text-[13px] text-[10px] font-open font-semibold text-[#03014C]'>Login with Google</p>
            </div>
          </div>


          <div className="inputs ">
            <div className='relative font-nuni text-[15px] font-semibold mt-[10px] '><p className='absolute  text-red-600 py-[8px] px-[8px] rounded-md'>{loginErr}</p></div>
            <div className="email md:w-[370px] w-[295px] mx-auto relative pt-[70px]">
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

            <div className="password md:w-[370px] w-[295px] mx-auto relative mt-[60px]">
              {
                logshowpass
                  ? <FaEyeSlash
                    onClick={() => setLogshowpass(!logshowpass)}
                    className='absolute md:right-[10px] right-[15px] top-[54%] text-[18px] cursor-pointer'
                  />
                  : <FaEye
                    onClick={() => setLogshowpass(!logshowpass)}
                    className='absolute md:right-[10px] right-[15px] top-[54%] text-[18px] cursor-pointer'
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

          <div className="btns md:w-[370px] w-[295px] mx-auto">
            <p
              onClick={logIn}
              className=' cursor-pointer md:py-[26px] py-[18px] w-full text-center mt-[55px] bg-maroon font-open text-[20px] font-semibold  text-white rounded-[8px] md:mb-[30px] mb-[30px] '>Login to Continue
            </p>
            <Link to='/forgotpassword' className='block text-maroon font-nuni font-semibold '>Forgot Password</Link>
            <Link to="/registration" className='font-open font-normal text-[13px] text-[#03014C] mt-[20px]'>Don’t have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></Link>
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