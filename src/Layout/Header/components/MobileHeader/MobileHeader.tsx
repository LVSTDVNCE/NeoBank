import { BurgerMenu } from '@ui';
import { Link } from 'react-router-dom';
import styles from './MobileHeader.module.scss';

export const MobileHeader = () => {
	return (
		<div className={styles.mobileHeader}>
			<Link className={styles.header__logo} to='/'>
				NeoBank
			</Link>
			<BurgerMenu />
		</div>
	);
};
