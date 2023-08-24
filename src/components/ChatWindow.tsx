import { IoSend } from 'react-icons/io5'
import { useState } from 'react'

export default function ChatWindow() {
  const [message, setMessage] = useState('')

  // TO DO: fix the event target label
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="border-[3px] border-[#80AB15] rounded-[30px]">
      <form onSubmit={handleSubmit} className="flex flex-row ">
        <textarea
          placeholder="type your messages here..."
          className="w-[80%] m-5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-[20%] border-l-[3px] flex justify-center items-center rounded-r-[30px] border-[#80AB15] bg-[#95B93C]"
        >
          <IoSend size={20} color={'white'} />
        </button>
      </form>
    </div>
  )
}
