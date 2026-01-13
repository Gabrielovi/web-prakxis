import React from 'react'

const Footer4 = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-4">
            <div className="container-fluid px-lg-5">
                <div className="row">
                    <div className="col-6">
                        <p>&copy; {currentYear} {data.rights}.</p>
                    </div>
                    <div className="col-6 text-end">
                        <ul className="list-inline-dot sm-heading">
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

export default Footer4