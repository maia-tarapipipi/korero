import { IoSend } from 'react-icons/io5'
import { ChangeEvent, useState } from 'react'
import { Socket } from 'socket.io-client'

interface Props {
  socket: Socket
}

export default function ChatBox({ socket }: Props) {
  const [message, setMessage] = useState('')

  // TO DO: fix the event target label
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log('client: ', message)
    socket.emit('chat message', message)
    setMessage('')
  }

  return (
    <div className="border-[3px] border-[#81ab15] rounded-full ">
      <form onSubmit={handleSubmit} className="flex flex-row ">
        <input
          placeholder="kōrero mai..."
          className="w-[80%] m-5"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
        <button
          type="submit"
          className="w-[20%] border-l-[3px] flex justify-center items-center rounded-r-full border-[#80AB15]  bg-[#95b93c]"
        >
          <IoSend size={20} color={'white'} />
        </button>
      </form>
    </div>
  )
}
