import { useState } from 'react';
import { NavBar, Button } from '@ui';
import { HEADER_NAV_ITEMS } from '@constants/index';
import burgerMenu from '@assets/icons/burgerMenu.png';
import burgerCross from '@assets/icons/burgerCross.png';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.burgerMenu}>
			<Button stylesProps='burgerButton' onClick={toggleMenu}>
				<img src={isOpen ? burgerCross : burgerMenu} alt='burgerMenu' />
			</Button>
			<div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
				<NavBar NavBarItems={HEADER_NAV_ITEMS} />
				<Button text={'Online Bank'} />
			</div>
		</div>
	);
};
