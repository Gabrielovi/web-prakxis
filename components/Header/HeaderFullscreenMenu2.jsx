import Link from 'next/link';
import React, { useState } from 'react'

const HeaderFullscreenMenu2 = ({ data }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    return (
        <>
            <div className="header header-xl transparent-light">
                <div className="container-fluid px-lg-5">
                    {/* Logo */}
                    <div className="header-logo">
                        <h5 className="uppercase">{data.logoText}</h5>
                    </div>
                    {/* Menu Toggle */}
                    <button className="fm-toggle" onClick={toggleMobileMenu}>Menu<span></span></button>
                </div>{/* end container-fluid */}
            </div>

            <div className={`fullscreen-menu bg-black ${isMenuVisible ? 'show' : ''}`}>
                <div className="position-absolute top-50 start-50 translate-middle w-100">
                    <div className="container">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-lg-7">
                                <ul className="list-unstyled display-2 font-family-poppins fw-semi-bold mt-4">
                                    {data.menuItems.map((link, index) => (
                                        <li key={index}><a className="link-hover-fill" href={link.href}>{link.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="row g-4 g-lg-5">
                                    <div className="col-12">
                                        <h6 className="sm-heading">Address:</h6>
                                        <p>{data.address}</p>
                                    </div>
                                    <div className="col-6 col-lg-12">
                                        <h6 className="sm-heading">Contact:</h6>
                                        <ul className="list-unstyled">
                                            <li>{data.contact.phone1}</li>
                                            <li>{data.contact.phone2}</li>
                                            <li>{data.contact.email}</li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-lg-12">
                                        <h6 className="sm-heading">Follow us on:</h6>
                                        <ul className="list-inline">
                                            {data.socialLinks.map((link, index) => (
                                                <li key={index}><Link className="button-circle button-circle-sm button-circle-white-2" href={link.href}><i className={link.iconClass}></i></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>{/* end row(inner) */}
                            </div>
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>
                {/* Close Menu */}
                <button className="fm-close text-white" onClick={toggleMobileMenu}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </>
    )
}

export default HeaderFullscreenMenu2