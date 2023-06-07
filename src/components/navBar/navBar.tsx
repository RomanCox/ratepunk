import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './navBar.module.scss';

type LinkType = {
	label: string,
	href: string,
}

export type NavBarPropsType = {
	navLinks: Array<LinkType>
}

export const NavBar = ({navLinks}: NavBarPropsType) => {
	return (
		<div className={s.navContainer}>
			{navLinks.map(link => {
				//const isActive = pathname === link.href

				return (
					<NavLink
						key={link.label}
						to={link.href}
						className={({isActive}) => isActive ? `${s.linkActive} ${s.link}` : s.link}
					>
						{link.label}
					</NavLink>
				)
			})}
		</div>
	);
};