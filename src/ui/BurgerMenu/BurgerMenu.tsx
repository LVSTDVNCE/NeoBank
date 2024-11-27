import React, { useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { NavBar, Button } from '@ui'
import { headerNavItems } from '@constants/headerNavItems'
import burgerMenu from '@assets/icons/burgerMenu.png'
import burgerCross from '@assets/icons/burgerCross.png'

export const BurgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.burgerMenu}>
			<button className={styles.burgerButton} onClick={toggleMenu}>
				{isOpen ? (
					<img src={burgerCross} alt='burgerMenu' />
				) : (
					<img src={burgerMenu} alt='burgerMenu' />
				)}
			</button>
			{isOpen && (
				<div className={styles.menu}>
					<NavBar NavBarItems={headerNavItems} />
					<Button text={'Online Bank'} />
				</div>
			)}
		</div>
	)
}
