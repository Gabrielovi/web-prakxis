import Image from 'next/image'
import React from 'react'

const About8 = ({ data, gradient2, gradient5 }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row align-items-center custom-row">
                    <div className="col-12 col-lg-6 custom-col">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <Image className="border-radius-1" src={data.image1.src} alt={data.image1.alt} loading="lazy" />
                                <div className="d-flex align-items-center mt-1">
                                    <p>{data.clientsText}</p>
                                    <div className="h2 display-3 fw-normal ps-3"><span className={gradient2 ? 'text-gradient-2' : gradient5 ? 'text-gradient-5' : 'text-gradient-1'}>{data.clientCount}</span></div>
                                </div>
                            </div>
                            <div className="col-6 mt-5">
                                <Image className="border-radius-1" src={data.image2.src} alt={data.image2.alt} loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 custom-col">
                        <h1 className="display-5 fw-medium mb-3">
                            {data.title.first}
                            <span className={gradient2 ? 'text-highlight-gradient-2' : gradient5 ? '' : 'text-highlight-gradient-1'}> {data.title.highlight}</span>
                            {data.title.last}
                        </h1>
                        <p>{data.description}</p>
                        <div className="d-flex align-items-center mt-4">
                            <ul className="avatar-group">
                                {data.avatars.map((avatar, index) => (
                                    <li key={index}>
                                        <Image src={avatar.src} alt={avatar.alt} loading="lazy" />
                                    </li>
                                ))}
                            </ul>
                            <div className="d-inline-block ps-3">
                                <p>{data.clientsMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About8