import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import GroupList from '../../components/GroupList/GroupList'
import FriendsGroup from '../../components/FriendsGroup/FriendsGroup'
import UserBlock from '../../components/UserBlock/UserBlock'

const ProfilePage = () => {
  return (
    <div className='h-screen'>
      <div className='flex gap-x-[20px] py-[20px]'>
        <div className='w-[186px]'>
          <SideBar />
        </div>

        <div className='w-[427px]'>
          <GroupList />
        </div>

        <div className='w-[344px]'>
          <FriendsGroup />
        </div>

        <div className='w-[344px]'>
          <UserBlock />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage