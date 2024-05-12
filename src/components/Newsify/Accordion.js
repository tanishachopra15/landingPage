import React, { useState } from 'react'
import './Accordion.css'
import add from '../../Image/add-btn.svg'

const Accordion = () => {
    const [selected, setSelected] = useState({})

    const quesAsked = [{
        question: "What is Team Newsify?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "How is the team Newsify?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "What does the technology work?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "How often will i get team Newsify?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "How automated is this?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "It is close to news letter regular?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        question: "Can i get a live demo of Newsify in action?",
        content: "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    }]

    function onClickDetails(index) {
        if (selected == index) {
            return setSelected(null)
        }
        setSelected(index)
    }

return (
    <div>
        <div className='newsify-questions-asked'>
            <div className='newsify-questions-text-box'>
                <div className='newsify-questions-heading'>Freequently asked questions</div>
                <div className='newsify-questions-subtext'>We`re happy to answer your questions</div>
            </div>
            <div className='accordion-section'>
                {
                    quesAsked.map((accordion, index) => {
                        return (<div key={index} className='accordion-data'>
                            <div className='accordion-card'>
                                <div className='accordion-question'>{accordion.question}
                                    <button className='add-btn' onClick={() => onClickDetails(index)}><img src={add}></img></button>
                                </div>

                                <div className={selected == index ? 'accordion-content show' : 'accordion-content'}>{accordion.content}</div>
                            </div>

                        </div>)
                    })
                }
            </div>
        </div></div>
)
}

export default Accordion