import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiLoan } from '@api/apiLoan';
import { Button, CheckBox, Loader, StepMessage } from '@ui';
import FileDock from '@assets/icons/File_dock.svg';
import PDF from '@assets/pdf/credit-card-offer.pdf';
import styles from './SigningOfDocuments.module.scss';

export const SigningOfDocuments = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const applicationId = pathSegments[pathSegments.length - 3];

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleSign = async () => {
		setIsLoading(true);
		try {
			await apiLoan.signDocument(applicationId);
		} catch (error) {
			console.log(error);
		} finally {
			setIsSuccessful(true);
			setIsLoading(false);
		}
	};

	if (isSuccessful) {
		return (
			<StepMessage
				heading='Documents have been successfully signed and sent for approval'
				paragraph='Within 10 minutes you will be sent a PIN code to your email for confirmation'
			/>
		);
	}

	return isLoading ? (
		<Loader />
	) : (
		<section className={styles.sign}>
			<div className={styles.sign__headingWrapper}>
				<h2 className={styles.sign__title}>Signing of documents</h2>
				<p className={styles.sign__paragraph}>Step 4 of 5</p>
			</div>
			<p className={styles.sign__info}>
				Information on interest rates under bank deposit agreements with
				individuals. Center for Corporate Information Disclosure. Information of
				a professional participant in the securities market. Information about
				persons under whose control or significant influence the Partner Banks
				are. By leaving an application, you agree to the processing of personal
				data, obtaining information, obtaining access to a credit history, using
				an analogue of a handwritten signature, an offer, a policy regarding the
				processing of personal data, a form of consent to the processing of
				personal data.
			</p>
			<div className={styles.sign__pdfInfo}>
				<img src={FileDock} alt='FileDock' />
				<a target='_blank' href={PDF} className={styles.sign__pdfLink}>
					Information on your card
				</a>
			</div>
			<div className={styles.sign__buttons}>
				<CheckBox
					text='I agree'
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<Button
					text='Send'
					stylesProps='signingButton'
					disabled={!isChecked}
					onClick={handleSign}
				/>
			</div>
		</section>
	);
};
