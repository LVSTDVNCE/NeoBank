import { Divider } from '@ui';
import { RATES_AND_CONDITIONS } from './RatesAndConditions.const';
import styles from './RatesAndConditions.module.scss';

export const RatesAndConditions = () => {
	return (
		<ul className={styles.RatesAndConditions}>
			{RATES_AND_CONDITIONS.map((item, index) => (
				<li className={styles.list} key={item.rates}>
					<div className={styles.list__wrapper}>
						<p className={styles.list__para}>{item.rates}</p>
						<p className={styles.list__para}>
							<span>{item.conditions}</span>
							<span>{item.conditions_also}</span>
						</p>
					</div>
					{index !== RATES_AND_CONDITIONS.length - 1 && (
						<Divider styleProps='RatesAndConditionsDivider' />
					)}
				</li>
			))}
		</ul>
	);
};
