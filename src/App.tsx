import React from 'react'
import Header from './components/Header'
import LoginButton from './components/login/LoginButton'
import RegisterButton from './components/login/RegisterButton'
import { useAuth0 } from '@auth0/auth0-react'
import ChatWindow from './components/chat/ChatWindow'
import Nav from './components/Nav'
import UserWindow from './components/user/UserWindow'

function App() {
  const { isAuthenticated } = useAuth0()
  // TO DO: once database is created with users I need to pull  the user information from the DB
  // isAuthenticated && db.user
  return (
    <div>
      {isAuthenticated ? (
        <div className="h-screen w-full">
          <Header />
          {/* TO DO: need variable styling on this for the userwindow to be the only thing visible */}
          <div className="flex flex-row p-3 h-[86%] ">
            <UserWindow />
            <ChatWindow />
          </div>
          <Nav />
        </div>
      ) : (
        <div className="h-screen w-full">
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
