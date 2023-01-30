import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
      } else {
        if (r.status === 401) {
          console.log("User is not logged in...")
        }
      }
    })
  }, [])

  console.log("App: ", user)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><NavBar user={user} setUser={setUser} /><Home user={user} /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App