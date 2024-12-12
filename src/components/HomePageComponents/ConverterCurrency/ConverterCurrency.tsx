import { useFetch } from 'src/hooks/useFetch';
import { apiHome } from '@api/apiHome';
import { ICurrencyRateProps } from 'types';
import { Button } from '@ui';
import { updateRequest } from '@helpers/updateRequest';
import { CurrencyList, CurrencyStatus, CurrencyDate } from './components';
import styles from './ConverterCurrency.module.scss';

export const ConverterCurrency = () => {
	const {
		data: listCurrency,
		isLoading,
		error,
	} = useFetch<ICurrencyRateProps[]>({
		asyncFunction: apiHome.fetchExchangeRates,
		intervalMs: updateRequest(1000, 60, 15),
	});

	const goToAllCourses = () => {
		window.open('https://www.cbr.ru/currency_base/daily/', '_blank');
	};

	return (
		<section className={styles.section}>
			<div className={styles.section__wrapperLeft}>
				<h2 className={styles.section__heading}>
					Exchange rate in internet bank
				</h2>
				<p className={styles.section__para}>Currency</p>
				<CurrencyStatus isLoading={isLoading} error={error} />
				{!isLoading && !error && <CurrencyList listCurrency={listCurrency} />}
			</div>
			<CurrencyDate />
			<Button
				text='All courses'
				stylesProps='converter'
				onClick={goToAllCourses}
			/>
		</section>
	);
};
