import { NavBar } from '@ui';
import { footerNavItems } from '@constants/footerNavItems';
import footerLogo from '@assets/images/png/footerLogo.png';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const address = [
		{ id: 1, href: 'tel:+7(495)9842513', text: '+7 (495) 984 25 13' },
		{ id: 2, href: 'mailto:info@neoflex.ru', text: 'info@neoflex.ru' },
	];

	return (
		<footer className={styles.footer}>
			<section className={styles.footer__section}>
				<div className={styles.footer__wrapper}>
					<Link to='/'>
						<img
							className={styles.footer__logo}
							src={footerLogo}
							alt='logo NeoFlex'
						/>
					</Link>
					<address className={styles.footer__address}>
						{address.map(item => (
							<a key={item.id} href={item.href} className={styles.footer__link}>
								{item.text}
							</a>
						))}
					</address>
				</div>
				<NavBar NavBarItems={footerNavItems} />
				<p className={styles.footer__para}>
					We use cookies to personalize our services and improve the user
					experience of our website. Cookies are small files containing
					information about previous visits to a website. If you do not want to
					use cookies, please change your browser settings
				</p>
			</section>
		</footer>
	);
};
