import Image from 'next/image'
import React from 'react'

const Team3 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 text-center">
                        <h2 className="display-4 fw-medium text-center">{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="row gx-3 gy-4 gy-lg-5 mt-1 text-center" data-cues="slideInUp">
                    {data.members.map((member, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="bg-white p-4 border-radius-1">
                                <Image className="img-avatar-200" src={member.image} alt={member.name} loading="lazy" />
                                <div className="pt-3 text-center">
                                    <h5 className="mb-1">{member.name}</h5>
                                    <span>{member.position}</span>
                                </div>
                                <ul className="list-inline-lg mt-3">
                                    {member.social.map((social, i) => (
                                        <li key={i}>
                                            <a href={social.link}>
                                                <i className={`bi bi-${social.icon}`}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team3