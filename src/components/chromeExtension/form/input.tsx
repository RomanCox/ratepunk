import React, {type ChangeEvent, type DetailedHTMLProps, type FocusEvent, type InputHTMLAttributes} from 'react';

import emailIcon from '../../../assets/email.svg';

import s from './form.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputPropsType = DefaultInputPropsType & {
    value: string,
}

export const Input: React.FC<InputPropsType> = ({value, onChange, onBlur}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);
	};

	const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
		onBlur && onBlur(e);
	};

	return (
		<div className={s.inputContainer}>
			<input
				type='email'
				className={s.input}
				placeholder='Enter your email address'
				value={value}
				onChange={(e) => { onChangeHandler(e); }}
				onBlur={(e) => { onBlurHandler(e); }}
			/>
			<img src={emailIcon} className={s.emailIcon} alt='Email Icon'></img>
		</div>
	);
};