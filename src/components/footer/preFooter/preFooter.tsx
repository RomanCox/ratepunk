import React from 'react';

import chromeStore from '../../../assets/chrome.svg';
import appStore from '../../../assets/apple.svg';
import star from '../../../assets/star.svg';

import s from './preFooter.module.scss';


interface StoreLinkType {
    id: number,
    icon: string,
    name: string,
    link: string,
}

export const PreFooter: React.FC = () => {
	const storeLinks: StoreLinkType[] = [
		{
			id: 0,
			icon: chromeStore,
			name: 'chrome web store',
			link: 'https://chrome.google.com/webstore/category/extensions',
		},
		{
			id: 1,
			icon: appStore,
			name: 'apple app store',
			link: 'https://www.apple.com/app-store/',
		},
	];

	const stars: string[] = [star, star, star, star, star];

	return (
		<div className={s.preFooterWrapper}>
			<div className={s.preFooterContainer}>
				<div className={s.storeLinksContainer}>
					{storeLinks.map(({id, icon, name, link}) =>
						<a key={id} className={s.storeLink} href={link}>
							<img src={icon} alt='Store Icon'/>
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
						{stars.map((star, index) => <img key={index} src={star} alt='Rating Star'/>)}
					</a>
					<span className={s.ratingText}>Chrome Store reviews</span>
				</div>
			</div>
		</div>
	);
};