import Image from 'next/image'
import React from 'react'

const Hero4 = ({ data }) => {
    return (
        <div className="section-spacing-xl bg-black-40">
            <div className="bg-video">
                <video playsInline autoPlay muted loop>
                    <source src={data.videoSrc} type="video/mp4" />
                </video>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div className="py-4 py-lg-5">
                            <h1 className="display-1 fw-semi-bold uppercase mb-0">{data.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4