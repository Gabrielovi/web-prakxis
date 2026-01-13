import React from 'react'

const Services8 = ({ data }) => {
    return (
        <div className="section-spacing bg-gray pb-0">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-0">{data.title}</h2>
                    </div>
                    {data.services.map((service, index) => (
                        <div key={index} className="col-12 col-lg-4" data-cue="fadeIn">
                            <div className={`${service.gradientClass} bg-opacity-10 p-4 p-sm-5 pt-0 pt-sm-0`}>
                                <div className="icon-box-square icon-box-square-lg bg-dark icon-xl mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h4 className="text-dark">{service.title}</h4>
                                <p className="text-dark-70">{service.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 col-lg-4">
                        {data.progressBars.map((progress, index) => (
                            <div key={index} className="progress-box progress-gradient-1 mt-4">
                                <h5>{progress.title}</h5>
                                <div className="animated-progress">
                                    <div data-progress={progress.progress} className="progress-show" style={{ width: progress.progress + '%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services8