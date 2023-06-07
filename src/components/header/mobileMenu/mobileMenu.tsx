import {NavBar, NavBarPropsType} from "../../navBar/navBar.tsx";

import s from './mobileMenu.module.scss';

type MobileMenuPropsType = NavBarPropsType & {
    closeMenu: () => void,
    menuIsMove: boolean,
}

export const MobileMenu = ({navLinks, closeMenu, menuIsMove}: MobileMenuPropsType) => {
    return (
        <div className={s.menuWrapper} onClick={closeMenu}>
            <div className={menuIsMove ? s.menuContainer : `${s.menuContainer} ${s.menuContainerOff}`} onClick={e => e.stopPropagation()}>
                <NavBar navLinks={navLinks}/>
            </div>
        </div>
    )
};