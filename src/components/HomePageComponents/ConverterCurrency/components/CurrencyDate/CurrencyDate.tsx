import { getDate } from '@helpers/getDate';
import styles from './CurrencyDate.module.scss';
import iconBank from '@assets/icons/iconBank.svg';

export const CurrencyDate = () => {
	const currentDate = getDate();
	return (
		<div className={styles.section__wrapperRight}>
			<p className={styles.section__date}>
				Update every 15 minutes, MSC{' '}
				<span className={styles.section__dateToday}>{currentDate}</span>
			</p>
			<img className={styles.section__img} src={iconBank} alt='Bank' />
		</div>
	);
};
