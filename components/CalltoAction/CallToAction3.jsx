import React from 'react'

const CallToAction3 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div
                    className="bg-image parallax border-radius-2"
                    style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}
                >
                    <div className="section-spacing-lg bg-black-70 px-4 px-md-5 text-center">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="h1 display-4 text-white">{data.title}</div>
                                <p className="fs-5">{data.description}</p>
                                <ul className="list-inline-2xl mt-4" data-cues="slideInUp">
                                    <li>
                                        <a className="button button-rounded button-lg button-gradient-1" href={data.button1.href}>{data.button1.text}</a>
                                    </li>
                                    <li>
                                        <a className="link-hover-line" href={data.button2.href}>{data.button2.text}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction3