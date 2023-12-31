import React, { useState } from 'react'
import ChatBox from './ChatBox'
import socket from '../../Socket'
import Messages from './Messages'

export default function ChatWindow() {
  const [messages, setMessages] = useState([] as string[])

  function newMessage(str: string) {
    setMessages([str, ...messages])
  }

  socket.on('disconnect', () => newMessage('session over'))
  socket.on('new message', (msg) => newMessage(msg))

  return (
    <div className="w-2/3 flex flex-col sm:px-10 max-sm:px-5">
      <div className=" bg-gradient-to-r from-[#B7DB5B] to-transparent w-full rounded-bl-lg p-3 text-white font-semibold h-[7%]">
        User: {socket.id}
      </div>

      <Messages messages={messages} />

      <ChatBox socket={socket} />
    </div>
  )
}
