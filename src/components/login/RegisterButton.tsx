import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function RegisterButton() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <button
        className="border border-[#95B93C] text-[#95B93C] p-2 w-48 rounded-lg"
        onClick={() => {
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signup',
              redirect_uri: `${window.location.origin}/`,
            },
          })
        }}
      >
        register
      </button>
    </div>
  )
}
