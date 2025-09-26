import React from 'react'
import'./Login.css'
import Navbar from '../../components/navbar/Navbar'
import img from '../../assets/clip-message-sent 1.png'
export default function Login() {
  return (
    <div>
      <div className='rightside'>
<h3>Digital</h3>
<h1 className='one'>Artificial Intelligence Driving Results For The Travel Industry</h1>
<p className='welcome'>Welcome  back! Please login to your account.</p>
<input className='email' type='email' placeholder='Email Adress'/>
<input className='password' type='password' placeholder='password' webkit-text-security='disc' />

<div className='sec'> 
 <div className='remember'> <input type='checkbox' /><p>Remember Me</p></div>
  <a>Forgot password?</a>
</div>
<div className='therd'>
<button className='login-but'>Login</button>
<button className='signUp-but'>Sign Up</button>
</div>
<div className='forth'>
  <h4>Or login with</h4>
  <a className='link' href=''>Facebook</a>
  <a  className='link' href=''>Linkedin</a>
  <a  className='link' href=''>Google</a>
</div>
      </div>
      <div className='leftside'>
      <Navbar/>
      <img src={img} alt='someone on motorcycle'/>
      </div>
    </div>
  )
}
