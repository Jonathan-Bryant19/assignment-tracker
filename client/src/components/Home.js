import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function Home( {user} ) {
  console.log("Home: ", user)

  let navigate = useNavigate()

  return (
    <div>
      <h1>Home</h1>
      {user ? <h2>{user.username}</h2> : <h2>No data</h2>}      
      

    </div>
  )
}

export default Home