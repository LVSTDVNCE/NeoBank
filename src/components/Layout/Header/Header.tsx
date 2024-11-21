import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Button from '../../../ui/Button/Button'

export const Header = () => {
	const navigationItems = [
		{ id: 1, link: '/', text: 'Credit card' },
		{ id: 2, link: '/', text: 'Product' },
		{ id: 3, link: '/', text: 'Account' },
		{ id: 4, link: '/', text: 'Resources' },
	]

	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				NeoBank
			</Link>
			<nav className={styles.navigation}>
				<ul className={styles.navigation__list}>
					{navigationItems.map(item => (
						<li key={item.id}>
							<Link to={item.link}>{item.text}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Button text={'Online Bank'} />
		</header>
	)
}
