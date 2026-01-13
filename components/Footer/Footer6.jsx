import React from 'react'

const Footer6 = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-5 bg-dark">
            <div className="container">
                <div className="row g-2">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <p>&copy; {currentYear} {data.rights}</p>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <ul className="list-inline-dot">
                            {data.links.map((item, index) => (
                                <li key={index}><a href={item.href}>{item.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer6