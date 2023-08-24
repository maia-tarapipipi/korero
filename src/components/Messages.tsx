import React from 'react'
import io from 'socket.io-client'

//may need to pass the URL
// const url = 'http://loaclhost:3000'
// const url = 'deployed site  url'

const socket = io()

export default function Messages() {

  

  return (
    <div>
      heres where the messages will go!
      {/* messages.map((msg) => 
    <p>msg.name</p>
    <p>msg.message</p>
    <p>msg.date</p>
    ) */}
    </div>
  )
}
