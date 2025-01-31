import { prescoringData } from './prescoringData';
import { SelectLoanOffers } from './SelectLoanOffers';
import { finishRegistration } from './finishRegistration';
import { getPaymentSchedule } from './getPaymentSchedule';
import { agreeWithSchedule } from './agreeWithSchedule';
import { signDocument } from './signDocument';
import { confirmCode } from './confirmCode';
import { cancelApplication } from './cancelApplication';

export const apiLoan = {
	prescoringData,
	SelectLoanOffers,
	finishRegistration,
	getPaymentSchedule,
	agreeWithSchedule,
	signDocument,
	confirmCode,
	cancelApplication,
};
