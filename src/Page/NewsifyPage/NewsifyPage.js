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
import dashboarddesign from '../../Image/dasboard design.png'
// import arrow from '../../Image/arrow.png'
import overview1 from '../../Image/overview1 (4).png'
import overview2 from '../../Image/overview2 (2).png'
import overview3 from '../../Image/overview3.png'
import overview4 from '../../Image/overview4 (1).png'
import carose from '../../Image/carose.svg'
import star from '../../Image/rating.png'
import profile from '../../Image/newsify-review.png'
import vector from '../../Image/vectorlines.png'
import comma from '../../Image/inverted comma.png'

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
            <div className='newsify-feature'>
                <div className='newsify-feature-text-box'>
                    <div className='newsify-feature-text-heading'>Let Your Newsletter Do the talk</div>
                    <div className='newsify-feature-text-subtext'>Let`s clam it , today we don`t the time to talk or time to scroll over groups or other
                        plateforms . So it is better for your automated newsletter to do the tlk. What cloud be
                        done better? Stay connected to your community.</div>
                </div>
                <img src={dashboarddesign} className='dashboard-design'></img>
                <div className='newsify-feature-details'>

                </div>
            </div>
            <div className='more-about-newsify'>
                <div className='more-about-newsify-text-box'>
                    <div className='more-about-newsify-heading'>More than a Newsletter</div>
                    <div className='more-about-newsify-subtext'>Unlock the automated quality experience for everyone in the team.</div>
                </div>
                <div className='overview'>
                    <div className='overview-card'>
                        <img src={overview1} ></img>
                        <div className='overview-text-box'>
                            <div className='overview-text-box-heading'>Collect the needed information
                                and see the result easily</div>
                            <div className='overview-text-box-subtext'>Help your members find wjat matters to them Collect informations
                                and creates graphics for them to understand their values. To have
                                a smooth experience all members need a bit of guidence.</div>
                            <button className='overview-btn'>Get start for free</button>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <img src={overview2} ></img>
                        <div className='overview-text-box'>
                            <div className='overview-text-box-heading'>Use the analyzer AI to track
                                your reports</div>
                            <div className='overview-text-box-subtext'>A strong community could be lead by a strong guidence only. The
                                guide in this tour may be automized already. Our analyzier Ai will
                                track the parameters and will come real life reports</div>
                            <button className='overview-btn'>Get start for free</button>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <div className='overview-card'>
                        <img src={overview3} ></img>
                        <div className='overview-text-box'>
                            <div className='overview-text-box-heading'>Publish in one touch</div>
                            <div className='overview-text-box-subtext'>Everything is under you control you can schedule your
                                announcement plan your feeds and create posts with one click
                                Being the right thing in the right time.</div>
                            <button className='overview-btn'>Get start for free</button>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <img src={overview4} ></img>
                        <div className='overview-text-box'>
                            <div className='overview-text-box-heading'>Connection is the key</div>
                            <div className='overview-text-box-subtext'>When a member replied to another, they get the connection flow.
                                This way we improve general efficeny of the team</div>
                            <button className='overview-btn'>Get start for free</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='newsify-testimonials'>
                <div className='newsify-testimonial-arrow'>
                    <div className='newsify-testimonials-text-box'>
                        <div className='newsify-testimonials-text-heading'>
                            The <span>Cutomer is Hero</span> <br></br>of Our Business
                        </div>
                        <div className='newsify-testimonials-text-subtext'>Newsify is your Email newsletter Webflow template<br></br>
                            we can build anything your dream.
                        </div>
                    </div>
                    <img src={carose} className='carose'></img>
                </div>
                <div className='newsify-review-card'>
                    <img src={vector} className='waves'></img>
                    <img src={comma} className='comma'></img>
                    <div className='newsify-review-text'>I cant describe how great we feel using
                        Newsify. It completely changed our workflow
                        and the face we waste on truying to connect
                        each other.Top Newsify!”
                    </div>
                    <div className='newsify-review-profile'>
                        <img src={profile}></img>
                        <div>
                            <div className='profile-name'>Esther Jackson</div>
                            <img src={star} className='profile-rating'></img>
                        </div>
                    </div>

                </div>
                <div className='newsify-questions-asked'>
                    <div className='newsify-questions-text-box'>
                        <div className='newsify-questions-heading'>Freequently asked questions</div>
                        <div className='newsify-questions-subtext'>We`re happy to answer your questions</div>
                    </div>
                    <div className='questions'>What is Team Newsify?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>How is the team Newsify?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>What does the technology work?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>How often will i get team Newsify?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>How automated is this?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>It is close to news letter regular?
                        <button className='add-btn'>+</button></div>
                    <div className='questions'>Can i get a live demo of Newsify in action?
                        <button className='add-btn'>+</button></div>
                </div>
                <div className='newsify-signup'>
                    <div className='newsify-signup-card'>
                            <div className='newsify-signup-heading'>Let`s Start Something Great</div>
                            <div className='newsify-signup-subtext'>Sign up with your email adress to be informed about discounts and<br/> new recruits from all campaigns!</div>
                            <div className='signup-details'>
                                <img src={search}></img>
                                <input type='email' placeholder='Enter your email '></input>
                                <button className='trial-btn'>Free Trial</button>
                            </div>
                    </div>

                </div>
                <div className='newsify-footer'>
                    <div>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewsifyPage