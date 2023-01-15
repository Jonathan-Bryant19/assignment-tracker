import React from 'react'

function Home( {user} ) {
  return (
    <div>
      <h1>Home</h1>
      {user ? <h2>{user.username}</h2> : <h2>No data</h2>}      
      

    </div>
  )
}

export default Home