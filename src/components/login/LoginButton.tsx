import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <button
        className="bg-#80AB15 text-white"
        onClick={() => {
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signin',
              redirect_uri: `${window.location.origin}/chats`,
            },
          })
        }}
      >
        login
      </button>
    </div>
  )
}
