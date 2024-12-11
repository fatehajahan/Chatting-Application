import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import GroupList from '../../components/GroupList/GroupList'
import FriendsGroup from '../../components/FriendsGroup/FriendsGroup'
import UserBlock from '../../components/UserBlock/UserBlock'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const ProfilePage = () => {
  const auth = getAuth();

  const data = useSelector((state) => state.userDetails.userInfo)
  const [verify, setVerify] = useState(false)
  const navigate = useNavigate()
  console.log(data);
  useEffect(() => {
    if (!data) {
      navigate('/login')
    }
  })

  onAuthStateChanged(auth, (user) => {
    console.log(user, 'dfdf');
    
    if (user.emailVerified) {
      setVerify(true)
    } else {
      setVerify(false)
    }
  });
  
  return (
    <div className=''>
      {
        verify ? (
          <>
            <div className='flex gap-x-[20px] p-[20px]'>
              <div className='w-1/4 max-h-svh'>
                <SideBar />
              </div>

              <div className='w-1/4 '>
                <GroupList />
              </div>

              <div className='w-1/4 '>
                <FriendsGroup />
              </div>

              <div className='w-1/4 '>
                <UserBlock />
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className='text-[50px] font-nuni font-bold text-center '>Please Verify Your Email.</h2> 
            <Link to= "/login" className='text-center text-[20px] font-bold bg-[#5F34F5] text-white font-nuni py-[20px] px-[40px] rounded-md mx-auto flex justify-center w-[300px] transition hover:bg-[rgb(95,52,245,0.8)] mt-[20px] '>Go Back to Login Page</Link>
          </div>
        )
      }
    </div>
  )
}

export default ProfilePage