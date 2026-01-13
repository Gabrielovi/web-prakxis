import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HeaderCenter2 = ({ data, className, dark, white2 }) => {
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
        <div className={`header nav-center ${isMenuVisible ? 'header-menu-show' : ''} ${className}`}>
            <div className="container-fluid">
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
                <div className="header-extra">
                    <a className={`button button-sm ${dark ? 'button-dark' : white2 ? 'button-white-2' : 'button-gradient-3'} button-rounded button-hover-slide`} href={data.button.href}><span data-text={data.button.text}>{data.button.text}</span></a>
                </div>
                {/* Mobile Menu Toggle */}
                <button className={`mobile-menu-toggle ${isMenuVisible ? 'toggle-close' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default HeaderCenter2