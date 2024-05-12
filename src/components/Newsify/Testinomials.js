import React from 'react'
import './Testinomials.css'
import carose from '../../Image/carose.svg'
import star from '../../Image/rating.png'
import profile from '../../Image/newsify-review.png'
import vector from '../../Image/vectorlines.png'
import comma from '../../Image/inverted comma.png'
import add from '../../Image/add-btn.svg'

const Testinomials = () => {
   
    return (
        <div> <div className='newsify-testimonials'>
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
  
            
        </div></div>
    )
}

export default Testinomials