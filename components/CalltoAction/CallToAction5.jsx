import React from 'react'

const CallToAction5 = ({ data }) => {
    return (
        <div className="section-spacing pt-0 px-3 px-md-4 px-xxl-5">
            <div className="bg-image parallax border-radius-2" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                <div className="section-spacing-sm bg-black-70 px-4 px-lg-5">
                    <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="h1 display-4 fw-medium mb-0">{data.title}</div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-3 text-lg-end" data-cue="slideInLeft">
                                <a className="button button-rounded button-lg button-gradient-2 button-hover-slide" href={data.button.href}>
                                    <span data-text={data.button.text}>{data.button.text}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction5