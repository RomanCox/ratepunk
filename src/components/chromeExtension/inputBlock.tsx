import React, {useState} from 'react';

import {Form} from './form/form.tsx';
import {ReferralLink} from './referalLink/referalLink.tsx';

import s from './chromeExtension.module.scss';

export const InputBlock: React.FC = () => {
	const [emailIsConfirmed, setEmailIsConfirmed] = useState<boolean>(false);

	const isConfirmedHandler = () => {
		setEmailIsConfirmed(true);
	};

	return (
		<div className={s.inputBlock}>
			<div className={s.contentContainer}>
				<h2 className={s.title}>REFER FRIENDS AND GET REWARDS</h2>
				<p className={s.description}>
                    Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend
					that installs our extension. Minimum cash-out at 20 coins.
				</p>
				{emailIsConfirmed
					? <ReferralLink/>
					: <Form isConfirmedHandler={isConfirmedHandler}/>
				}
			</div>
			<div className={s.warningText}>Limits on max rewards apply.</div>
		</div>
	);
};