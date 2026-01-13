import React from 'react'

const Pricing2 = ({ data, hideTitle }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                {!hideTitle && (
                    <>
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                <h2 className="display-6 fw-medium">{data.description}</h2>
                            </div>
                        </div>
                        <div className="divider-side-line mt-3">
                            <div className="h6 sm-heading mb-0 me-3">{data.title}</div>
                        </div>
                    </>
                )}
                <div className="row g-2 mt-4 mt-lg-5 hover-border-wrapper" data-cues="slideInUp">
                    {data.plans.map((plan, index) => (
                        <div key={index} className="col-12 col-md-4">
                            <div className={`p-4 p-lg-5 hover-border ${index === 0 ? 'hover-border-active' : ''}`}>
                                <h4>{plan.name}</h4>
                                <p>{plan.description}</p>
                                <div className="d-flex align-items-end">
                                    <div className="h1 display-5 font-family-tertiary line-height-100 mt-3 mb-0">{plan.price}</div>
                                    <span className="d-inline-block">/per {plan.per}</span>
                                </div>
                                <ul className="list-border-dashed mt-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}><i className="bi bi-check2-circle text-green me-2"></i>{feature}</li>
                                    ))}
                                </ul>
                                <a className={`button button-lg ${index === 0 ? 'button-fullwidth button-dark' : 'button-outline-dashed button-fullwidth'} button-rounded button-hover-slide mt-4`} href={plan.button.link}><span data-text={plan.button.text}>{plan.button.text}</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing2