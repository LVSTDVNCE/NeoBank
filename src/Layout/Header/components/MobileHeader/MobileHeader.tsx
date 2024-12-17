import { BurgerMenu } from '@ui';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@routes';
import styles from './MobileHeader.module.scss';

export const MobileHeader = () => {
	return (
		<div className={styles.mobileHeader}>
			<Link className={styles.header__logo} to={RoutePaths.HOME}>
				NeoBank
			</Link>
			<BurgerMenu />
		</div>
	);
};
