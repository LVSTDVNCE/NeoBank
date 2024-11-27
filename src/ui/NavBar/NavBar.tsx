import { Link } from 'react-router-dom'
import { INavBar } from 'types/types'
import styles from './NavBar.module.scss'

interface NavBarProps {
	NavBarItems: INavBar[]
}

export const NavBar: React.FC<NavBarProps> = ({ NavBarItems }) => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__list}>
				{NavBarItems.map(item => (
					<li key={item.id}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
