import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <button
        className="bg-[#95B93C] text-white p-2 w-48 rounded-lg"
        onClick={() => {
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signin',
              redirect_uri: `${window.location.origin}/`,
            },
          })
        }}
      >
        login
      </button>
    </div>
  )
}
