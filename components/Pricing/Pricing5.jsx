import React from 'react'

const Pricing5 = ({ data }) => {
    return (
        <div className="section-spacing-lg pb-0">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-3">
                            {data.title}
                        </h2>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="row g-4 align-items-center mt-4">
                    {data.plans.map((plan, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className={`${index == 1 ? 'bg-gradient-1 p-4 p-sm-5 border-radius-1' : 'bg-gray p-4 p-sm-5 border-radius-1 mt-lg-4'}`}>
                                <div className="d-flex justify-content-between icon-3xl line-height-100">
                                    <h3 className="mb-0">{plan.name}</h3>
                                    <i className={`bi ${index == 1 ? ' bi-star' : 'bi-lightning-charge text-gradient-1'}`}></i>
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

export default Pricing5