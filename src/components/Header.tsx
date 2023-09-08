import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div
      className="bg-[#95B93C] w-full rounded-b-lg p-2 text-white antialiased font-semibold text-left"
      onClick={() => goTo('/')}
      aria-label="home"
    >
      Kōrero
    </div>
  )
}
