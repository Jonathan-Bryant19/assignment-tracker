import React from 'react'

function Signup() {
    return (
        <div className='container'>
            <div className='row mt-3'>
                <h1 className='col' align='center'>Sign Up</h1>
            </div>
            <div className='row w-50 login' >
                <form className='col'>
                    <div className="my-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className='mb-3'>
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" />
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

export default Signup