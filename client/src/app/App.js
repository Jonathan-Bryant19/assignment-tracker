import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   console.log("fetch to /me route about the fire...")
  //   fetch("/me")
  //     .then((r) => r.json())
  //     .then((data) => setUser(data))
  // }, [])

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
        <Route exact path="/" element={<><NavBar /><Home user={user} /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App