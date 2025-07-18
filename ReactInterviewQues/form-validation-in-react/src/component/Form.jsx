import React from 'react'

const Form = () => {
  return (
    <>
        <form>
            <h1>Sign Up</h1>
            <div>
                <p className='fieldName'>Name</p>
                <input type="text" />
                <p className='data'>Error</p>
            </div>
            <div>
                <p className='fieldName'>Email</p>
                <input type="email" />
                <p className='data'>Error</p>
            </div>
            <div>
                <p className='fieldName'>Password</p>
                <input type="password" />
                <p className='data'>Error</p>
            </div>
            <div>
                <p className='fieldName'>Confirm Password</p>
                <input type="password" />
                <p className='data'>Error</p>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </form>
    </>
  )
}

export default Form