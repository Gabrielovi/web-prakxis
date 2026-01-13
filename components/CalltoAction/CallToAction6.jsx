import React from 'react'

const CallToAction6 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="bg-image parallax border-radius-1" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                    <div className="bg-black-60 px-4 py-5 p-md-5">
                        <div className="row g-4 align-items-center">
                            <div className="col-12 col-lg-8 text-center text-lg-start">
                                <div className="h1 display-4 font-family-poppins text-white fw-bold stroke-text mb-0 uppercase">{data.title}</div>
                            </div>
                            <div className="col-12 col-lg-4 text-center text-lg-end" data-cue="slideInLeft">
                                <a className="button button-rounded button-lg button-gradient-1" href={data.button.link}>{data.button.text}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction6