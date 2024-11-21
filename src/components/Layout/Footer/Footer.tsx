import footerLogo from './../../../assets/FooterLogo/footerLogo.png'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
	const footerItems = [
		{ id: 1, link: '/', text: 'About bank' },
		{ id: 2, link: '/', text: 'Ask a Question' },
		{ id: 3, link: '/', text: 'Quality of service' },
		{ id: 4, link: '/', text: 'Requisites' },
		{ id: 5, link: '/', text: 'Press center' },
		{ id: 6, link: '/', text: 'Bank career' },
		{ id: 7, link: '/', text: 'Investors' },
		{ id: 8, link: '/', text: 'Analytics' },
		{ id: 9, link: '/', text: 'Business and processes' },
		{ id: 10, link: '/', text: 'Compliance and business ethics' },
	]

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
				<ul className={styles.footer__list}>
					{footerItems.map(item => (
						<li key={item.id}>
							<Link to={item.link}>{item.text}</Link>
						</li>
					))}
				</ul>
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
