import React from 'react'
import ChatArea from './components/ChatArea'

function App() {
  return (
    //TO DO: check responsive styling for height
    <div className="sm:mx-10 max-sm:mx-5 my-10">
      <header className="App-header"></header>
      kōrero app
      <ChatArea />
    </div>
  )
}

export default App
