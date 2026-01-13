import React from 'react'

const Pricing4 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row g-4 align-items-center" data-cues="slideInUp">
                    {data.plans.map((plan, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className={`${index == 1 ? 'bg-gradient-3 p-4 p-sm-5 border-radius-1 hover-float' : 'bg-white p-4 p-sm-5 border-radius-1 mt-lg-4 hover-float'}`}>
                                <div className="d-flex justify-content-between icon-3xl line-height-100">
                                    <h3 className="mb-0">{plan.name}</h3>
                                    <i className={`bi ${index == 1 ? ' bi-star' : 'bi-lightning-charge text-gradient-3'} me-2`}></i>
                                </div>
                                <ul className="list-border-dashed mt-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}><i className={`bi ${index == 1 ? feature.check ? 'bi-check2-circle' : 'bi-x-circle' : feature.check ? 'bi-check2-circle text-green' : 'bi-x-circle text-red'} me-2`}></i>{feature.text}</li>
                                    ))}
                                </ul>
                                <div className="d-flex align-items-end">
                                    <h2 className="display-5 font-family-tertiary line-height-100 mt-3 mb-0">{plan.price}</h2>
                                    <span className="d-inline-block">/{plan.per}</span>
                                </div>
                                <a className={`button button-lg button-fullwidth button-rounded button-hover-slide ${index == 1 ? 'button-white' : 'button-dark'} mt-4`} href={plan.button.link}><span data-text={plan.button.text}>{plan.button.text}</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing4