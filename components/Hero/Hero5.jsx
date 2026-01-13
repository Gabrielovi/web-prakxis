import React from 'react'

const Hero5 = ({ data }) => {
    return (
        <div className="section-spacing-lg bg-gradient-1 bg-opacity-10">
            <div className="container pt-4">
                <div className="row g-3 g-lg-4 g-xl-5">
                    <div className="col-12 col-lg-6">
                        <h2 className="display-5 fw-medium mb-0"><span className="text-gradient-1">{data.title}</span></h2>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className="text-dark-70">{data.description}</p>
                        <a className="button-fancy-gradient-1 mt-4" href={data.button.text}>{data.button.text}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero5