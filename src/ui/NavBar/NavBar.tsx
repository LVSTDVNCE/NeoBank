import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

type TNavBarProps = {
	id: number;
	link: string;
	text: string;
};

export const NavBar = ({ NavBarItems }: { NavBarItems: TNavBarProps[] }) => {
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
	);
};
