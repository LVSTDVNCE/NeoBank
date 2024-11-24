import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Button from './../../ui/Button/Button'
import { headerNavItems } from './../../constants/headerNavItems'
import NavBar from '../../ui/NavBar/NavBar'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				NeoBank
			</Link>
			<NavBar NavBarItems={headerNavItems} />
			<Button text={'Online Bank'} />
		</header>
	)
}
