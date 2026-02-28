import React from 'react';
import chat from '../assets/chat.png';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {createRoomApi, joinChatApi} from '../services/RoomService';
import useChatContext from '../context/ChatContext';
import {useNavigate} from 'react-router';

const JoinCreateChat = () => {
  const [detail, setDetail] = useState({
    roomId: '',
    userName: '',
  });

  const {roomId, userName, connected, setRoomId, setCurrentUser, setConnected} =
    useChatContext();
  const navigate = useNavigate();
  function handleFormInputChange(event) {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  }

  function validateForm() {
    if (detail.userName === '' || detail.roomId === '') {
      toast.error('Invalid input !!');
      return false;
    }
    return true;
  }

  async function joinChat() {
    if (validateForm()) {
      //join chat

      try {
        const room = await joinChatApi(detail.roomId);
        toast.success('Room joined successfully !!');
        setCurrentUser(detail.userName);
        setRoomId(room.roomId);
        setConnected(true);
        navigate('/chat');
      } catch (error) {
        if (error.status == 400) {
          toast.error(error.response.data);
        } else {
          toast.error('Error in joining room !!');
        }

        console.log(error);
      }
    }
  }

  async function creatRoom() {
    if (validateForm()) {
      //create room
      console.log(detail);
      // call api to create room on backend
      try {
        const response = await createRoomApi(detail.roomId);
        console.log(response);
        toast.success('Room created successfully !!');
        //join the join
        setCurrentUser(detail.userName);
        setRoomId(detail.roomId);
        setConnected(true);

        navigate('/chat');

        //forward to chat page..
      } catch (error) {
        console.log(error);
        if (error.status == 400) {
          toast.error('Room already exist !!');
        } else {
          toast.error('Room creation failed !!');
        }
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-10 border dark:border-gray-700 w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
        <div>
          <img src={chat} alt="chatIcon" className="w-24 mx-auto" />
        </div>
        <h1 className="text-2xl font-semibold text-center">
          Join Room / Create Room...
        </h1>
        {/* name div */}
        <div className="">
          <lable htmlFor="" className="block font-medium mb-2">
            Your name
          </lable>
          <input
            onChange={handleFormInputChange}
            value={detail.userName}
            type="text"
            id="name"
            name="userName"
            placeholder="Enter your name"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Room id div */}
        <div className="">
          <lable htmlFor="" className="block font-medium mb-2">
            Room ID/ New Room ID
          </lable>
          <input
            onChange={handleFormInputChange}
            value={detail.roomId}
            name="roomId"
            type="text"
            id="name"
            placeholder="Enter Room ID"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* button */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={joinChat}
            className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full"
          >
            Join Room
          </button>
          <button
            onClick={creatRoom}
            className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full"
          >
            Create Room
          </button>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
          &copy; {new Date().getFullYear()} Copyright{' '}
          <span className="font-semibold">Sandeep Kumar</span>
        </p>
      </div>
    </div>
  );
};

export default JoinCreateChat;
