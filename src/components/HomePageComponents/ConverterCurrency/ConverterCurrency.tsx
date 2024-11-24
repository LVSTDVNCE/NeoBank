import { useEffect, useState } from 'react'
import styles from './ConverterCurrency.module.scss'
import { fetchExchangeRates } from './../../../api/apiConverterCurrency'
import { CurrencyRate } from '../../../types/types'
import iconBank from './../../../assets/icons/iconBank.svg'

export const ConverterCurrency = () => {
	const [currentDate, setCurrentDate] = useState('')
	const [listCurrency, setListCurrency] = useState<CurrencyRate[]>([])

	const getDate = () => {
		const date = new Date()
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = String(date.getFullYear()).slice(-2)
		setCurrentDate(`${day}.${month}.${year}`)
	}

	useEffect(() => {
		getDate()
		const intervalId = setInterval(getDate, 1000)
		return () => clearInterval(intervalId)
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchExchangeRates()
			setListCurrency(result)
		}
		fetchData()
		const intervalId = setInterval(fetchData, 900000) // обновление каждые 15 минут
		return () => clearInterval(intervalId)
	}, [])

	return (
		<section className={styles.section}>
			<div className={styles.section__wrapperLeft}>
				<h2 className={styles.section__heading}>
					Exchange rate in internet bank
				</h2>
				<p className={styles.section__para}>Currency</p>
				<ul className={styles.section__currencyList}>
					{listCurrency.map(({ currency, rate }) => (
						<li key={currency}>
							{currency}:<span>{(1 / rate).toFixed(2)}</span>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.section__wrapperRight}>
				<p className={styles.section__date}>
					Update every 15 minutes, MSC{' '}
					<span className={styles.section__dateToday}>{currentDate}</span>
				</p>
				<img className={styles.section__img} src={iconBank} alt='' />
			</div>
			<button className={styles.section__button}>All courses</button>
		</section>
	)
}
