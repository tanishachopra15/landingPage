import React, { useState } from 'react'
import './Price.css'

const Price = () => {
    const [price, setPrice] = useState({
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
    )
    return (
        <div>
            {
                price.map((value, index) => {
                    return (
                        <div key={index} className='price-details' >
                            <div><span>{value.type}</span></div>
                            <div> <span>{value.price}</span></div>
                            <div> <span>{value.description}</span></div>
                            <div> <span>{value.features}</span></div>
                            {value.features.map((feature, featureIndex) => (
                                <div key={featureIndex}> {feature}</div>
                            ))}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Price;