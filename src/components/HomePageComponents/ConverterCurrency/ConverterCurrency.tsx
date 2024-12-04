import { useEffect, useState } from 'react';
import { fetchExchangeRates } from '@api/fetchExchangeRates';
import { ICurrencyRate } from 'types';
import { getDate } from '@helpers/getDate';
import iconBank from '@assets/icons/iconBank.svg';
import styles from './ConverterCurrency.module.scss';
import { Button } from '@ui';

export const ConverterCurrency = () => {
	const [currentDate, setCurrentDate] = useState('');
	const [listCurrency, setListCurrency] = useState<ICurrencyRate[]>([]);

	useEffect(() => {
		setCurrentDate(getDate());
		const fetchData = async () => {
			const result = await fetchExchangeRates();
			setListCurrency(result);
		};
		fetchData();
		const intervalId = setInterval(fetchData, 900000); // обновление каждые 15 минут
		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className={styles.section}>
			<div className={styles.section__wrapperLeft}>
				<h2 className={styles.section__heading}>
					Exchange rate in internet bank
				</h2>
				<p className={styles.section__para}>Currency</p>
				<ul className={styles.section__currencyList}>
					{listCurrency.map(({ currency, rate }) => (
						<li key={currency}>
							{currency}:<span>{(1 / rate).toFixed(2)}</span>
						</li>
					))}
				</ul>
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
