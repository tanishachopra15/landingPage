import React from 'react'
import './Feature.css'
import dashboarddesign from '../../Image/dasboard design.png'
import arrow from '../../Image/arrow.png'
import whitearrow from '../../Image/whitearrow.png'
import overview1 from '../../Image/overview1 (4).png'
import overview2 from '../../Image/overview2 (2).png'
import overview3 from '../../Image/overview3.png'
import overview4 from '../../Image/overview4 (1).png'

const Feature = () => {
    const featuresBox = [
        {
            title: "Direct Connections",
            description: "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others"
        },
        {
            title: "Don`t let the team stagenate",
            description: "Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the important part."
        },
        {
            title: "Complete Automated",
            description: "Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click"
        }
    ]
    return (
        <div>
            <div className='newsify-feature'>
                <div className='newsify-feature-text-box'>
                    <div className='newsify-feature-text-heading'>Let Your Newsletter Do the talk</div>
                    <div className='newsify-feature-text-subtext'>Let`s clam it , today we don`t the time to talk or time to scroll over groups or other
                        plateforms . So it is better for your automated newsletter to do the tlk. What cloud be
                        done better? Stay connected to your community.</div>
                </div>
                <img src={dashboarddesign} className='dashboard-design'></img>
                <div className='newsify-feature-details'>
                    {
                        featuresBox.map((data, index) => {
                            return (<div key={index} className='features-details' style={{
                                backgroundColor: `${index == 1 ? '#1668E8' : '#F7F7F7'}`,
                                color: `${index == 1 ? '#FFFFFF' : 'black'}`
                            }}>
                                <div className='arror-circle' style={{
                                    'background-color': index === 1 ? '#1668E8' : '#F7F7F7'
                                }}>
                                    {
                                        index === 1 ?
                                            <img src={whitearrow} alt=''></img> :
                                            <img src={arrow} alt=''></img>
                                    }
                                </div>
                                <div className='features-details-title'>{data.title}</div>
                                <div className='features-details-description'>{data.description}</div>
                            </div>
                            )
                        })
                    }
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
        </div>
    )
}

export default Feature