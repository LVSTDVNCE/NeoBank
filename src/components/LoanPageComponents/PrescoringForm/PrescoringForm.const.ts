export const INPUT_CONFIG = [
	{
		id: 'lastName',
		label: 'Your last name',
		star: '*',
		placeholder: 'For Example Doe',
		rules: {
			required: 'Enter your last name',
			pattern: { value: /^[A-Za-zА-Яа-яёЁ\s]{2,30}$/ },
		},
	},
	{
		id: 'firstName',
		label: 'Your first name',
		star: '*',
		placeholder: 'For Example Jhon',
		rules: {
			required: 'Enter your first name',
			pattern: { value: /^[A-Za-zА-Яа-яёЁ\s]{2,30}$/ },
		},
	},
	{
		id: 'middleName',
		label: 'Your patronymic',
		placeholder: 'For Example Victorovich',
		rules: {
			pattern: { value: /^[A-Za-zА-Яа-яёЁ\s]{2,30}$/ },
		},
	},
	{
		id: 'email',
		label: 'Your email',
		star: '*',
		placeholder: 'test@gmail.com',
		type: 'email',
		rules: {
			required: 'Incorrect email address',
			pattern: {
				value: /^[\w.-]{2,50}@[a-zA-Z0-9.-]{2,20}\.[a-zA-Z]{2,6}$/,
				message: 'Incorrect email address',
			},
		},
	},
	{
		id: 'birthdate',
		label: 'Your date of birth',
		star: '*',
		placeholder: 'Select Date and Time',
		type: 'date',
		rules: {
			required: 'Incorrect date of birth',
			validate: {
				isAdult: (value: Date) => {
					const birthDate = new Date(value);
					const age = new Date().getFullYear() - birthDate.getFullYear();
					const isOver18 =
						age > 18 ||
						(age === 18 &&
							new Date().getTime() >=
								new Date(
									birthDate.setFullYear(birthDate.getFullYear() + 18)
								).getTime());
					return isOver18 || 'The client must be over 18 years old';
				},
			},
		},
	},
	{
		id: 'passportSeries',
		label: 'Your passport series',
		star: '*',
		placeholder: '0000',
		rules: {
			required: 'The series must be 4 digits',
			pattern: {
				value: /^[0-9]{4}$/,
				message: 'The series must be 4 digits',
			},
		},
	},
	{
		id: 'passportNumber',
		label: 'Your passport number',
		star: '*',
		placeholder: '000000',
		rules: {
			required: 'The series must be 6 digits',
			pattern: {
				value: /^[0-9]{6}$/,
				message: 'The series must be 6 digits',
			},
		},
	},
];
