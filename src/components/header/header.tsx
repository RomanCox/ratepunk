import React, {useState} from 'react';

import {NavBar} from '../navBar/navBar.tsx';
import {MobileMenu} from './mobileMenu/mobileMenu.tsx';
import {PATH} from '../../common/enums/enums.ts';
import logo from '../../assets/logo.svg';
import menuButton from '../../assets/menu.svg';
import closeMenuButton from '../../assets/close.svg';
import {type IsMobileType} from '../../App.tsx';

import s from './header.module.scss';


export const Header = ({isMobile}: IsMobileType) => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);
    const [menuIsMove, setMenuIsMove] = useState<boolean>(true);

    const navLinks = [
        // {label: 'Chrome Extension', href: '/'},
        {label: 'Chrome Extension', href: PATH.CHROMEEXTENSION},
        // {label: 'Price Comparison', href: '/pricecomparison'},
        {label: 'Price Comparison', href: PATH.PRICECOMPARISON},
        // {label: 'Blog', href: '/blog'},
        {label: 'Blog', href: PATH.BLOG},
    ]

    const openMenu = () => {
        setMenuIsShow(true);
        setMenuIsMove(true);
    };

    const closeMenu = () => {
        setMenuIsMove(false);
        setTimeout(() => {
            setMenuIsShow(false);
        }, 500);
    };

    return (
        <>
            <div className={s.headerWrapper}>
                <div className={s.headerContainer}>
                    <img src={logo} alt='Ratepunk logo'/>
                    {isMobile
                        ? <img src={menuIsShow ? closeMenuButton : menuButton}
                               alt={closeMenuButton ? 'Close navigation menu button' : 'Open navigation menu button'}
                               onClick={menuIsShow ? closeMenu : openMenu}
                        />
                        : <NavBar navLinks={navLinks} />
                    }
                </div>
            </div>
            {menuIsShow && <MobileMenu menuIsMove={menuIsMove} closeMenu={closeMenu} navLinks={navLinks} />}
        </>
    );
};