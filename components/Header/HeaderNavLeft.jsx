import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HeaderNavLeft = ({ data }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMenuVisible && !event.target.closest('.header-menu-show, .mobile-menu-toggle')) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuVisible]);

    return (
        <div className={`header nav-left ${isMenuVisible ? 'header-menu-show' : ''}`}>
            <div className="container-fluid px-xxl-5">
                <div className="header-logo">
                    <h5 className="uppercase">{data.logoText}</h5>
                </div>
                <div className="header-menu nav-link-hover-line">
                    <ul className="nav">
                        {data.menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-extra ms-4">
                    <div className="d-flex align-items-center">
                        <ul className="list-inline-lg">
                            {data.socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}><i className={link.iconClass}></i></a>
                                </li>
                            ))}
                        </ul>
                        <a className="button button-sm button-dark button-rounded button-hover-slide ms-3 ms-lg-4" href="#"><span data-text="Button">Button</span></a>
                    </div>
                </div>
                <button className={`mobile-menu-toggle ${isMenuVisible ? 'toggle-close' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default HeaderNavLeft