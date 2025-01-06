import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';

const FriendsGroup = () => {
    const data = useSelector((selector) => selector.userDetails.userInfo)
    const [friendList, setFriendList] = useState([])
    const db = getDatabase();
    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (data.uid == item.val().receiverid || data.uid == item.val().senderid) {
                    arr.push({ ...item.val(), key: item.key });
                }
            })
            setFriendList(arr)
        });
    }, []);
    console.log(friendList, 'lllll');

    //block part
    const handleBlock = (item) => {
        console.log(item, 'oooo');
        if (data.uid == item.senderid) {
            set(push(ref(db, 'block/')), {
                block: item.receivername,
                blockid: item.receiverid,

                blockby: item.sendername,
                blockbyid: item.senderid
            }).then(() => {
                remove(ref(db, 'friend/' + item.key))
            })
        } else {
            set(push(ref(db, 'block/')), {
                block: item.sendername,
                blockid: item.senderid,

                blockby: item.receivername,
                blockbyid: item.receiverid
            }).then(() => {
                remove(ref(db, 'friend/' + item.key))
            })
        }
    }
    return (
        <div className='flex flex-col gap-y-[43px] p-[20px]'>
            <div className="friends pt-[19px] pb-[60px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex justify-between items-center ">
                    <h2 className='font-pops font-semibold text-[20px]'>Friends</h2>
                    <CiMenuKebab className=' ml-[280px] cursor-pointer ' />
                </div>

                <div className="ids">
                    {
                        friendList.map((item, index) => (
                            <div key={friendList.id || index} className="id1 pt-[40px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={rag} alt="" width='52px' />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[12px]'>
                                            {item.receiverid == data.uid
                                                ? item.sendername
                                                : item.receivername}
                                        </h3>
                                        <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Dinner?</p>
                                    </div>
                                </div>

                                <div onClick={() => handleBlock(item)} className="joinbtn bg-maroon px-[22px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[16px] text-white font-pops font-semibold '>Block</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="groups pt-[19px] pb-[70px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex justify-between items-center ">
                    <h2 className='font-pops font-semibold text-[20px]'>My Groups</h2>
                    <CiMenuKebab className=' cursor-pointer ' />
                </div>

                <div className="ids">
                    <div className="id1 mt-[32px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={rag} alt="" width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Raghav</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Dinner?</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id2 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={swa} alt="" width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Swathi</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Sure!</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={kir} alt="" width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Kiran</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Hi.....</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>

                    <div className="id3 pt-[17px] flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={tejas} alt="" width='52px' />
                            <div className="block pl-[14px]">
                                <h3 className='font-pops font-semibold text-[12px]'>Tejeshwini C</h3>
                                <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>I will call him today.</p>
                            </div>
                        </div>

                        <p className='font-pops font-medium text-[10px] text-[rgb(0,0,0,0.5)]'>Today, 8:56pm</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FriendsGroup