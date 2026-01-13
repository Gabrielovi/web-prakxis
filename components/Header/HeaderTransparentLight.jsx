import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderTransparentLight = ({ data }) => {
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
        <div className={`header transparent-light nav-center ${isMenuVisible ? 'header-menu-show' : ''}`}>
            <div className="container-fluid">
                <div className="header-logo">
                    <Link href="/">
                        <img 
                            src="/logo-prakxis.png" 
                            alt="Prakxis Logo" 
                            style={{ 
                                height: '60px', 
                                width: 'auto', 
                                display: 'block',
                                /* ESTE FILTRO VUELVE EL LOGO BLANCO */
                                filter: 'brightness(0) invert(1)' 
                            }} 
                        />
                    </Link>
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
                    <ul className="list-inline-lg">
                        {data.socialLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    <i className={link.iconClass}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className={`mobile-menu-toggle ${isMenuVisible ? 'toggle-close' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default HeaderTransparentLight;