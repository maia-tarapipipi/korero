import React from 'react'

interface Props {
  messages: string[]
}

export default function Messages({ messages }: Props) {
  return (
    <div>
      {messages.map((mes, inx) => (
        <p key={inx}>{mes}</p>
      ))}
    </div>
  )
}