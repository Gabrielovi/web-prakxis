import React from 'react'

const Hero7 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <h1 className="display-1 fw-medium mb-0"><span className="text-gradient-1">{data.title}</span></h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p>{data.description}</p>
                        <a className="button-fancy-gradient-1 mt-4" href={data.button.href}>{data.button.text}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero7