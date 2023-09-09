import React from 'react'
import { IoChatbubbleOutline, IoCallOutline } from 'react-icons/io5'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const navigate = useNavigate()
  const { logout } = useAuth0()
  // TO DO: change links in nav to go to specific pages
  // To DO: add links to index.tsx
  return (
    <div className="bg-[#95B93C] w-full h-[7%]  rounded-t-lg p-2 text-white flex justify-between">
      <div className="flex flex-row space-x-10">
        <IoChatbubbleOutline size={30} onClick={() => navigate('/')} />
        <IoCallOutline size={30} onClick={() => navigate('/')} />
        <BsPerson size={30} onClick={() => navigate('/profile')} />
      </div>
      <div>
        <AiOutlineLogout
          size={30}
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } })
          }}
        />
      </div>
    </div>
  )
}
