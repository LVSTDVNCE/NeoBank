import Button from '../../ui/Button/Button'
import styles from './Home.module.scss'
import card1 from './../../assets/MainPage/cards/card1.png'
import card2 from './../../assets/MainPage/cards/card2.png'
import card3 from './../../assets/MainPage/cards/card3.png'
import card4 from './../../assets/MainPage/cards/card4.png'
import developer from './../../assets/MainPage/developer.png'
import { ConverterCurrency } from '../../modules/ConverterCurrency'
import world from './../../assets/MainPage/world.svg'
import { Link } from 'react-router-dom'
import email from './../../assets/MainPage/email.svg'
import sendBtn from './../../assets/MainPage/sendBtn.svg'

export const Home = () => {
	return (
		<main className={styles.main}>
			<section className={styles.sectionCards}>
				<div>
					<h1 className={styles.sectionCards__heading}>
						Choose the design you like
						<br /> and apply for card right
						<br /> now
					</h1>
					<Button text={'Choose the card'} />
				</div>
				<div className={styles.sectionCards__cards}>
					<img src={card1} alt='card-1' />
					<img src={card2} alt='card-2' />
					<img src={card3} alt='card-3' />
					<img src={card4} alt='card-4' />
				</div>
			</section>

			<section className={styles.sectionFeatures}>
				<img src={developer} alt='developer' />
				<article className={styles.sectionFeatures__AboutFeatures}>
					<h3 className={styles.sectionFeatures__heading}>
						We Provide Many Features You Can Use
					</h3>
					<p className={styles.sectionFeatures__para}>
						You can explore the features that we provide with fun and have their
						own functions each feature
					</p>
					<ul className={styles.sectionFeatures__list}>
						<li>Powerful online protection.</li>
						<li>Cashback without borders.</li>
						<li>Personal design</li>
						<li>Work anywhere in the world</li>
					</ul>
				</article>
			</section>

			<ConverterCurrency />

			<section className={styles.sectionWorld}>
				<h3 className={styles.sectionWorld__heading}>
					You can use our services anywhere in the world
				</h3>
				<p className={styles.sectionWorld__para}>
					Withdraw and transfer money online through our application
				</p>
				<img src={world} alt='world map' />
			</section>

			<section className={styles.sectionSubscribe}>
				<Link to='/' className={styles.sectionSubscribe__link}>
					Support
				</Link>
				<h3 className={styles.sectionSubscribe__heading}>
					Subscribe Newsletter & get
					<br />
					<span className={styles.sectionSubscribe__headingNews}>
						Bank News
					</span>
				</h3>
				<form className={styles.sectionSubscribe__form}>
					<img
						className={styles.sectionSubscribe__img}
						src={email}
						alt='email'
					/>
					<input
						className={styles.sectionSubscribe__input}
						type='email'
						placeholder='email'
					/>
					<button className={styles.sectionSubscribe__button}>
						<img src={sendBtn} alt='send' /> Subscribe
					</button>
				</form>
			</section>
		</main>
	)
}
