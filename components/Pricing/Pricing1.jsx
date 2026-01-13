import React from 'react'

const Pricing1 = ({ data }) => {
    return (
        <div className="section-spacing bg-gray">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-4">
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-4">{data.title}</h2>
                        <p>{data.description}</p>
                        <a className="button-fancy-gradient-1 mt-4" href={data.button.link}>{data.button.text}</a>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4 align-items-center">
                            {data.plans.map((item, index) => (
                                <div key={index} className="col-12 col-lg-6">
                                    <div className={index % 2 === 0 ? "bg-white p-4 p-sm-5" : "bg-gradient-1 p-4 p-sm-5"} data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-36px)">
                                        <div className="d-flex justify-content-between icon-3xl line-height-100">
                                            <h2 className="mb-0">{item.name}</h2>
                                            <i className={index % 2 === 0 ? "bi bi-lightning-charge text-gradient-1" : "bi bi-star"}></i>
                                        </div>
                                        <ul className="list-border-dashed mt-3">
                                            {item.features.map((feature, i) => (
                                                <li key={i}><i className={index % 2 === 0 ? "bi bi-check2-circle text-green me-2" : "bi bi-check2-circle me-2"}></i>{feature}</li>
                                            ))}
                                        </ul>
                                        <div className="d-flex align-items-end">
                                            <h2 className="display-5 font-family-tertiary line-height-100 mt-3 mb-0">{item.price}</h2>
                                            <span className="d-inline-block">/per {item.per}</span>
                                        </div>
                                        <a className={index % 2 === 0 ? "button button-lg button-fullwidth button-rounded button-hover-slide button-dark mt-4" : "button button-lg button-fullwidth button-rounded button-hover-slide button-white mt-4"} href={item.button.link}><span data-text={item.button.text}>{item.button.text}</span></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing1