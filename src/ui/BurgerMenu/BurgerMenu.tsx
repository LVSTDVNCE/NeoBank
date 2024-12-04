import { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { NavBar, Button } from '@ui';
import { headerNavItems } from '@constants/headerNavItems';
import burgerMenu from '@assets/icons/burgerMenu.png';
import burgerCross from '@assets/icons/burgerCross.png';

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
				<NavBar NavBarItems={headerNavItems} />
				<Button text={'Online Bank'} />
			</div>
		</div>
	);
};
