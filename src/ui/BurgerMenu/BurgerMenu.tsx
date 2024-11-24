import React, { useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { NavBar } from '../../ui/NavBar/NavBar'
import { Button } from './../../ui/Button/Button'
import { headerNavItems } from './../../constants/headerNavItems'

export const BurgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.burgerMenu}>
			<button className={styles.burgerButton} onClick={toggleMenu}>
				{isOpen ? '✖' : '☰'}
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
