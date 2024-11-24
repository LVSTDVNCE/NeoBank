import styles from './SectionSubscribe.module.scss'
import { Link } from 'react-router-dom'
import email from './../../../assets/icons/email.svg'
import sendBtn from './../../../assets/icons/sendBtn.svg'

export const SectionSubscribe = () => {
	return (
		<section className={styles.sectionSubscribe}>
			<Link to='/' className={styles.sectionSubscribe__link}>
				Support
			</Link>
			<h3 className={styles.sectionSubscribe__heading}>
				Subscribe Newsletter & get
				<br />
				<span className={styles.sectionSubscribe__headingNews}>Bank News</span>
			</h3>
			<form className={styles.sectionSubscribe__form}>
				<img className={styles.sectionSubscribe__img} src={email} alt='email' />
				<input
					className={styles.sectionSubscribe__input}
					type='email'
					placeholder='email'
				/>
				<button className={styles.sectionSubscribe__button}>
					<img src={sendBtn} alt='send' /> Subscribe
				</button>
			</form>
		</section>
	)
}
