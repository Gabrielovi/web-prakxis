import React from 'react'

const Pricing6 = ({ data }) => {
    return (
        <div className="container z-index-1">
            <div className="n-margin-5">
                <div className="row g-4">
                    {data.plans.map((plan, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className={`${index == 1 ? 'bg-gradient-1 box-shadow border-radius p-4 p-md-5' : 'bg-white box-shadow border-radius p-4 p-md-5 mt-lg-3'}`}>
                                <div className="d-flex justify-content-between icon-3xl line-height-100">
                                    <h3 className="mb-0">{plan.name}</h3>
                                    <i className={`bi ${index == 1 ? ' bi-lightning-charge' : 'bi-lightning-charge text-gradient-1'}`}></i>
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

export default Pricing6