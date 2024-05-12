import React from 'react'
import './SignUp.css'
import search from '../../Image/search icon.png'

const SignUp = () => {
  return (
    <div><div className='newsify-signup'>
    <div className='newsify-signup-card'>
        <div className='newsify-signup-heading'>Let`s Start Something Great</div>
        <div className='newsify-signup-subtext'>Sign up with your email adress to be informed about discounts and<br /> new recruits from all campaigns!</div>
        <div className='signup-details'>
            <img src={search}></img>
            <input type='email' placeholder='Enter your email '></input>
            <button className='trial-btn'>Free Trial</button>
        </div>
    </div>
</div></div>
  )
}

export default SignUp