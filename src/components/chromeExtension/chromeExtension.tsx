import React from 'react';

import {type IsMobileType} from '../../App.tsx';

import {InputBlock} from './inputBlock.tsx';
import {DescriptionBlock} from './descriptionBlock.tsx';


import s from './chromeExtension.module.scss';

export const ChromeExtension: React.FC<IsMobileType> = ({isMobile}: IsMobileType) => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.mainContainer}>
				<InputBlock/>
				<DescriptionBlock isMobile={isMobile}/>
			</div>
		</div>
	);
};