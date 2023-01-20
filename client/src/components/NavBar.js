import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    function onLogout() {
      fetch('/logout', {
        method: 'DELETE'
      }).then(r => {
        if (r.ok) {
          navigate('/login')      
        }
      })
    }  
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to='/' className={'navbar-brand'}>Assignment Tracker</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/' className={'nav-link'}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <a className={'nav-link'} onClick={onLogout}>Logout</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar