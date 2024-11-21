import styles from './ConverterCurrency.module.scss'

export const ConverterCurrency = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section__wrapperLeft}>
				<h2 className={styles.section__heading}>Exchange rate in the bank</h2>
				<p className={styles.section__para}>Currency</p>
				<ul className={styles.section__currencyList}></ul>
			</div>
			<div className={styles.section__wrapperRight}>
				<p className={styles.section__date}>
					Update every 15 minutes,{' '}
					<span className={styles.section__dateToday}></span>
				</p>
				<img
					className={styles.section__img}
					src='https://img.icons8.com/external-becris-lineal-becris/64/external-bank-finance-investment-becris-lineal-becris.png'
					alt=''
				/>
			</div>
			<button className={styles.section__button}>All courses</button>
		</section>
	)
}
