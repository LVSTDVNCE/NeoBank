import { Button, Divider } from '@ui';
import { useState } from 'react';

type TTabProps = {
	tabs: { label: string; content: React.ReactNode }[];
};

export const Tabs = ({ tabs }: TTabProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div>
				{tabs.map((tab, index) => (
					<Button
						key={tab.label}
						onClick={() => setActiveTab(index)}
						stylesProps={activeTab === index ? 'activeTabBtn' : 'TabBtn'}
					>
						{tab.label}
					</Button>
				))}
				<Divider margin='-2px' color='rgba(128, 128, 128, 0.2)' />
			</div>
			<div className='tab-content'>{tabs[activeTab].content}</div>
		</div>
	);
};
