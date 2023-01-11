import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  return (
    <Router>
      <Route >
        <NavBar />
      </Route>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}

export default App