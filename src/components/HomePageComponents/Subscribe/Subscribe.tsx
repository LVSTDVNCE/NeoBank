import styles from './Subscribe.module.scss';
import { Link } from 'react-router-dom';
import email from '@assets/icons/email.svg';
import sendBtn from '@assets/icons/sendBtn.svg';
import { Button } from '@ui';

export const Subscribe = () => {
	return (
		<section className={styles.sectionSubscribe}>
			<Link to='/' className={styles.sectionSubscribe__link}>
				Support
			</Link>
			<h3 className={styles.sectionSubscribe__heading}>
				Subscribe Newsletter & get
			</h3>
			<span className={styles.sectionSubscribe__headingNews}>Bank News</span>
			<form className={styles.sectionSubscribe__form}>
				<img className={styles.sectionSubscribe__img} src={email} alt='email' />
				<input
					className={styles.sectionSubscribe__input}
					type='email'
					placeholder='Your email'
				/>
				<Button text='Subscribe' stylesProps='subscribe'>
					<img src={sendBtn} alt='send' />
				</Button>
			</form>
		</section>
	);
};
