import React from 'react';

import {CollectCoinsIcon} from '../../assets/collectCoinsIcon.tsx';
import {VoucherIcon} from '../../assets/voucherIcon.tsx';
import {InviteIcon} from '../../assets/inviteIcon.tsx';
import {type IsMobileType} from '../../App.tsx';

import s from './chromeExtension.module.scss';


interface StepType {
    id: number,
    icon: JSX.Element,
    title: string,
    description: string,
}

export const DescriptionBlock: React.FC<IsMobileType> = ({isMobile}) => {
	const steps: StepType[] = [
		{
			id: 1,
			icon: <InviteIcon/>,
			title: 'INVITE FRIENDS',
			description: 'Refer friends with your unique referral link.',
		},
		{
			id: 2,
			icon: <CollectCoinsIcon/>,
			title: 'COLLECT COINS',
			description: 'Get  coin for each friend that installs our extansion using your referral link',
		},
		{
			id: 3,
			icon: <VoucherIcon/>,
			title: 'GET VOUCHER',
			description: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
		},
	];

	return (
		<div className={s.descriptionBlock}>
			{steps.map(({id, icon, title, description}) =>
				<div key={id} className={s.step} style={!isMobile && id === 2 ? {flexDirection: 'row-reverse'} : {}}>
					{icon}
					<div className={s.stepDescriptionContainer}>
						<p className={s.stepNumber}>STEP {id}</p>
						<h3 className={s.stepTitle}>{title}</h3>
						<p className={s.stepDescription}>{description}</p>
					</div>
				</div>,
			)}
		</div>
	);
};