import React from 'react'

interface Props {
  messages: string[]
}

export default function Messages({ messages }: Props) {
  return (
    <div className="h-[90%] flex flex-col-reverse overflow-y-auto">
      {messages.map((mes, inx) => (
        <p key={inx}>{mes}</p>
      ))}
    </div>
  )
}
