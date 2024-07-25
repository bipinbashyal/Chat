import React from 'react'
import { useState } from 'react'
import SearchBar from '../components/searchbar.jsx'
import SendBar from '../components/sendbar.jsx'
import FriendBlock from '../components/friendblock.jsx'
import SentMessage from '../components/sentmessage.jsx'
import ReceivedMessage from '../components/receivedmessage.jsx'
import { IconContext } from 'react-icons'
import FileUpload from '../components/fileupload.jsx'
import PhotoUpload from '../components/photoupload.jsx'
import SendVoice from '../components/sendvoice.jsx'

const messages=[
  {
    time:1,
    content:"Hello it's a text message",
    type:"received"
  },
  {
    time:2,
    content:"Hello it's a sent text message",
    type:"sent"
  },
  {
    time:3,
    content:"Hello it's another received text message",
    type:"received"
  },
  {
    time:4,
    content:"Hello it's another sent text message",
    type:"sent"
  }
]


function Home() {
  const[value,setValue]=useState("");

  const friendsList=["Bipin Bashyal","Ayush K.C.","Bishal Lamichhane","Bipin Bashyal","Ayush K.C.","Bishal Lamichhane","Bipin Bashyal","Ayush K.C.","Bishal Lamichhane"];
  const filteredList=friendsList.filter((friend)=>{
    const friendLower=friend.toLowerCase();
    const valueLower=value.toLowerCase();
    if(friendLower.includes(valueLower)){return true;}
    else return false;
  })

  const renderedFriends=filteredList.map(friend=> FriendBlock(friend,setValue))

  return (
    
    <div className='flex w-[80vw] m-auto bg-[#D9D9D9] h-[80vh] mt-10 overflow-hidden'>
      <div className='flex-[23vw] bg-[#265073] flex flex-col items-center '>
        <div className='my-[1vw] w-full cursor-pointer'>
          <SearchBar setValue={setValue} value={value}/>
        </div>
        <div className='overflow-y-scroll min-h-[31vw] w-full'>
          {renderedFriends}
        </div>
      </div>

      <div className='flex-[70%] flex flex-col-reverse'>
        <div className='w-full bg-slate-400 flex items-center'>
          <div className='flex-[20%] flex items-center h-full justify-between mx-[1vw]'>
            <IconContext.Provider value={{size:23}}>
              <FileUpload/>
              <PhotoUpload/>
              <SendVoice/>
            </IconContext.Provider>

          </div>
          <div className='w-full m-[0.5vw]'>
            <SendBar/>
          </div>
        </div>
        <div className='flex flex-col-reverse overflow-y-scroll min-h-[30vw]'>
          {
            messages.map(message=>{
              if(message.type==="sent"){
                return <SentMessage>{message.content}</SentMessage>
              }else{
                return <ReceivedMessage>{message.content}</ReceivedMessage>
              }
            })
          }
          <SentMessage>This is sent message. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum debitis architecto. In, officia totam? Obcaecati rerum, qui recusandae ipsam officia odio necessitatibus eos dolorum tempore vel ipsum porro. Ad.</SentMessage>
          <div className='h-full'></div>
        </div>
      </div >

    </div>
  )
}

export default Home
