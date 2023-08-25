import React from 'react'
import Logo from '/logo.png'

function SignIn() {
  return (
    <form className='sign-in-form'>
      <img className='logo' src={Logo} alt="twitter logo" />
      <h2 className='sign-in-header'>Log in to Twitter</h2>
      <div className='input-fields'>
      <input type="text" placeholder='Phone number, email address' />
      <input type="text" placeholder='Password' />
      </div>
      <button className='log-in' >Log In</button>
      <div className='footer'>
        <a href="#">Forgot password?</a>
        <a href="#">Sign up to Twitter</a>
      </div>
    </form>
  )
}

export default SignIn