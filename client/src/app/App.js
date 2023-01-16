import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data))
  }, [])

  console.log(user)

  return (
    <Router>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App