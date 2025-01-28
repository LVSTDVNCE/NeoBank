import { useState, useRef } from 'react';
import styles from './ConfirmationCode.module.scss';
import { baseApi } from '@api/baseApi';
import { useLocation } from 'react-router-dom';

export const ConfirmationCode = () => {
	const [pin, setPin] = useState<string[]>(['', '', '', '']);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const applicationId = pathSegments[pathSegments.length - 2];

	const handleChange = (value: string, index: number) => {
		if (/\D/.test(value)) return;

		const newPin = [...pin];
		newPin[index] = value;
		setPin(newPin);

		if (value && index < 3) {
			inputsRef.current[index + 1]?.focus();
		}

		if (index === 3 && value) {
			handleSubmit(newPin.join(''));
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace' && !pin[index] && index > 0) {
			inputsRef.current[index - 1]?.focus();
		}
	};

	const handleSubmit = async (code: string) => {
		setError(null);
		setSuccess(false);

		try {
			const response = (await baseApi(
				`http://localhost:8080/document/${applicationId}/code`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					data: code,
				}
			)) as number;

			const result = await response;

			if (result) {
				setSuccess(true);
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className={styles.code}>
			<h2 className={styles.code__heading}>Please enter confirmation code</h2>
			<div className={styles.code__inputsContainer}>
				{pin.map((digit, index) => (
					<input
						key={index}
						type='number'
						maxLength={1}
						value={digit}
						onChange={e => handleChange(e.target.value, index)}
						onKeyDown={e => handleKeyDown(e, index)}
						ref={el => (inputsRef.current[index] = el)}
						className={styles.code__input}
						style={{
							backgroundImage: digit
								? 'none'
								: `radial-gradient(circle, transparent 30%, rgb(97, 97, 97) 31%, rgb(97, 97, 97)  32%, transparent 33%)`,
						}}
					/>
				))}
			</div>

			{error && <p className={styles.error}>{error}</p>}
			{success && <p className={styles.success}>Code verified successfully!</p>}
		</section>
	);
};
