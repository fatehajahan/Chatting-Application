import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";

import rag from '../../assets/rag.png'
import swa from '../../assets/swa.png'
import kir from '../../assets/kir.png'
import tejas from '../../assets/tejas.png'
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from 'react-redux';

const UserBlock = () => {
    const data = useSelector((selector) => selector.userDetails.userInfo)
    const db = getDatabase();
    const [friendRequestList, setFriendRequestList] = useState([])
    const [friendList, setFriendList] = useState([])
    const [userList, setUserList] = useState([])
    const [blockList, setBlockList] = useState([])
    //users part
    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (data.uid != item.key) {
                    arr.push({ ...item.val(), userid: item.key })
                }
            })
            setUserList(arr)
        });
    }, []);

    const handleFriendReq = (item) => {
        console.log('lala', item);
        set(push(ref(db, 'friendRequest/')), {
            sendername: data.displayName,
            senderid: data.uid,
            receivername: item.username,
            receiverid: item.userid
        });
        console.log(item);
    };

    useEffect(() => {
        const friendReqRef = ref(db, 'friendRequest/');
        onValue(friendReqRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val().receiverid + item.val().senderid);
            })
            setFriendRequestList(arr)
        });
    }, []);

    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val().receiverid + item.val().senderid);
            })
            setFriendList(arr)
        });
    }, []);


    //blocks
    useEffect(() => {
        const blockRef = ref(db, 'block/');
        onValue(blockRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (data.uid == item.val().blockbyid) {
                    arr.push({ ...item.val(), key: item.key })
                }
            })
            setBlockList(arr)
        });
    }, []);
    console.log(blockList);

    const handleUnblock = (item) => {
        remove(ref(db, 'block/' + item.key))
        set(push(ref(db, 'block/')), {
            block: item.sendername,
            blockid: item.senderid,

            blockby: item.receivername,
            blockbyid: item.receiverid
        });
    }
    return (
        <div className=' flex flex-col gap-y-[36px] p-[20px]'>
            <div className="users pt-[19px] pb-[40px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex justify-between items-center">
                    <h2 className='font-pops font-semibold text-[20px]'>User List</h2>
                    <CiMenuKebab className=' cursor-pointer ' />
                </div>

                <div className="ids">
                    {
                        userList.map((item, index) => (
                            <div key={userList.id || index} className="id1 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={rag} alt="" width='52px' />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[12px]'>
                                            {item.username}
                                        </h3>
                                        <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>
                                            {item.email}
                                        </p>
                                    </div>
                                </div>

                                {
                                    blockList.includes(data.uid + item.blockid) || blockList.includes(item.blockid + data.uid) ? <div onClick={() => handleUnblock(item)} className="joinbtn bg-maroon px-[8px] rounded-[5px] cursor-pointer">
                                        <h4 className='text-[12px] text-white font-pops font-semibold '>Blocked</h4>
                                    </div> :
                                        friendList.includes(data.uid + item.userid) || friendList.includes(item.userid + data.uid)
                                            ? <div className="joinbtn bg-maroon px-[8px] rounded-[5px] cursor-pointer"><h4 className='text-[14px] text-white font-pops font-semibold '>Friend</h4></div>
                                            :
                                            friendRequestList.includes(data.uid + item.userid) || friendRequestList.includes(item.userid + data.uid)
                                                ? <div className="joinbtn bg-maroon px-[8px] rounded-[5px] cursor-pointer">
                                                    <h4 className='text-[12px] text-white font-pops font-semibold '>Pending</h4>
                                                </div>
                                                : <div onClick={() => handleFriendReq(item)} className="joinbtn bg-maroon px-[8px] rounded-[5px] cursor-pointer">
                                                    <h4 className='text-[14px] text-white font-pops font-semibold '>+</h4>
                                                </div>
                                }

                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="blocked-users pt-[19px] pb-[20px] px-[22px] drop-shadow-xl bg-white rounded-2xl ">
                <div className="title flex justify-between items-center">
                    <h2 className='font-pops font-semibold text-[20px]'>Blocked Users</h2>
                    <CiMenuKebab className='cursor-pointer ' />
                </div>

                <div className="ids">
                    {
                        blockList.map((item, index) => (
                            <div key={blockList.id || index} className="id1 pt-[17px] flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={rag} alt="" width='52px' />
                                    <div className="block pl-[14px]">
                                        <h3 className='font-pops font-semibold text-[12px]'>{item.block}</h3>
                                        <p className='font-pops font-medium text-[12px] text-[#4D4D4D] '>Dinner?</p>
                                    </div>
                                </div>

                                <div onClick={() => handleUnblock(item)} className="joinbtn bg-maroon px-[8px] rounded-[5px] cursor-pointer">
                                    <h4 className='text-[14px] text-white font-pops font-semibold '>unblock</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UserBlock