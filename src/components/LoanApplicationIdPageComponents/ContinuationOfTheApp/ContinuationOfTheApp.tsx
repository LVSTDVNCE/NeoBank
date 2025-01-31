import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Loader, Select, StepMessage } from '@ui';
import { ILoanSecondStepProps } from 'types';
import { apiLoan } from '@api/apiLoan';
import { useLocation } from 'react-router-dom';
import styles from './ContinuationOfTheApp.module.scss';

export const ContinuationOfTheApp = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const applicationId = pathSegments[pathSegments.length - 1];

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ILoanSecondStepProps>({
		defaultValues: {
			gender: '',
			maritalStatus: '',
			dependentAmount: -1,
			employment: {
				employmentStatus: '',
				position: '',
			},
		},
	});

	const onSubmit = async (data: ILoanSecondStepProps) => {
		setIsLoading(true);
		try {
			const enhancedData = {
				...data,
				account: '11223344556677889900',
			};
			await apiLoan.finishRegistration(enhancedData, applicationId);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSuccessful(true);
			setIsLoading(false);
		}
	};

	if (isSuccessful) {
		return (
			<StepMessage
				heading='Wait for a decision on the application'
				paragraph='The answer will come to your mail within 10 minutes'
			/>
		);
	}

	return (
		<section className={styles.form}>
			{isLoading ? (
				<Loader />
			) : (
				<Form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.form__headingWrapper}>
						<h2 className={styles.form__title}>
							Continuation of the application
						</h2>
						<p className={styles.form__paragraph}>Step 2 of 5</p>
					</div>

					<div className={styles.form__passportData}>
						<Select
							label="What's your gender"
							id='gender'
							register={register}
							options={[
								{ value: 'MALE', label: 'male' },
								{ value: 'FEMALE', label: 'female' },
							]}
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Select one of the options',
							}}
							styleProps={styles.selectContinuation}
						/>

						<Select
							label='Your marital status'
							id='maritalStatus'
							register={register}
							options={[
								{ value: 'MARRIED', label: 'married' },
								{ value: 'DIVORCED', label: 'divorced' },
								{ value: 'SINGLE', label: 'single' },
								{ value: 'WIDOW_WIDOWER', label: 'widow widower' },
							]}
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Select one of the options',
							}}
							styleProps={styles.selectContinuation}
						/>

						<Select
							label='Your number of dependents'
							id='dependentAmount'
							register={register}
							options={[
								{ value: 0, label: '0' },
								{ value: 1, label: '1' },
								{ value: 2, label: '2' },
								{ value: 3, label: '3' },
								{ value: 4, label: '4' },
							]}
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Select one of the options',
							}}
							styleProps={styles.inputContinuation}
						/>

						<Input
							label='Date of issue of the passport'
							id='passportIssueDate'
							register={register}
							placeholder='Select Date and Time'
							star='*'
							type='date'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Incorrect date of passport issue date',
								validate: (value: Date) =>
									new Date(value) <= new Date() ||
									'Incorrect date of passport issue date',
							}}
							styleProps={styles.inputContinuation}
						/>

						<Input
							label='Division code'
							id='passportIssueBranch'
							register={register}
							placeholder='000000'
							type='number'
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'The series must be 6 digits',
								pattern: {
									value: /^\d{6}$/,
									message: 'The series must be 6 digits',
								},
							}}
							styleProps={styles.inputContinuation}
						/>
					</div>

					<h3 className={styles.form__titleEmployment}>Employment</h3>

					<div className={styles.form__employmentData}>
						<Select
							label='Your employment status'
							id='employment.employmentStatus'
							register={register}
							options={[
								{ value: 'UNEMPLOYED', label: 'unemployed' },
								{ value: 'SELF_EMPLOYED', label: 'self employed' },
								{ value: 'EMPLOYED', label: 'employed' },
								{ value: 'BUSINESS_OWNER', label: 'business owner' },
							]}
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Select one of the options',
							}}
							styleProps={styles.selectContinuation}
						/>

						<Input
							label='Your employer INN'
							id='employment.employerINN'
							register={register}
							placeholder='000000000000'
							star='*'
							type='number'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Department code must be 12 digits',
								pattern: {
									value: /^\d{12}$/,
									message: 'Department code must be 12 digits',
								},
							}}
							styleProps={styles.inputContinuation}
						/>

						<Input
							label='Your salary'
							id='employment.salary'
							register={register}
							placeholder='For example 100 000'
							star='*'
							type='number'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Enter your salary',
							}}
							styleProps={styles.inputContinuation}
						/>

						<Select
							label='Your position'
							id='employment.position'
							register={register}
							options={[
								{ value: 'WORKER', label: 'worker' },
								{ value: 'MID_MANAGER', label: 'mid manager' },
								{ value: 'TOP_MANAGER', label: 'top manager' },
								{ value: 'OWNER', label: 'owner' },
							]}
							star='*'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Select one of the options',
							}}
							styleProps={styles.selectContinuation}
						/>

						<Input
							label='Your work experience total'
							id='employment.workExperienceTotal'
							register={register}
							placeholder='For example 10'
							star='*'
							type='number'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Enter your work experience total',
								maxLength: {
									value: 2,
									message: 'Maximum 2 digits allowed',
								},
							}}
							styleProps={styles.inputContinuation}
						/>

						<Input
							label='Your work experience current'
							id='employment.workExperienceCurrent'
							register={register}
							placeholder='For example 2'
							star='*'
							type='number'
							errors={errors}
							isSubmitted={isSubmitted}
							rules={{
								required: 'Enter your work experience current',
								maxLength: {
									value: 2,
									message: 'Maximum 2 digits allowed',
								},
							}}
							styleProps={styles.inputContinuation}
						/>
					</div>

					<Button
						text='Continue'
						onClick={() => setIsSubmitted(true)}
						stylesProps='formButton'
					/>
				</Form>
			)}
		</section>
	);
};
