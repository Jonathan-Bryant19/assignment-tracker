import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  // This is code that needs to be fully reviewed. Was copy/pasted from Signup.  
  // function onLogin(e) {
  //   e.preventDefault()
  //   fetch('/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       password_confirmation: passwordConfirmation
  //     })
  //   }).then(r => {
  //     if (r.ok) {
  //       r.json().then(user => setUser(user))
  //       console.log(user)
  //       navigate('/', {state: user})
  //     } else if (r.status === 422) {
  //       r.json().then(json => setErrors(json.errors))
  //       console.log(errors)
  //     }
  //   })
  // }  
  
  return (    
    <div className='container'>
      <div className='row mt-3'>
          <h1 className='col test' align='center'>Login</h1>
      </div>
      <div className='row w-50 login' >
          <form className='col'>
              <div className="my-3">
                  <label for="exampleInputEmail1" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Login