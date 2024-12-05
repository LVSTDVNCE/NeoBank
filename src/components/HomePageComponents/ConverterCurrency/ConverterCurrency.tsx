import { useFetch } from 'src/hooks/useFetch';
import { fetchExchangeRates } from '@api/apiHome/fetchExchangeRates';
import { ICurrencyRateProps } from 'types';
import { getDate } from '@helpers/getDate';
import { Button } from '@ui';
import { updateRequest } from '@helpers/updateRequest';
import iconBank from '@assets/icons/iconBank.svg';
import styles from './ConverterCurrency.module.scss';

export const ConverterCurrency = () => {
	const {
		data: listCurrency,
		isLoading,
		error,
	} = useFetch<ICurrencyRateProps[]>({
		asyncFunction: fetchExchangeRates,
		intervalMs: updateRequest(1000, 60, 15),
	});

	const currentDate = getDate();

	return (
		<section className={styles.section}>
			<div className={styles.section__wrapperLeft}>
				<h2 className={styles.section__heading}>
					Exchange rate in internet bank
				</h2>
				<p className={styles.section__para}>Currency</p>
				{isLoading ? (
					<p>Loading exchange rates...</p>
				) : error ? (
					<p className={styles.section__error}>
						Error loading exchange rates: {error}
					</p>
				) : (
					<ul className={styles.section__currencyList}>
						{listCurrency?.map(({ currency, rate }) => (
							<li key={currency}>
								{currency}:<span>{(1 / rate).toFixed(2)}</span>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.section__wrapperRight}>
				<p className={styles.section__date}>
					Update every 15 minutes, MSC{' '}
					<span className={styles.section__dateToday}>{currentDate}</span>
				</p>
				<img className={styles.section__img} src={iconBank} alt='Bank' />
			</div>
			<Button text='All courses' stylesProps='converter' />
		</section>
	);
};
