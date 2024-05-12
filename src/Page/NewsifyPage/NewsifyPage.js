import React from 'react'
import './NewsifyPage.css'
import search from '../../Image/search icon.png'
import newsletter from '../../Image/newsletter.png'
import hi from '../../Image/hi icon.png'
import stripe from '../../Image/stripe.png'
import google from '../../Image/google.png'
import samsung from '../../Image/samsung.png'
import visa from '../../Image/visa.png'
import spotify from '../../Image/spotify.png'
import linkedin from '../../Image/linkedin.png'
import zoom from '../../Image/zoom.png'
import Footer from '../../components/Newsify/Footer'
import Feature from '../../components/Newsify/Feature'
import Testinomials from '../../components/Newsify/Testinomials'
import SignUp from '../../components/Newsify/SignUp'
import Accordion from '../../components/Newsify/Accordion'

const NewsifyPage = () => {

    return (
        <div className='newsify-page'>
            <nav className='promotion'>
                <button className='promotion-button'>New</button>
                <div className='promotion-text-box'> Using Teamly is a manifesto in itself. It is simply the best choice for your email marketing</div>
            </nav>
            <div className='intro-page'>
                <nav className='newsify-navbar'>
                    <div className='newsify-navbar-logo'>Newsify</div>
                    <div className='navbar-pages'>
                        <div>Home</div>
                        <div>About us</div>
                        <div>Pricing</div>
                        <div>Demo</div>
                    </div>
                    <div className='search-box'>
                        <button><img src={search} className='search-icon'></img>search</button>
                    </div>
                    <div className='register-box'>
                        <button >Register</button>
                    </div>
                </nav>
                <div className='intro-section'>
                    <div className='intro-text-box'>
                        <div className='greet-box'>Hey,everyone
                            <img src={hi} className='bye-icon'></img>
                        </div>
                        <div className='intro-text-heading'>Newsify is the email
                            newsletter that works
                            completely automated
                        </div>
                        <div className='intro-sub-text'>
                            Track connections in real time. See who your
                            community being lead by and find the most active
                        </div>
                        <div className='email-box'>
                            <input type='email' placeholder='Your email address'></input>
                            <button>Register</button>
                        </div>
                    </div>
                    <div>
                        <img src={newsletter} className='newsletter-image'></img>
                    </div>
                </div>
            </div>
            <div className='brand-logo'>
                <img src={stripe}></img>
                <img src={google}></img>
                <img src={samsung}></img>
                <img src={visa}></img>
                <img src={spotify}></img>
                <img src={linkedin}></img>
                <img src={zoom}></img>
            </div>
            <Feature></Feature>
            <Testinomials></Testinomials>
            <Accordion></Accordion>
            <SignUp></SignUp>
            <Footer></Footer>           
        </div >

    )
}

export default NewsifyPage