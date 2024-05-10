import React, { useState } from 'react'
import './CryptoPage.css'
import Logo from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/logo.svg'
import dashboard from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/dashboard.svg'
import component55 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2055.svg'
import component56 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2056.svg'
import component57 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2057.svg'
import component59 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2059.svg'
import component60 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2060.svg'
import component61 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Component%2061.svg'
import totalexpense from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/right%20side.svg'
import image from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/image.png'
import image1 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/image%201.png'
import image2 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/image%202.png'
import image3 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/image%203.png'
import demo from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Rectangle%20388.png'
import social from 'file:///C:/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/social%20iocn.png'
import star from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/rating.png'
import msg1 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust1.png'
import msg2 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust2.png'
import msg3 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust3.png'
import msg4 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust4.png'
import msg5 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust5.png'
import msg6 from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/cust6.png'
// import lines from 'file:///c%3A/Users/tanisha/OneDrive/Desktop/reactjs/crypto_land/src/Image/Group%20299.svg'

const CryptoPage = () => {
    const [price, setPrice] = useState([
        {
            type: "Basic",
            price: "$0",
            description: "Get a professional website designed according to your needs.",
            features: [
                "Get a fully designed Website.",
                "Webflow Development",
                "Limited Support",
            ]
        },
        {
            type: "Pro",
            price: "$499",
            description: "Get a professional website designed according to your needs.",
            features: [
                "Get a fully designed Website.",
                "Webflow Development",
                "Limited Support",
                "Get a fully designed Website",
                "Webflow Development",
                "24/7 Support system"
            ]
        },
        {
            type: "Enterprise",
            price: "$999",
            description: "Get a professional website designed according to your needs.",
            features: [
                "Get a fully designed Website.",
                "Webflow Development",
                "Limited Support",
                "Get a fully designed Website",
                "Get a fully designed Website",
                "Limited Support",
                "Get a fully designed Website",
                "24 / 7 Support system",
            ]
        }
    ])
    return (
        <div className='crypto-land-app'>
            <div className='home-page'>
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
                <div className='text-box'>
                    <div className='text-box-heading'>The Finance Solutions For Your Business  </div>
                    <div className='text-box-subtext'>Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.</div>
                    <div className='text-box-input'>
                        <input type='text' placeholder='Enter your email address'></input>
                        <button>Book a Demo</button>
                    </div>
                </div>
                <img src={dashboard} className="dashboard-logo" alt="dashboard" />

                <div className='logofolio'>
                    <div className='partner-text-box'>Working with world class partners.
                        We`re partner first!</div>
                    <div className='logo-component'>
                        <img src={component59} className="logo-component" alt="logo-component" />
                        <img src={component61} className="logo-component" alt="logo-component" />
                        <img src={component56} className="logo-component" alt="logo-component" />
                        <img src={component60} className="logo-component" alt="logo-component" />
                        <img src={component55} className="logo-component" alt="logo-component" />
                        <img src={component57} className="logo-component" alt="logo-component" />
                    </div>

                    <div className='features'>
                        <div className='expense-feature'>
                            <div className='expense-feature-text-heading'>Boosting Business. Today
                                and Tomorrow.</div>
                            <div className='total-expense'>
                                <img src={totalexpense} className="total-expense-image" />
                                {/* <img src={lines} className="" alt="" /> */}
                                <div className='total-expense-text-box'>
                                    <div className='total-expense-heading'> Optimise expense Management as a team
                                        <div className='total-expense-subtext'>Bring harmony to team expenses with budget limits and
                                            real-time monitiring. Freedom for your staff. Peace of
                                            mind for you.
                                        </div>
                                        <div>
                                            <button className='button'>Explore more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='account-feature'>
                            <div className='account-text-box'>
                                <div className='account-heading'>Real-time accounting
                                    at your fingertips.
                                    <div className='account-subtext'>Take the pain out of book keeping! Wave goodbye to
                                        mountains of paperwork and endless email reminders.
                                        There`s now a new way of accounting.
                                    </div>
                                    <div>
                                        <button className='button'>Explore more</button>
                                    </div>

                                </div>
                                <img src={image} className="account-image" />

                            </div>
                        </div>

                        <div className='profile-container'>
                            <div className='profile'>
                                <div className='profile-text-box'>
                                    <div className='profile-heading'>Modern Companies are
                                        built on Capital.
                                    </div>
                                    <div className='profile-subtext'>we provide software for the financial and operational needs of today`s<br></br>
                                        founders so they can get back to doing what they do best-building/
                                    </div>
                                </div>
                                <div className='profile-image-container'>
                                    <img src={image1} className="profile-image" />
                                    <img src={image2} className="profile-image" />
                                    <img src={image3} className="profile-image" />
                                </div>
                            </div>
                        </div>
                        <div className='plan'>
                            <div className='plan-text-box'>
                                <div className='plan-heading'>Find the right plan</div>
                                <div className='plan-subtext'>"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details<br />
                                    and see how we can help you streamline your finances and reach your business goals.
                                </div>
                            </div>
                            <div className='plan-details'>
                                {
                                    price.map((value, index) => {
                                        return (
                                            <div key={index} className='plan-details-card' >
                                                <div className='plan-type' style={{
                                                    color: `${index == 0 ? 'black' : '#A3DC2F'}`
                                                }}>{value.type}</div>
                                                <div className='plan-price'>{value.price}</div>
                                                <div className='plan-description'>{value.description}</div>
                                                <div className='plan-feature-base'>
                                                    {value.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className='plan-feature'> {feature}</div>

                                                    ))}
                                                </div>
                                                <div className='spacer' />
                                                <button className={`feature-btn ${index == 2 ? 'last' : ''}`}
                                                >{index == 2 ? 'Contact Us' : 'Select Plan'}</button>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className='testimonial'>
                            <div className='testimonial-text-box'>
                                <div className='testimonial-text-heading'>What our customers say</div>
                                <div className='testimonial-text-subtext'>"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.</div>
                            </div>
                            <div className='testimonial-image-grid'>
                                <div className='customer-review'>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg1} className='review'></img>

                                            <div className='customer-name'>Ashley Cooper
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg2} className='review'></img>

                                            <div className='customer-name'>Noah Jack
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg3} className='review'></img>

                                            <div className='customer-name'>Ashley Cooper
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg4} className='review'></img>

                                            <div className='customer-name'>Gabrile Jackson
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg5} className='review'></img>

                                            <div className='customer-name'>Ashley Cooper
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='customer-review-content'>
                                        <div className='review-text-box'>
                                            Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.
                                        </div>
                                        <div className='customer-details'>
                                            <img src={msg6} className='review'></img>

                                            <div className='customer-name'>William Leo
                                                <div>
                                                    <img src={star} className='rating'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='demo-container'>
                            <div className='demo-blue-container'>
                                <div className='demo-text-box'>
                                    Let`s Upgrade your
                                    finances experience
                                    by using Cryptland
                                    <div className='demo-button'>
                                        <button className='button'>Request Demo</button>
                                        <button className='demo-video-btn'>Watch Video</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={demo} className="demo-image" />
                                </div>
                            </div>
                        </div>
                        <div className='footer-container'>
                            <div className='footer-content'>
                                <div className='footer-logo'>
                                    <img src={Logo} className="footer-logo-image" />
                                    <div className='footer-logo-text'>Empower your finance team. The onestop plateform for all financial management of small and medium- sized business.</div>
                                    <img src={social} className="footer-social-image" />
                                </div>
                                <div className='footer-head'>
                                    <div className='footer-heading'>Plateform </div>
                                    <div className='footer'>Why Cloudwise</div>
                                    <div className='footer'>Expense management</div>
                                    <div className='footer'> Automatic bookkeeping</div>
                                    <div className='footer'>Integeration</div>
                                </div>
                                <div className='footer-head'>
                                    <div className='footer-heading'>Company</div>
                                    <div className='footer'> About us</div>
                                    <div className='footer'> Plateform</div>
                                    <div className='footer'> Solution</div>
                                    <div className='footer'> Customer</div>
                                    <div className='footer'>  Pricing</div>
                                </div>
                                <div className='footer-head'>
                                    <div className='footer-heading'>Resources</div>
                                    <div className='footer'> Blog</div>
                                    <div className='footer'> Help center</div>
                                    <div className='footer'>  Webinar</div>
                                    <div className='footer'> FAQ`s</div>
                                    <div className='footer'>Status</div>
                                </div>
                                <div className='footer-head'>
                                    <div className='footer-heading'>Solutions</div>
                                    <div className='footer'>Self Employeed</div>
                                    <div className='footer'>Email Business</div>
                                    <div className='footer'>Sms & Startups</div>
                                </div>
                            </div>
                            <div className='footer-line-image'>

                            </div>
                            <div className='footer-cookies'>
                                © 2022 Sendinblue. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default CryptoPage;