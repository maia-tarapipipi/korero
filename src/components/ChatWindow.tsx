import { IoSend } from 'react-icons/io5'

export default function ChatWindow() {
  // TO DO: fix the event target label
  function handleSubmit(e: any) {
    const msg = e.target.value
  }

  return (
    <div className="border-[3px] border-[#80AB15] rounded-[30px]">
      <form onSubmit={handleSubmit} className="flex flex-row ">
        <textarea
          placeholder="type your messages here..."
          className="w-[80%] m-5"
        />
        <button
          type="submit"
          className="w-[20%] border-l-[3px] flex justify-center items-center rounded-r-[30px] border-[#80AB15] bg-[#95B93C]"
        >
          <IoSend size={40} color={'white'} />
        </button>
      </form>
    </div>
  )
}
