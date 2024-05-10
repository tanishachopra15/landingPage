import React from 'react'
import './Navbar.css'
import Logo from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-right-container'>
                <nav>About us</nav>
                <nav>Plateform</nav>
                <nav>Solutions</nav>
                <nav>Customer</nav>
            </div>
            <div>
                <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <div className='navbar-left-container'>
                <nav>Price</nav>
                <nav>Contact</nav>
                <nav>Login</nav>
                <button>Sign up</button>
            </div>
        </div>

    )
}

export default Navbar;