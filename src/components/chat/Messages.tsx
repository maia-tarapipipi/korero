import React from 'react'

interface Props {
  messages: string[]
}

export default function Messages({ messages }: Props) {
  return (
    <div className="flex-1">
      {messages.map((mes, inx) => (
        <p key={inx}>{mes}</p>
      ))}
    </div>
  )
}
