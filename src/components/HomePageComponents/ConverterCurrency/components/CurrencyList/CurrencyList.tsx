import styles from './CurrencyList.module.scss';
import { ICurrencyRateProps } from 'types';

export const CurrencyList = ({
	listCurrency,
}: {
	listCurrency: ICurrencyRateProps[] | null;
}) => {
	return (
		<ul className={styles.section__currencyList}>
			{listCurrency?.map(({ currency, rate }) => (
				<li key={currency}>
					{currency}:<span>{(1 / rate).toFixed(2)}</span>
				</li>
			))}
		</ul>
	);
};
