import React, { useState } from 'react'
import ChatBox from './ChatBox'
import socket from '../Socket'

export default function ChatWindow() {
  const [messages, setMessages] = useState([] as string[])
  function newMessage(str: string) {
    setMessages([str, ...messages])
  }

  socket.on('connect', () => newMessage(`Welcome ${socket.id}`))
  socket.on('disconnect', () => newMessage('session over'))

  socket.on('chat message', (msg) => newMessage(msg))

  return (
    <div>
      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
      <ChatBox socket={socket} />
    </div>
  )
}
