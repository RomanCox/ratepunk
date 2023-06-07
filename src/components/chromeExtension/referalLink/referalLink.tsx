import React, {useState} from 'react';

import {useCopyText} from '../../../hooks/useCopyText.ts';

import success from '../../../assets/success.svg';

import s from './referalLink.module.scss';

export const ReferralLink: React.FC = () => {
	const [moveLift, setMoveLift] = useState<boolean>(false);
	const [inputText] = useState<string>('https://ratepunk.com/referral');

	const [value, copy] = useCopyText();

	const onClickHandler = async () => {
		const isCopied = await copy(inputText);
		if (isCopied) {
			setMoveLift(true);
			console.log(value);
		}
	};

	return (
		<div className={s.referralLinkContainer}>
			<div className={s.successContainer}>
				<img src={success} alt='Confirmed icon'/>
				<div className={s.textContainer}>
					<div className={moveLift ? `${s.textLiftDown} ${s.textLiftUp}` : s.textLiftDown}>
						<span>Your referral link is copied!</span>
						<span>Your email is confirmed!</span>
					</div>
				</div>
			</div>
			<label className={s.label}>
				<input disabled value={inputText} className={s.input}/>
				<button onClick={onClickHandler} className={s.button}>Copy</button>
			</label>
		</div>

	);
};