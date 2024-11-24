import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './../../ui/Button/Button'
import { headerNavItems } from './../../constants/headerNavItems'
import { NavBar } from '../../ui/NavBar/NavBar'
import { BurgerMenu } from '../../ui/BurgerMenu/BurgerMenu'
import styles from './Header.module.scss'

export const Header = () => {
	const [isAdaptive, setIsAdaptive] = useState(false)

	const handleResize = () => {
		if (window.innerWidth <= 920) {
			setIsAdaptive(true)
		} else {
			setIsAdaptive(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				NeoBank
			</Link>
			{isAdaptive ? (
				<BurgerMenu />
			) : (
				<>
					<NavBar NavBarItems={headerNavItems} />
					<Button text={'Online Bank'} />
				</>
			)}
		</header>
	)
}
