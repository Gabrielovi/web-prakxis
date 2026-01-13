import Image from 'next/image'
import React from 'react'

const Team2 = ({ data, uppercase }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 text-center">
                        {uppercase ? (
                            <h2 className="display-5 fw-semi-bold uppercase text-center">
                                {data.title}
                            </h2>
                        ) : (
                            <h2 className="display-4 fw-medium text-center">
                                {data.title.split(" ")[0]}{" "}
                                <span className="text-highlight-gradient-1">
                                    {data.title.split(" ")[1]} {data.title.split(" ")[2]}
                                </span>
                            </h2>
                        )}

                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="row gx-3 gy-4 gy-lg-5 mt-1" data-cues="fadeIn">
                    {data.members.map((member) => (
                        <div className="col-12 col-md-6 col-lg-3" key={member.id}>
                            <div className="team-box">
                                <div className="team-img">
                                    <Image src={member.image} alt={member.name} />
                                </div>
                                <div className="team-hover p-3">
                                    <div className="bg-black-20 backdrop-filter-blur border-radius p-3 text-center">
                                        <ul className="list-inline-lg">
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
                            </div>
                            <div className="pt-3 text-center">
                                <h5 className="mb-1">{member.name}</h5>
                                <span>{member.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team2