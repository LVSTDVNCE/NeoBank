import { DesktopHeader } from './components/DesktopHeader/DesktopHeader';
import { MobileHeader } from './components/MobileHeader/MobileHeader';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<DesktopHeader />
			<MobileHeader />
		</header>
	);
};
