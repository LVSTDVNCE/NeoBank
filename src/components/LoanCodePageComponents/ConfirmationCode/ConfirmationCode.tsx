import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ErrorMessage, Loader, StepMessage } from '@ui';
import { apiLoan } from '@api/apiLoan';
import { useApplicationStore } from 'src/store/ApplicationStore';
import CongratsIcon from '@assets/icons/offerIcon.svg';
import styles from './ConfirmationCode.module.scss';

export const ConfirmationCode = () => {
	const [pin, setPin] = useState<string[]>(['', '', '', '']);
	const [error, setError] = useState<string | null>(null);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

	const navigate = useNavigate();

	const { clearStatus, clearId, id } = useApplicationStore();

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
		setIsLoading(true);
		try {
			const response = await apiLoan.confirmCode(code, id.toString());
			if (response == 200) {
				setIsSuccessful(true);
				clearId();
				clearStatus();
			} else {
				setError('Invalid confirmation code');
			}
		} catch (error) {
			setError('Invalid confirmation code');
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isSuccessful) {
		return (
			<div className={styles.success}>
				<img src={CongratsIcon} alt='CongratsIcon' />
				<StepMessage
					heading='Congratulations! You have completed your new credit card.'
					paragraph='Your credit card will arrive soon. Thank you for choosing us!'
				/>
				<Button
					text='View other offers of our bank'
					onClick={() => navigate('/')}
				/>
			</div>
		);
	}

	return (
		<section className={styles.code}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h2 className={styles.code__heading}>
						Please enter confirmation code
					</h2>
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
					{error && <ErrorMessage stylesProps='loan-form-input' text={error} />}
				</>
			)}
		</section>
	);
};
