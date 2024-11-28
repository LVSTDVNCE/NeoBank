import { Link } from 'react-router-dom';
import { NavBar, Button, BurgerMenu } from '@ui';
import styles from './Header.module.scss';
import { headerNavItems } from '@constants/headerNavItems';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.desktopHeader}>
				<Link className={styles.header__logo} to='/'>
					NeoBank
				</Link>
				<NavBar NavBarItems={headerNavItems} />
				<Button text={'Online Bank'} />
			</div>
			<div className={styles.mobileHeader}>
				<Link className={styles.header__logo} to='/'>
					NeoBank
				</Link>
				<BurgerMenu />
			</div>
		</header>
	);
};
