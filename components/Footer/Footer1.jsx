import React from 'react'

const Footer1 = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black">
            <div className="section-spacing-xs">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-3">
                            <h2 className="uppercase letter-spacing-1">{data.logoText}</h2>
                            <p>{data.about}</p>
                            <ul className="list-inline-lg mt-2 mt-lg-3">
                                {data.socialLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}><i className={item.iconClass}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1">
                            <h6 className="sm-heading">Explore</h6>
                            <ul className="list-unstyled mt-3">
                                {data.explore.map((item, index) => (
                                    <li key={index}>
                                        <a className="link-hover-line" href={item.href}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="sm-heading">Useful</h6>
                            <ul className="list-unstyled mt-3">
                                {data.useful.map((item, index) => (
                                    <li key={index}>
                                        <a className="link-hover-line" href={item.href}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div>
                                <h3 className="mb-1">{data.email}</h3>
                                <p>{data.emailInfo}</p>
                            </div>
                            <div className="mt-3 mt-lg-4">
                                <h3 className="mb-1">{data.phone}</h3>
                                <p>{data.phoneInfo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr className="hr-diagonal" />
                <div className="py-4">
                    <div className="row g-2">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p>&copy; {currentYear} {data.rights}</p>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <ul className="list-inline-dot">
                                {data.helpItems.map((item, index) => (
                                    <li key={index}><a className="link-hover-line" href={item.href}>{item.text}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1