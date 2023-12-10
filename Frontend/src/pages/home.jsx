import React from 'react'
import SearchBar from '../components/searchbar.jsx'
import FriendBlock from '../components/friendblock.jsx'

function Home() {
  return (
    <div className='flex w-[80vw] m-auto bg-[#D9D9D9] h-[80vh] mt-10'>
      <div className='flex-[23vw] bg-[#265073] flex flex-col items-center '>
        <div className='my-3'>
          <SearchBar/>
        </div>
        <div className='overflow-y-scroll'>
          <FriendBlock>Bipin Bashyal</FriendBlock>
          <FriendBlock>Bipin Bashyal</FriendBlock>
          <FriendBlock>Bishal Lamichhane</FriendBlock>
          <FriendBlock>Bishal Lamichhane</FriendBlock>
          <FriendBlock>Bishal Lamichhane</FriendBlock>
          <FriendBlock>Bishal Lamichhane</FriendBlock>
          <FriendBlock>Ayush K.C.</FriendBlock>
        </div>
      </div>
      <div className='flex-[70%]'>
        messages div
      </div >
    </div>
  )
}

export default Home
