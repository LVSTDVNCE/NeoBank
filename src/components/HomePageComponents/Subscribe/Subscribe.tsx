import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, ErrorMessage } from '@ui';
import { baseApi } from '@api/baseApi';
import email from '@assets/icons/email.svg';
import sendBtn from '@assets/icons/sendBtn.svg';
import styles from './Subscribe.module.scss';

type TFormDataProps = {
	email: string;
};

export const Subscribe: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TFormDataProps>();
	const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

	useEffect(() => {
		const subscriptionStatus = localStorage.getItem('isSubscribed');
		if (subscriptionStatus === 'true') {
			setIsSubscribed(true);
		}
	}, []);

	const onSubmit = async (data: TFormDataProps) => {
		try {
			await baseApi('http://localhost:8080/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data,
			});
			setIsSubscribed(true);
			localStorage.setItem('isSubscribed', 'true');
			reset();
		} catch (error) {
			console.error('Failed to subscribe:', error);
		}
	};

	return (
		<section className={styles.sectionSubscribe}>
			<Link to='/' className={styles.sectionSubscribe__link}>
				Support
			</Link>
			<h3 className={styles.sectionSubscribe__heading}>
				Subscribe Newsletter & get
			</h3>
			<span className={styles.sectionSubscribe__headingNews}>Bank News</span>

			{isSubscribed ? (
				<p className={styles.sectionSubscribe__headingNews}>
					You are already subscribed to the bank's newsletter
				</p>
			) : (
				<form
					className={styles.sectionSubscribe__form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<img
						className={styles.sectionSubscribe__img}
						src={email}
						alt='email'
					/>
					<input
						className={styles.sectionSubscribe__input}
						type='email'
						placeholder='Your email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: 'Invalid email address',
							},
						})}
					/>
					<Button text='Subscribe' stylesProps='subscribe'>
						<img src={sendBtn} alt='send' />
					</Button>
					{errors.email && <ErrorMessage text={errors.email.message} />}
				</form>
			)}
		</section>
	);
};
