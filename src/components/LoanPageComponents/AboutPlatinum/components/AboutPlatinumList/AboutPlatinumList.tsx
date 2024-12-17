import { Tooltip } from '@ui';
import { ABOUT_PLATINUM } from './AboutPlatinum.const';
import styles from './AboutPlatinumList.module.scss';

export const AboutPlatinumList = () => {
	return (
		<ul className={styles.AboutPlatinum__list}>
			{ABOUT_PLATINUM.map(item => (
				<li key={item.value}>
					<Tooltip text={item.textTooltip}>
						<p className={styles.AboutPlatinum__para}>{item.value}</p>
						<p className={styles.AboutPlatinum__para}>{item.features}</p>
					</Tooltip>
				</li>
			))}
		</ul>
	);
};
