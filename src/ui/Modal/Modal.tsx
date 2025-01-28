import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ui';
import Close from '@assets/icons/Close_square.svg';
import styles from './Modal.module.scss';

type TModalProps = {
	isOpen: boolean;
	onClose: () => void;
	text: string;
};

export const Modal: React.FC<TModalProps> = ({ isOpen, onClose, text }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className={styles.modal__overlay}>
			<div className={styles.modal__content}>
				<div className={styles.modal__topWrapper}>
					<h4>Deny application</h4>
					<Button onClick={onClose} stylesProps='CloseModal'>
						<img src={Close} alt='close' />
					</Button>
				</div>
				<p className={styles.modal__text}>{text}</p>
				<div className={styles.modal__buttons}>
					<Button text='Deny' stylesProps='DenyButton' />
					<Button text='Cancel' stylesProps='SendButton' onClick={onClose} />
				</div>
			</div>
		</div>,
		document.getElementById('modal-root') as HTMLElement
	);
};
