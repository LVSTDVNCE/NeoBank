import { useState } from 'react';
import { IOffersProps } from 'types';
import { Button, Loader } from '@ui';
import { apiLoan } from '@api/apiLoan';
import OfferIcon from '@assets/icons/offerIcon.svg';
import invalid from '@assets/icons/Error_icon.png';
import valid from '@assets/icons/Success-icon.png';
import styles from './LoanOffers.module.scss';

type TLoanOffersProps = {
	offers: IOffersProps[];
};

export const LoanOffers = ({ offers }: TLoanOffersProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	const sortedOffers = [...offers].sort(
		(a, b) => a.monthlyPayment - b.monthlyPayment
	);

	const handleSelect = async (selectedOffer: IOffersProps) => {
		setIsLoading(true);
		try {
			await apiLoan.SelectLoanOffers(selectedOffer);
		} catch (error) {
			console.error('Error applying for the loan:', error);
		} finally {
			setIsSuccessful(true);
			setIsLoading(false);
		}
	};

	if (isSuccessful) {
		return (
			<div className={styles.successful}>
				<h3 className={styles.successful__heading}>
					The preliminary decision has been sent to your email.
				</h3>
				<p className={styles.successful__paragraph}>
					In the letter you can get acquainted with the preliminary decision on
					the credit card.
				</p>
			</div>
		);
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<ul className={styles.LoanOffers}>
					{sortedOffers.map(offer => (
						<li key={offer.monthlyPayment} className={styles.LoanOffers__card}>
							<img
								src={OfferIcon}
								alt='OfferIcon'
								className={styles.LoanOffers__img}
							/>
							<p className={styles.LoanOffers__paragraph}>
								Requested amount: {offer.requestedAmount}
							</p>
							<p className={styles.LoanOffers__paragraph}>
								Total amount: {offer.totalAmount}
							</p>
							<p className={styles.LoanOffers__paragraph}>
								for {offer.term} months
							</p>
							<p className={styles.LoanOffers__paragraph}>
								Monthly payment: {offer.monthlyPayment} ₽
							</p>
							<p className={styles.LoanOffers__paragraph}>
								Your rate: {offer.rate} %
							</p>
							<p className={styles.LoanOffers__paragraph}>
								Insurance included
								<img
									src={offer.isInsuranceEnabled ? valid : invalid}
									alt={offer.isInsuranceEnabled ? 'yes' : 'no'}
								/>
							</p>
							<p className={styles.LoanOffers__paragraph}>
								Salary client
								<img
									src={offer.isSalaryClient ? valid : invalid}
									alt={offer.isSalaryClient ? 'yes' : 'no'}
								/>
							</p>
							<Button
								onClick={() => handleSelect(offer)}
								text='Select'
								stylesProps='LoanOffer'
							/>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
