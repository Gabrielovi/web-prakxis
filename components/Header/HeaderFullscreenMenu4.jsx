import Link from 'next/link';
import React, { useState } from 'react'

const HeaderFullscreenMenu4 = ({ data }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <>
            {/* Header */}
            <div className="header logo-center">
                <div className="container-fluid">
                    {/* Extras */}
                    <div className="header-extra">
                        <ul className="list-inline-lg">
                            {data.socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.link}>
                                        <i className={link.iconClass}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Logo */}
                    <div className="header-logo">
                        <h5 className="uppercase">{data.logoText}</h5>
                    </div>
                    {/* Menu Toggle */}
                    <button className="fm-toggle" onClick={toggleMobileMenu}>
                        Menu<span></span>
                    </button>
                </div>
            </div>

            {/* Fullscreen Menu */}
            <div className={`fullscreen-menu bg-black ${isMenuVisible ? 'show' : ''}`}>
                <div className="position-absolute top-50 start-50 translate-middle w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <h6 className="sm-heading">Email:</h6>
                                        <h3 className="font-family-tertiary fst-italic text-white-50">
                                            {data.contact.email}
                                        </h3>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6 className="sm-heading">Phone:</h6>
                                        <h3 className="font-family-tertiary fst-italic text-white-50">
                                            {data.contact.phone}
                                        </h3>
                                    </div>
                                </div>
                                <ul className="list-inline-2xl display-1 font-family-secondary fw-normal mt-4">
                                    {data.menuItems.map((link, index) => (
                                        <li className="py-2" key={index}>
                                            <Link className="link-hover-gradient-1" href={link.href}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="fm-close text-white" onClick={toggleMobileMenu}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </>

    )
}

export default HeaderFullscreenMenu4