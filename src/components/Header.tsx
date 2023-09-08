import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <div
      className="bg-[#95B93C] w-full rounded-b-lg p-2 mb-5 text-white antialiased font-semibold text-left"
      onClick={() => navigate('/')}
      aria-label="home"
    >
      Kōrero
    </div>
  )
}
