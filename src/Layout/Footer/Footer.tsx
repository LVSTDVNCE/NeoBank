import { NavBar } from '../../ui/NavBar/NavBar'
import { footerNavItems } from '../../constants/footerNavItems'
import footerLogo from './../../assets/images/png/footerLogo.png'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.footer__section}>
				<div className={styles.footer__wrapper}>
					<img
						className={styles.footer__logo}
						src={footerLogo}
						alt='logo NeoFlex'
					/>
					<address className={styles.footer__address}>
						<a href='tel:+7(495)9842513'>+7 (495) 984 25 13</a>
						<a href='mailto:info@neoflex.ru'>info@neoflex.ru</a>
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
	)
}
