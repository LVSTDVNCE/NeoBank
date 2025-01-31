import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, CheckBox, Loader, Modal, StepMessage, Table } from '@ui';
import { IPaymentScheduleProps, IPaymentScheduleRowProps } from 'types';
import { apiLoan } from '@api/apiLoan';
import styles from './PaymentSchedule.module.scss';
import { useApplicationStore } from 'src/store/ApplicationStore';

type SortDirection = 'asc' | 'desc';

export const PaymentSchedule = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	const { clearId, clearStatus } = useApplicationStore();

	const [schedule, setSchedule] = useState<IPaymentScheduleRowProps[] | null>(
		null
	);
	const [sortColumn, setSortColumn] =
		useState<keyof IPaymentScheduleRowProps>('number');
	const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

	const navigate = useNavigate();
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const applicationId = pathSegments[pathSegments.length - 2];

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const closeCancelModal = () => setIsCancelModalOpen(false);

	const getPaymentSchedule = async (id: string) => {
		try {
			const response: IPaymentScheduleProps = (await apiLoan.getPaymentSchedule(
				id
			)) as IPaymentScheduleProps;
			setSchedule(response.credit.paymentSchedule);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPaymentSchedule(applicationId);
	}, [applicationId]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleDeny = async () => {
		setIsLoading(true);
		try {
			await apiLoan.cancelApplication(applicationId);
			setIsModalOpen(false);
			setIsCancelModalOpen(true);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
			clearId();
			clearStatus();
		}
	};

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			await apiLoan.agreeWithSchedule(applicationId);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			setIsSuccessful(true);
		}
	};

	const handleSort = (column: keyof IPaymentScheduleRowProps) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
			setSortColumn(column);
			setSortDirection('asc');
		}
	};

	const sortedSchedule: IPaymentScheduleRowProps[] =
		schedule?.slice().sort((a, b) => {
			const compare = (x: string | number, y: string | number) => {
				if (typeof x === 'string' && typeof y === 'string') {
					return x.localeCompare(y);
				} else if (typeof x === 'number' && typeof y === 'number') {
					return x - y;
				}
				return 0;
			};

			const result = compare(a[sortColumn], b[sortColumn]);
			return sortDirection === 'asc' ? result : -result;
		}) || [];

	if (isSuccessful) {
		return (
			<StepMessage
				heading='Documents are formed'
				paragraph='Documents for signing will be sent to your email'
			/>
		);
	}

	return isLoading ? (
		<Loader />
	) : (
		<section className={styles.PaymentSchedule}>
			<div className={styles.PaymentSchedule__headingWrapper}>
				<h2 className={styles.PaymentSchedule__title}>Payment Schedule</h2>
				<p className={styles.PaymentSchedule__paragraph}>Step 3 of 5</p>
			</div>

			{schedule ? (
				<div className={styles.TableWrapper}>
					<div className={styles.TableWrapperInner}>
						<Table styleProps={styles.Table}>
							<thead className={styles.Table__head}>
								<tr className={styles.Table__titles}>
									{[
										'number',
										'date',
										'totalPayment',
										'interestPayment',
										'debtPayment',
										'remainingDebt',
									].map(column => (
										<th
											key={column}
											onClick={() =>
												handleSort(column as keyof IPaymentScheduleRowProps)
											}
											className={styles.Table__titlesText}
										>
											{column.toUpperCase()}
											<span className={styles.Table__titlesIcon}>
												{sortColumn === column
													? sortDirection === 'asc'
														? '▲'
														: '▼'
													: '▲'}
											</span>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{sortedSchedule &&
									sortedSchedule.map(row => (
										<tr key={row.number} className={styles.Table__row}>
											<td>{row.number}</td>
											<td>{row.date}</td>
											<td>{row.totalPayment.toFixed(2)}</td>
											<td>{row.interestPayment.toFixed(2)}</td>
											<td>{row.debtPayment.toFixed(2)}</td>
											<td>{row.remainingDebt.toFixed(2)}</td>
										</tr>
									))}
							</tbody>
						</Table>
					</div>
					<div className={styles.Buttons}>
						<Button text='Deny' stylesProps='DenyButton' onClick={openModal} />
						<div className={styles.Buttons__sends}>
							<CheckBox
								text='I agree with the payment schedule'
								checked={isChecked}
								onChange={handleCheckboxChange}
							/>
							<Button
								text='Send'
								stylesProps='SendButton'
								disabled={!isChecked}
								onClick={handleSubmit}
							/>
						</div>
					</div>
					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						text='You exactly sure, you want to cancel this application?'
					>
						<Button text='Deny' stylesProps='DenyButton' onClick={handleDeny} />
						<Button
							text='Cancel'
							onClick={closeModal}
							stylesProps='SendButton'
						/>
					</Modal>

					<Modal
						isOpen={isCancelModalOpen}
						onClose={closeCancelModal}
						text='Your application has been deny!'
					>
						<Button
							text='Go home'
							stylesProps='SendButton'
							onClick={() => navigate('/')}
						/>
					</Modal>
				</div>
			) : (
				<Loader />
			)}
		</section>
	);
};
