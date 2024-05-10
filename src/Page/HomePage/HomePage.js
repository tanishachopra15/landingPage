import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='link-container'>

            <Link to='/crypto-land'><div>Crypto Land</div></Link>
            <Link to='/newsify'> <div>Newsify</div></Link>
            
        </div>
    )
}

export default HomePage;