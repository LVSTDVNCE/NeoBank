import { HEADER_NAV_ITEMS } from '@constants/index';
import { Button, NavBar } from '@ui';
import { Link } from 'react-router-dom';
import styles from './DesktopHeader.module.scss';

export const DesktopHeader = () => {
	return (
		<div className={styles.desktopHeader}>
			<Link className={styles.header__logo} to='/'>
				NeoBank
			</Link>
			<NavBar NavBarItems={HEADER_NAV_ITEMS} />
			<Button text={'Online Bank'} />
		</div>
	);
};
