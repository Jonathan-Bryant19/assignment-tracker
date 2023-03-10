import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState(null)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  
  function onSignup(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation
      })
    }).then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
        console.log(user)
        navigate('/')
      } else if (r.status === 422) {
        r.json().then(json => setErrors(json.errors))
        console.log(errors)
      }
    })
  }
  
  function routeToLogin() {
    const path = '/login'
    navigate(path)
  }

  // return (
  //     <div className='container ' >
  //         <div className='row mt-3'>
  //             <h1 className='col' align='center'>Sign Up</h1>
  //         </div>
  //         <div className='row w-50 justify-content-center' >
  //             <form className='col'>
  //                 <div className="my-3">
  //                     <label for="name" className="form-label">Username</label>
  //                     <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)}/>
  //                 </div>
  //                 <div className='mb-3'>
  //                     <label for="email" className="form-label">Email</label>
  //                     <input type="email" className="form-control" id="confirmEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
  //                     <div id="emailHelp" className="form-text">Conditionally render if emails don't match</div>
  //                 </div>
  //                 <div className="mb-3">
  //                     <label for="password" className="form-label">Password</label>
  //                     <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
  //                 </div>
  //                 <div className="mb-3">
  //                     <label for="confirmPassword" className="form-label">Confirm Password</label>
  //                     <input type="password" className="form-control" id="confirmPassword" onChange={(e) => setPasswordConfirmation(e.target.value)} />
  //                 </div>
  //                 <div className='mb-3'>
  //                   <button type="submit" className="btn btn-primary" onClick={onSignup}>Submit</button>
  //                 </div>
  //                 <div className='mb-3'>
  //                   <button type="button" className="btn btn-danger" onClick={routeToLogin}>Cancel</button>
  //                 </div> 
  //             </form>
  //         </div>
  //     </div>
  //   )
  return (
    <div className='container'>
      <div className='row mt-3'>
        <h1 className='col text-center'>Sign Up</h1>
      </div>
      <div className='row justify-content-center'>
        <form className='col-md-6'>
          <div className='my-3'>
            <label htmlFor='username' className='form-label'>
              Username
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='confirmEmail'
              aria-describedby='emailHelp'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id='emailHelp' className='form-text'>
              Conditionally render if emails don't match
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='confirmPassword' className='form-label'>
              Confirm Password
            </label>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <button type='submit' className='btn btn-primary' onClick={onSignup}>
              Submit
            </button>
          </div>
          <div className='mb-3'>
            <button type='button' className='btn btn-danger' onClick={routeToLogin}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup