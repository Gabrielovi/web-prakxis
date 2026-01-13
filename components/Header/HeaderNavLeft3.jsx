import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HeaderNavLeft3 = ({ data, className }) => {
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
        <div className={`header ${className} ${isMenuVisible ? 'header-menu-show' : ''}`}>
            <div className="container">
                {/* Logo */}
                <div className="header-logo">
                    <h5 className="uppercase">{data.logoText}</h5>
                </div>
                {/* Menu */}
                <div className="header-menu nav-link-hover-line">
                    <ul className="nav">
                        {data.menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Extras */}
                <div className="header-extra ms-4">
                    <ul className="list-inline-lg">
                        {data.socialLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}><i className={link.iconClass}></i></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Mobile Menu Toggle */}
                <button className={`mobile-menu-toggle ${isMenuVisible ? 'toggle-close' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                </button>
            </div>
        </div>

    )
}

export default HeaderNavLeft3