import React from 'react';

import {PATH} from "../../common/enums/enums.ts";
import {PreFooter} from "./preFooter/preFooter.tsx";
import {LogoIcon} from "../../assets/logoIcon.tsx";
import {EmailIcon} from "../../assets/emailIcon.tsx";
import {InstagramIcon} from "../../assets/instagramIcon.tsx";
import {FacebookIcon} from "../../assets/facebookIcon.tsx";
import {LinkedinIcon} from "../../assets/linkedinIcon.tsx";

import {type IsMobileType} from '../../App.tsx';

import s from './footer.module.scss';
import {TwitterIcon} from "../../assets/twitterIcon.tsx";
import {TikTokIcon} from "../../assets/tiktokIcon.tsx";

interface QuickLinkType {
    id: number,
    text: string,
    link: string,
}

interface SocialLinkType {
    id: number,
    icon: JSX.Element,
    link: string,
}

export const Footer: React.FC<IsMobileType> = ({isMobile}) => {
	const quickLinks: QuickLinkType[] = [
		{id: 0, text: 'Chrome Extension', link: PATH.CHROMEEXTENSION},
		{id: 1, text: 'Price Comparison', link: PATH.PRICECOMPARISON},
		{id: 2, text: 'How It Works', link: '/'},
		{id: 3, text: 'Ratepunk Blog', link: PATH.BLOG},
		{id: 4, text: 'Privacy Policy', link: '/'},
	];

	const socialLinks: SocialLinkType[] = [
		{id: 0, icon: <InstagramIcon/>, link: 'https://www.instagram.com/ratepunk/'},
		{id: 1, icon: <FacebookIcon/>, link: 'https://www.facebook.com/r8punk/'},
		{id: 2, icon: <LinkedinIcon/>, link: 'https://www.linkedin.com/company/ratepunk/'},
		{id: 3, icon: <TwitterIcon/>, link: 'https://twitter.com/rate_punk'},
		{id: 4, icon: <TikTokIcon/>, link: 'https://www.tiktok.com/@rate_punk'},
	];

	return (
		<div className={s.footerWrapper}>
			<PreFooter/>
			<div className={s.footerContainer}>
				<div className={s.descriptionContainer}>
					<LogoIcon/>
					<p className={s.description}>Ratepunk compares hotel room prices across the major online travel
                        agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a
                        price comparison, so you can be confident in knowing you’re getting the best deal!</p>
					{!isMobile && <p className={s.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>}
				</div>
				<div className={s.navContainer}>
					<div className={s.quickLinksContainer}>
						<h4 className={s.quickLinksTitle}>QUICK LINKS</h4>
						<div className={s.quickLinks}>
							{quickLinks.map(({id, link, text}) =>
								<a key={id} href={link}>{text}</a>,
							)}
						</div>
					</div>
					<div className={s.contactLinksContainer}>
						<div className={s.contactContainer}>
							<h4 className={s.contactTitle}>CONTACT</h4>
							<a href='mailto:hi@ratepunk.com' className={s.emailLink}>
								<EmailIcon/>
                                hi@ratepunk.com
							</a>
						</div>
						<div className={s.socialContainer}>
							<h4 className={s.socialTitle}>SOCIAL</h4>
							<div className={s.socialLinks}>
								{socialLinks.map(({id, link, icon}) =>
									<a key={id} className={s.socialLink} href={link}>
										{icon}
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