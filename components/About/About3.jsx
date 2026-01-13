import React from 'react'

const About3 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <div className="circle-text">
                            <svg className="circle-svg rotating" viewBox="0 0 200 200">
                                <path id="textpath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke="rgba(28, 30, 32, 0.1)" stroke-width="10"></path>
                                <text textAnchor="start">
                                    <textPath xlinkHref="#textpath" textLength="300%">{data.textPath}</textPath>
                                </text>
                            </svg>
                            <div className="circle-text-inner icon-4xl text-gradient-1">
                                <i className="ti-crown"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <h2 className="display-6 fw-normal">{data.description}</h2>
                        <ul className="list-inline-2xl mt-4 mt-lg-5">
                            <li>
                                <a className="button button-lg button-rounded button-gradient-1 button-hover-slide" href={data.button1.href}>
                                    <span data-text={data.button1.text}>{data.button1.text}</span>
                                </a>
                            </li>
                            <li>
                                <a className="link-hover-line font-family-secondary" href={data.button2.href}>{data.button2.text}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3