import { useEffect, useRef } from 'react';
import Link from 'next/link';
import React, { useState } from 'react'

const HeaderFullscreenMenu1 = ({ data, className }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const headerRef = useRef(null);
    const headerPlaceholderRef = useRef(null);
    const c = useRef(0);

    const toggleMobileMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const a = window.pageYOffset;
            const currentScrollTop = a;

            if (c.current < currentScrollTop && a > 210) {
                if (!headerRef.current.classList.contains('header-menu-show')) {
                    headerRef.current.classList.add('hide');
                }
            } else if (c.current > currentScrollTop && !(a <= 210)) {
                headerRef.current.classList.remove('hide');
            }

            c.current = currentScrollTop;
        };

        const addPlaceholder = () => {
            if (headerRef.current && !headerPlaceholderRef.current) {
                const headerPlaceholder = document.createElement('div');
                headerPlaceholder.className = `header-placeholder${headerRef.current.classList.contains('header-lg') ? '-lg' : headerRef.current.classList.contains('header-xl') ? '-xl' : ''}`;
                headerRef.current.insertAdjacentElement('beforebegin', headerPlaceholder);
                headerPlaceholderRef.current = headerPlaceholder;
            }
        };

        const handleTransparentScroll = () => {
            const headerFixed = document.querySelectorAll('.header.sticky-autohide, .header.sticky');
            if (scrollY > 10) {
                headerFixed.forEach(header => {
                    header.classList.remove('transparent-light');
                    header.classList.remove('transparent-dark');
                });
            } else {
                headerFixed.forEach(header => {
                    if (headerRef.current.classList.contains('transparent-light')) {
                        header.classList.add('transparent-light');
                    }
                    if (headerRef.current.classList.contains('transparent-dark')) {
                        header.classList.add('transparent-dark');
                    }
                });
            }
        };

        if (headerRef.current) {
            window.addEventListener('scroll', handleScroll);
            addPlaceholder();
            if (headerRef.current.classList.contains('transparent-light') || headerRef.current.classList.contains('transparent-dark')) {
                window.addEventListener('scroll', handleTransparentScroll);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleTransparentScroll);
        };
    }, []);

    return (
        <>
            {/* Header */}
            <div ref={headerRef} className={`header logo-center ${className} sticky-autohide`}>
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
                                <ul className="list-inline-2xl display-1 font-family-poppins fw-semi-bold mt-4">
                                    {data.menuItems.map((link, index) => (
                                        <li className="py-1" key={index}>
                                            <Link className="link-hover-fill" href={link.href}>
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

export default HeaderFullscreenMenu1