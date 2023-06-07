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
			{navLinks.map(({label, href}) => {
				return (
					<NavLink
						key={label}
						to={href}
						className={({isActive}) => isActive ? `${s.linkActive} ${s.link}` : s.link}
					>
						{label}
					</NavLink>
				)
			})}
		</div>
	);
};