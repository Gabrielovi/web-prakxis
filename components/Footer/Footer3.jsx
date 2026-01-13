import React from 'react'

const Footer3 = ({ data, dark }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={dark ? 'bg-dark' : 'bg-black'}>
            <div className="section-spacing-sm">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-4">
                            <h2 className="uppercase letter-spacing-1">{data.logoText}</h2>
                            <p>{data.about}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h6 className="sm-heading">Email:</h6>
                            <h3>{data.email}</h3>
                            <p>{data.emailInfo}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h6 className="sm-heading">Phone:</h6>
                            <h3>{data.phone}</h3>
                            <p>{data.phoneInfo}</p>
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

export default Footer3