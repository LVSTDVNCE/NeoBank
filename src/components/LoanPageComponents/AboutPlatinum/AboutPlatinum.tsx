import { Button } from '@ui';
import { AboutPlatinumList } from './components/AboutPlatinumList/AboutPlatinumList';
import PlatinumCard from '@assets/images/png/PlatinumCard.png';
import styles from './AboutPlatinum.module.scss';
import { useApplicationStore } from 'src/store/LoanStepStore';
import { useNavigate } from 'react-router-dom';

type TAboutPlatinumProps = {
	goToForm: () => void;
};

export const AboutPlatinum = ({ goToForm }: TAboutPlatinumProps) => {
	const navigate = useNavigate();
	const { status, id } = useApplicationStore();

	const continueApp = () => {
		if (status === 'APPROVED') {
			navigate(`/loan/${id}`);
		} else if (status === 'CC_APPROVED') {
			navigate(`/loan/${id}/document`);
		} else if (status === 'DOCUMENT_CREATED') {
			navigate(`/loan/${id}/document/sign`);
		} else if (status === 'DOCUMENT_SIGNED') {
			navigate(`/loan/${id}/code`);
		}
	};
	console.log(id, status);

	return (
		<section className={styles.AboutPlatinum}>
			<div className={styles.AboutPlatinum__wrapper}>
				<h1 className={styles.AboutPlatinum__heading}>
					Platinum digital credit card
				</h1>
				<p className={styles.AboutPlatinum__para}>
					Our best credit card. Suitable for everyday spending and shopping.
					Cash withdrawals and transfers without commission and interest.
				</p>
				<AboutPlatinumList />
				{status === '' && 'APPROVED' && (
					<Button text='Apply for Card' onClick={goToForm} />
				)}
				{status === 'APPROVED' && (
					<Button text='Continue' onClick={continueApp} />
				)}
				{status === 'CC_APPROVED' && (
					<Button text='Continue' onClick={continueApp} />
				)}
				{status === 'DOCUMENT_CREATED' && (
					<Button text='Continue' onClick={continueApp} />
				)}
				{status === 'DOCUMENT_SIGNED' && (
					<Button text='Continue' onClick={continueApp} />
				)}
			</div>
			<img
				className={styles.AboutPlatinum__img}
				src={PlatinumCard}
				alt='Platinum digital credit card'
			/>
		</section>
	);
};
