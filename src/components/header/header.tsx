import React, {useState} from 'react';

import {NavBar} from '../navBar/navBar.tsx';
import {MobileMenu} from './mobileMenu/mobileMenu.tsx';
import {PATH} from '../../common/enums/enums.ts';
import {LogoIcon} from '../../assets/logoIcon.tsx';
import {CloseIcon} from '../../assets/closeIcon.tsx';
import {MenuIcon} from '../../assets/menuIcon.tsx';

import {type IsMobileType} from '../../App.tsx';

import s from './header.module.scss';




export const Header = ({isMobile}: IsMobileType) => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);
    const [menuIsMove, setMenuIsMove] = useState<boolean>(true);

    const navLinks = [
        {label: 'Chrome Extension', href: PATH.CHROMEEXTENSION},
        {label: 'Price Comparison', href: PATH.PRICECOMPARISON},
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
                    <LogoIcon/>
                    {isMobile
                        ? menuIsShow ? <div onClick={closeMenu}><CloseIcon/></div> : <div onClick={openMenu}><MenuIcon/></div>
                        : <NavBar navLinks={navLinks} />
                    }
                </div>
            </div>
            {menuIsShow && <MobileMenu menuIsMove={menuIsMove} closeMenu={closeMenu} navLinks={navLinks} />}
        </>
    );
};