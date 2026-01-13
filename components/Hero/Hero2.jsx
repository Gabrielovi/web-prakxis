import React from 'react'

const Hero2 = ({ data }) => {
    return (
        <div className="px-3 px-md-4 px-xxl-5">
            <div className="bg-image parallax border-radius-2" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                <div className="bg-gradient-2 bg-opacity-20">
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container text-center py-lg-4">
                            <div className="row g-4">
                                <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                    <h1 className="display-2 fw-normal">{data.title}</h1>
                                    <ul className="list-inline-2xl mt-4">
                                        <li>
                                            <a className="button button-lg button-rounded button-gradient-2 button-hover-slide" href={data.button1.href}><span data-text={data.button1.text}>{data.button1.text}</span></a>
                                        </li>
                                        <li>
                                            <a className="link-hover-line font-family-secondary ms-lg-2" href={data.button2.href}>{data.button2.text}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2