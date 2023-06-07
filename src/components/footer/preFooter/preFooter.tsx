import React from 'react';

import {ChromeIcon} from '../../../assets/chromeIcon.tsx';
import {AppleIcon} from '../../../assets/appleIcon.tsx';
import {StarIcon} from '../../../assets/starIcon.tsx';

import s from './preFooter.module.scss';



interface StoreLinkType {
    id: number,
    icon: JSX.Element,
    name: string,
    link: string,
}

export const PreFooter: React.FC = () => {
	const storeLinks: StoreLinkType[] = [
		{
			id: 0,
			icon: <ChromeIcon/>,
			name: 'chrome web store',
			link: 'https://chrome.google.com/webstore/category/extensions',
		},
		{
			id: 1,
			icon: <AppleIcon/>,
			name: 'apple app store',
			link: 'https://www.apple.com/app-store/',
		},
	];

	const stars: Array<number> = [0, 1, 2, 3, 4];

	return (
		<div className={s.preFooterWrapper}>
			<div className={s.preFooterContainer}>
				<div className={s.storeLinksContainer}>
					{storeLinks.map(({id, icon, name, link}) =>
						<a key={id} className={s.storeLink} href={link}>
							{icon}
							<div className={s.storeTextsContainer}>
								<p className={s.text}>available in the</p>
								<p className={s.boldText}>{name}</p>
							</div>
						</a>,
					)}
				</div>
				<div className={s.ratingContainer}>
					<a className={s.starsContainer}
						href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck'
					>
						{stars.map((star) => <div key={star}><StarIcon/></div>)}
					</a>
					<span className={s.ratingText}>Chrome Store reviews</span>
				</div>
			</div>
		</div>
	);
};