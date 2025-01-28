import {
	AboutPlatinum,
	HowGetCard,
	LoanTabs,
	PrescoringForm,
} from '@components/index';
import { useRef } from 'react';

const Loan = () => {
	const formRef = useRef<HTMLDivElement>(null);

	const goToForm = () => {
		if (formRef.current) {
			formRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<>
			<AboutPlatinum goToForm={goToForm} />
			<LoanTabs />
			<HowGetCard />
			<div ref={formRef}>
				<PrescoringForm />
			</div>
		</>
	);
};

export default Loan;
