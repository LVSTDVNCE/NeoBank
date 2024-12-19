import { useState } from 'react';
import { Button } from '@ui';
import down from '@assets/icons/Expand_down.svg';
import up from '@assets/icons/Expand_up.svg';
import styles from './Accordion.module.scss';

type TAccordionItem = {
	id: string;
	question: string;
	answer: string;
};

type AccordionProps = {
	items: TAccordionItem[];
	allowMultiple?: boolean;
};

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		if (allowMultiple) {
			setOpenItems(prev =>
				prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
			);
		} else {
			setOpenItems(prev => (prev.includes(id) ? [] : [id]));
		}
	};

	return (
		<div className={styles.accordion}>
			{items.map(({ id, question, answer }) => (
				<div key={id} className={styles.accordionItem}>
					<Button
						stylesProps={'accordionButton'}
						onClick={() => toggleItem(id)}
					>
						{question}
						<img
							src={openItems.includes(id) ? up : down}
							alt={openItems.includes(id) ? 'up' : 'down'}
						/>
					</Button>
					<div
						className={
							openItems.includes(id)
								? styles.accordionContentOpen
								: styles.accordionContent
						}
					>
						{answer}
					</div>
				</div>
			))}
		</div>
	);
};
