import React from 'react'
import './Footer.css'
import social from '../../Image/social iocn.png'

const Footer = () => {
  return (
    <div className='newsify-footer'>
    <div className='newsify-company-Info'>
        <div className='newsify-company-logo-details'>
            <div className='newsify-company-logo'>
                Newsify
            </div>
            <div className='nesify-company-logo-text'>Newsify is your Email newsletter
                Webflow template we can build
                anything your dream.</div>
            <button className='try-btn'>Try for free</button>
        </div>
        <div className='company-services-info'>
            <div className='company-info-title'>Company</div>
            <div className='company-info-subtext'> About us</div>
            <div className='company-info-subtext'> Home</div>
            <div className='company-info-subtext'> Pricing</div>
            <div className='company-info-subtext'> Demo</div>
            <div className='company-info-subtext'> Contact us</div>
        </div >
        <div className='company-services-info'>
            <div className='company-info-title'>Support Us</div>
            <div className='company-info-subtext'> Blog</div>
            <div className='company-info-subtext'> Help center</div>
            <div className='company-info-subtext'> FAQ's</div>
            <div className='company-info-subtext'> Product Updates</div>
        </div>
        <div className='company-services-info'>
            <div className='company-info-title'>Resources</div>
            <div className='company-info-subtext'> Community </div>
            <div className='company-info-subtext'> Contact</div>
            <div className='company-info-subtext'> Terms of services</div>
        </div>
        <div className='company-services-info'>
            <div className='company-info-title'>Address</div>
            <div className='company-info-subtext'> 101 Marlow Street. #12-05 Clife<br />
                Parkview. Singapore 059020.<br />
                View on Maps </div>
            <div className='company-info-subtext'> Inquiries </div>
            <div className='company-info-subtext'> +65 6156 5519<br />
                hello@Newsify.com</div>
            <image src={social} className='social-icons'></image>
        </div>
    </div>
    <div className='footer-bottom'>
        <div className='footer-bottom-text'>© 2023 Newsify. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
    </div>
</div >
  )
}

export default Footer