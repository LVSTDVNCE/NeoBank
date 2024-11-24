import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { INavBar } from '../../types/NavBar.type'

interface NavBarProps {
	NavBarItems: INavBar[]
}

const NavBar: React.FC<NavBarProps> = ({ NavBarItems }) => {
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

export default NavBar
