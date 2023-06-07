import React from 'react';

import logo from '../../assets/logo.svg';
import email from '../../assets/email-footer.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedIn from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import tiktok from '../../assets/tiktok.svg';
import {type IsMobileType} from '../../App.tsx';

import s from './footer.module.scss';
import {PreFooter} from "./preFooter/preFooter.tsx";

interface QuickLinkType {
    id: number,
    text: string,
    link: string,
}

interface SocialLinkType {
    id: number,
    icon: string,
    link: string,
}

export const Footer: React.FC<IsMobileType> = ({isMobile}) => {
	const quickLinks: QuickLinkType[] = [
		{id: 0, text: 'Chrome Extension', link: ''},
		{id: 1, text: 'Price Comparison', link: ''},
		{id: 2, text: 'How It Works', link: ''},
		{id: 3, text: 'Ratepunk Blog', link: ''},
		{id: 4, text: 'Privacy Policy', link: ''},
	];

	const socialLinks: SocialLinkType[] = [
		{id: 0, icon: instagram, link: 'https://www.instagram.com/ratepunk/'},
		{id: 1, icon: facebook, link: 'https://www.facebook.com/r8punk/'},
		{id: 2, icon: linkedIn, link: 'https://www.linkedin.com/company/ratepunk/'},
		{id: 3, icon: twitter, link: 'https://twitter.com/rate_punk'},
		{id: 4, icon: tiktok, link: 'https://www.tiktok.com/@rate_punk'},
	];

	return (
		<div className={s.footerWrapper}>
			<PreFooter/>
			<div className={s.footerContainer}>
				<div className={s.descriptionContainer}>
					<img src={logo} alt='Ratepunk Logo'/>
					<p className={s.description}>Ratepunk compares hotel room prices across the major online travel
                        agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a
                        price comparison, so you can be confident in knowing you’re getting the best deal!</p>
					{!isMobile && <p className={s.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>}
				</div>
				<div className={s.navContainer}>
					<div className={s.quickLinksContainer}>
						<h4 className={s.quickLinksTitle}>QUICK LINKS</h4>
						<div className={s.quickLinks}>
							{quickLinks.map(link =>
								<a key={link.id} href={link.link}>{link.text}</a>,
							)}
						</div>
					</div>
					<div className={s.contactLinksContainer}>
						<div className={s.contactContainer}>
							<h4 className={s.contactTitle}>CONTACT</h4>
							<a href='mailto:hi@ratepunk.com' className={s.emailLink}>
								<img src={email} alt='email logo' />
                                hi@ratepunk.com
							</a>
						</div>
						<div className={s.socialContainer}>
							<h4 className={s.socialTitle}>SOCIAL</h4>
							<div className={s.socialLinks}>
								{socialLinks.map(link =>
									<a key={link.id} className={s.socialLink} href={link.link}>
										<img src={link.icon} alt='Social Icon'/>
									</a>,
								)}
							</div>
						</div>
					</div>
				</div>
				{isMobile && <p className={s.mobileCopyright}>© 2021 Ratepunk. All Rights Reserved.</p>}
			</div>
		</div>
	);
};