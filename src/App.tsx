import { useAuth0 } from '@auth0/auth0-react'


function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      <header className="App-header"></header>
      {/* {isAuthenticated ? (
// header
// outlet (dashboard and chat app)
// 
      ) : (
// header
// login
// register
      )
      } */}
    </div>
  )
}

export default App
