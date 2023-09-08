import React from 'react'
import { IoChatbubbleOutline, IoCallOutline } from 'react-icons/io5'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()

  // TO DO: change links in nav to go to specific pages
  // To DO: add links to index.tsx
  return (
    <div className="bg-[#95B93C] w-full flex flex-initial space-x-10 rounded-t-lg p-2 text-white">
      <IoChatbubbleOutline size={30} onClick={() => navigate('/')} />
      <IoCallOutline size={30} onClick={() => navigate('/')} />
      <BsPerson size={30} onClick={() => navigate('/')} />
    </div>
  )
}
