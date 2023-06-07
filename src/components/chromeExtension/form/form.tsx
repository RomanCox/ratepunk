import React, {type ChangeEvent, type FormEvent, useState} from 'react';

import {EmailApi} from '../../../api/api.ts';

import {Input} from './input.tsx';

import s from './form.module.scss';

interface FormPropsType {
    isConfirmedHandler: () => void,
}

export const Form: React.FC<FormPropsType> = ({isConfirmedHandler}: FormPropsType) => {
	const [email, setEmail] = useState<string>('');
	const [error, setError] = useState<string>('Field cannot be empty'); // Error State
	const [isEmailDirty, setIsEmailDirty] = useState<boolean>(false); // Error State

	const onBlurHandler = () => {
		setIsEmailDirty(true);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
		const re =
			/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+) *@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if (!re.test(String(e.currentTarget.value).toLowerCase())) {
			setError('Invalid Email');
		} else {
			setError('');
		}
	};

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isEmailDirty && !error) {
			EmailApi.updateEmail(email)
				.then(() => {
					isConfirmedHandler();
				})
				.catch(error => {
					throw new Error(error);
				});
		} else {
			setIsEmailDirty(true);
		}
	};

	return (
		<form className={s.form} onSubmit={(e) => { onSubmitHandler(e); }}>
			{(isEmailDirty && error) && <span className={s.error}>{error}</span>}
			<Input type='email' value={email} onChange={onChangeHandler} onBlur={onBlurHandler}/>
			<button type='submit' className={s.button}>Get Referral Link</button>
		</form>

	);
};