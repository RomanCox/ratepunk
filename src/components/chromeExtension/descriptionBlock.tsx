import React from 'react';

import emailIcon from '../../assets/invite.svg';
import collectCoin from '../../assets/collect-coins.svg';
import voucher from '../../assets/voucher.svg';
import {type IsMobileType} from '../../App.tsx';

import s from './chromeExtension.module.scss';

interface StepType {
    id: number,
    icon: string,
    title: string,
    description: string,
}

export const DescriptionBlock: React.FC<IsMobileType> = ({isMobile}) => {
	const steps: StepType[] = [
		{
			id: 1,
			icon: emailIcon,
			title: 'INVITE FRIENDS',
			description: 'Refer friends with your unique referral link.',
		},
		{
			id: 2,
			icon: collectCoin,
			title: 'COLLECT COINS',
			description: 'Get  coin for each friend that installs our extansion using your referral link',
		},
		{
			id: 3,
			icon: voucher,
			title: 'GET VOUCHER',
			description: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
		},
	];

	return (
		<div className={s.descriptionBlock}>
			{steps.map(step =>
				<div key={step.id} className={s.step} style={!isMobile && step.id === 2 ? {flexDirection: 'row-reverse'} : {}}>
					<img src={step.icon} alt='Step icon' />
					<div className={s.stepDescriptionContainer}>
						<p className={s.stepNumber}>STEP {step.id}</p>
						<h3 className={s.stepTitle}>{step.title}</h3>
						<p className={s.stepDescription}>{step.description}</p>
					</div>
				</div>,
			)}
		</div>
	);
};