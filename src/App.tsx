import React from 'react'
import Header from './components/Header'
import LoginButton from './components/login/LoginButton'
import RegisterButton from './components/login/RegisterButton'
import { useAuth0 } from '@auth0/auth0-react'
import ChatWindow from './components/chat/ChatWindow'
import Nav from './components/Nav'

function App() {
  const { isAuthenticated } = useAuth0()
  // TO DO: once database is created with users I need to pull  the user information from the DB and chch
  // isAuthenticated && db.user
  return (
    <div className="h-screen w-full">
      {isAuthenticated ? (
        <div>
          main app
          <Header />
          <ChatWindow />
          <Nav />
        </div>
      ) : (
        <div className="h-full w-full">
          <Header />
          <div className="flex flex-col items-center justify-center h-full space-y-5 ">
            <LoginButton />
            <RegisterButton />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
