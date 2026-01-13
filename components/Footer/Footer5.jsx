import React from 'react'

const Footer5 = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed-lg-bottom start-0 bottom-0 w-100 py-4 bg-black-90 backdrop-filter-blur">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <p>&copy; {data.rights} {currentYear}</p>
                    </div>
                    <div className="col-6 text-end">
                        <ul className="list-inline-lg">
                            {data.socialLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}><i className={item.iconClass}></i></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer5