import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count))
  // }, [])

  return (
    <Router>
      <Routes>
        <Route element={<NavBar />} />
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App