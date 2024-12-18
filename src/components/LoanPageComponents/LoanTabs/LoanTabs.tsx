import { Tabs } from '@ui';
import { AboutCard, RatesAndConditions } from './components';
import styles from './LoanTabs.module.scss';

export const LoanTabs = () => {
	const tabs = [
		{ label: 'About card', content: <AboutCard /> },
		{ label: 'Rates and conditions', content: <RatesAndConditions /> },
		{ label: 'Cashback', content: <div>Содержимое вкладки 3</div> },
		{ label: 'FAQ', content: <div>Содержимое вкладки 4</div> },
	];

	return (
		<section className={styles.loanTabs}>
			<Tabs tabs={tabs} />
		</section>
	);
};
