import React from 'react'
import UserWindow from './user/UserWindow'
import ChatWindow from './chat/ChatWindow'

export default function Home() {
  // TO DO: need variable styling on this for the userwindow to be the only thing visible
  return (
    <div className="flex flex-row p-3 h-[86%] ">
      <UserWindow />
      <ChatWindow />
    </div>
  )
}
