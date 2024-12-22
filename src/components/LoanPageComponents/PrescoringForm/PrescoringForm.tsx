import { useForm, Controller } from 'react-hook-form';
import { inputFields } from './PrescoringForm.const';
import { IPrescoringFormProps } from 'types';
import { Button, Divider, Form, Input, Label, Select } from '@ui';
import styles from './PrescoringForm.module.scss';

export const PrescoringForm = () => {
	const {
		control,
		handleSubmit,
		watch,
		register,
		formState: { errors },
	} = useForm<IPrescoringFormProps>({
		defaultValues: {
			amount: 15000,
			term: 6,
		},
	});

	const onSubmit = (data: IPrescoringFormProps) => {
		console.log('Form Data:', data);
	};

	const amount = watch('amount');

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form__topWrapper}>
				<div className={styles.form__topWrapperLeft}>
					<div className={styles.form__CustomizeWrapper}>
						<h3 className={styles.form__heading}>Customize your card</h3>
						<p className={styles.form__step}>Step 1 of 5</p>
					</div>

					<div className={styles.form__AmountWrapper}>
						<Label htmlFor='amount' text='Select amount' />
						<p className={styles.form__AmountValue}>{amount}</p>
						<Controller
							name='amount'
							control={control}
							rules={{
								required: 'Укажите сумму',
								min: { value: 15000, message: 'Минимальная сумма - 15000' },
								max: { value: 600000, message: 'Максимальная сумма - 600000' },
							}}
							render={({ field }) => (
								<>
									<input
										className={styles.form__AmountInput}
										id='amount'
										type='range'
										min='15000'
										max='600000'
										{...field}
									/>
									<div className={styles.form__AmountMinMaxWrapper}>
										<span>15 000</span>
										<span>600 000</span>
									</div>
								</>
							)}
						/>
					</div>
				</div>

				<div>
					<h4 className={styles.form__chosenHeading}>
						You have chosen the amount
					</h4>
					<p className={styles.form__chosenValue}>{amount} ₽</p>
					<Divider width='220px' color='rgba(128, 128, 128, 0.2)' />
				</div>
			</div>

			<h4 className={styles.form__headingContacts}>Contact information</h4>

			<div className={styles.form__contacts}>
				{inputFields.map(({ id, label, type, rules, placeholder, star }) => (
					<Input
						key={id}
						id={id}
						label={label}
						type={type}
						register={register}
						rules={rules}
						errors={errors}
						placeholder={placeholder}
						star={star}
					/>
				))}

				<Select
					id='term'
					label='Select term'
					star={'*'}
					options={[
						{ value: 6, label: '6 month' },
						{ value: 12, label: '12 month' },
						{ value: 18, label: '18 month' },
						{ value: 24, label: '24 month' },
					]}
					register={register}
					rules={{ required: 'Выберите срок' }}
					errors={errors}
				/>
			</div>

			<Button stylesProps='formButton' text='Continue' />
		</Form>
	);
};
