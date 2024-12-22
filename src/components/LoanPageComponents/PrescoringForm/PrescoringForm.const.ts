export const inputFields = [
	{
		id: 'lastName',
		label: 'Your last name',
		star: '*',
		placeholder: 'For Example Doe',
		rules: { required: 'Укажите фамилию' },
	},
	{
		id: 'firstName',
		label: 'Your first name',
		star: '*',
		placeholder: 'For Example Jhon',
		rules: { required: 'Укажите имя' },
	},
	{
		id: 'middleName',
		label: 'Your patronymic',
		placeholder: 'For Example Victorovich',
		rules: { required: 'Укажите отчество' },
	},
	{
		id: 'email',
		label: 'Your email',
		star: '*',
		placeholder: 'test@gmail.com',
		type: 'email',
		rules: {
			required: 'Укажите почту',
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: 'Некорректный формат почты',
			},
		},
	},
	{
		id: 'birthdate',
		label: 'Your date of birth',
		star: '*',
		placeholder: 'Select Date and Time',
		type: 'date',
		rules: { required: 'Укажите дату рождения' },
	},
	{
		id: 'passportSeries',
		label: 'Your passport series',
		star: '*',
		placeholder: '0000',
		rules: {
			required: 'Укажите серию паспорта',
			pattern: {
				value: /^[0-9]{4}$/,
				message: 'Серия паспорта должна состоять из 4 цифр',
			},
		},
	},
	{
		id: 'passportNumber',
		label: 'Your passport number',
		star: '*',
		placeholder: '000000',
		rules: {
			required: 'Укажите номер паспорта',
			pattern: {
				value: /^[0-9]{6}$/,
				message: 'Номер паспорта должен состоять из 6 цифр',
			},
		},
	},
];
