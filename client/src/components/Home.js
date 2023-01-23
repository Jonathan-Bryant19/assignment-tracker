import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function Home( {user} ) {
  // const [user, setUser] = useState(null)
  const navigate = useNavigate()
  console.log("Home.js: ", user)
  // useEffect(() => {
  //   fetch('/me').then(r => {
  //     if (r.ok) {
  //       r.json().then(user => setUser(user))
  //     } else {
  //       if (r.status === 401) {
  //         console.log("User is not logged in...")
  //         navigate('/login')
  //       }
  //     }
  //   })
  // }, [])

  return (
    <div>
      <h1>Home</h1>
      {user ? <h2>{user.username}</h2> : <h2>No data</h2>}      
      

    </div>
  )
}

export default Home