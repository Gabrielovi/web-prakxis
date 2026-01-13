import React from 'react'

const Hero8 = ({ data }) => {
    return (
        <>
            <div className="section-spacing">
                <div className="container pt-5">
                    <div className="row g-4">
                        <div className="col-12 col-xxl-10 offset-xxl-1">
                            <h1 className="display-1 display-lg font-family-poppins fw-semi-bold uppercase">
                                <span className="text-gradient-5">{data.title}</span>
                                <span className="d-block stroke-text fw-bold text-end">{data.subtitle}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 px-md-4 px-xxl-5">
                <div className="position-relative img-mask-1 overflow-hidden">
                    {/* BG Video */}
                    <div className="bg-video z-index-1">
                        <video playsinline autoplay muted loop>
                            <source src={data.videoSrc} type="video/mp4" />
                        </video>
                    </div>

                    <div className="section-spacing-xl bg-gradient-5 bg-opacity-10">
                        <div className="py-lg-4 py-xl-5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero8