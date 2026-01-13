import React from 'react'

const Services2 = ({ data }) => {
    return (
        <div className="section-spacing bg-dark pb-0">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    {/* Progress bars */}
                    <div className="col-12 col-lg-4">
                        <div className="row g-4">
                            {data.progressBars.map((bar, index) => (
                                <div key={index} className="col-12">
                                    <div className={`progress-box progress-gradient-1`}>
                                        <h5>{bar.title}</h5>
                                        <div className="animated-progress">
                                            <div data-progress={bar.progress} className="progress-show" style={{ width: bar.progress + '%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Services */}
                    {data.services.map((service, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className={`${service.gradient} bg-opacity-20 p-4 p-sm-5 pt-0 pt-sm-0`}>
                                <div className="icon-box-square icon-box-square-lg bg-white-10 icon-xl mb-4">
                                    <i className={`bi ${service.icon} text-white`}></i>
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services2