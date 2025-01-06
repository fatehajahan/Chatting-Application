import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import id1 from '../../assets/id1.png'
import id2 from '../../assets/id2.png'
import id3 from '../../assets/id3.png'

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';

const GroupList = () => {
    const data = useSelector((selector) => selector.userDetails.userInfo)
    const db = getDatabase();
    const [friendRequestList, setFriendRequestList] = useState([])
    useEffect(() => {
        console.log(friendRequestList);

        const friendReqRef = ref(db, 'friendRequest/');
        onValue(friendReqRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                console.log(item.val());
                if (data.uid == item.val().receiverid) {
                    arr.push({...item.val(), userid: item.key})
                }
            })
            setFriendRequestList(arr)
        });
    }, []);

    const handleFriend = (item) => {
        console.log(item);
        set(push(ref(db, 'friend/')), {
            ...item
        }).then(()=>{
            remove(ref(db , 'friendRequest/' + item.userid))
        })
    }
    return (
        <div className='p-[20px]'>
            <div className="search flex justify-between items-center relative ">
                <FaSearch className='absolute ml-[23px] z-10' />
                <CiMenuKebab className='absolute ml-[380px] z-10 cursor-pointer' />
                <input type="search" placeholder='search' className='py-[17px] pl-[78px] w-[427px] rounded-[20px] drop-shadow-md' />
            </div>

            <div className="grouplist py-[21px] px-[22px] mt-[43px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex items-center justify-between ">
                    <h2 className='font-pops font-semibold text-[20px]'>Groups List</h2>
                    <CiMenuKebab className=' cursor-pointer ' />
                </div>

                <div className="ids">
                    <div className="id1 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={id1} alt="" />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[14px]'>Friends Reunion</h3>
                                <p className='font-pops font-medium text-[14px] text-[#4D4D4D] pr-[51px]'>Hi Guys, Wassup!</p>
                            </div>
                        </div>

                        <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                            <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                        </div>
                    </div>

                    <div className="id2 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={id2} alt="" />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[14px]'>Friends Forever</h3>
                                <p className='font-pops font-medium text-[14px] text-[#4D4D4D]'>Good to see you.</p>
                            </div>
                        </div>

                        <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                            <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                        </div>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className='flex items-center'>
                            <img src={id3} alt="" />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[14px]'>Crazy Cousins</h3>
                                <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>What plans today?</p>
                            </div>
                        </div>

                        <div className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                            <h4 className='text-[20px] text-white font-pops font-semibold '>Join</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="frndreq py-[21px] px-[22px] mt-[30px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex justify-between items-center ">
                    <h2 className='font-pops font-semibold text-[20px]'>Friend  Request</h2>
                    <CiMenuKebab className=' cursor-pointer ' />
                </div>

                <div className="ids">
                    {
                        friendRequestList.map((item, index) => (
                            <div key={friendRequestList.id || index} className="id1 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={rag} alt="" />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[14px]'>{item.sendername}</h3>
                                        <p className='font-pops font-medium text-[14px] text-[#4D4D4D] '>Dinner?</p>
                                    </div>
                                </div>

                                <div onClick={() => handleFriend(item)} className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[20px] text-white font-pops font-semibold '>Accept</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GroupList