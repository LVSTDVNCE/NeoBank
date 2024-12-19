import { Button, Divider } from '@ui';
import { useState } from 'react';

type TTabsProps = {
	tabs: { label: string; content: React.ReactNode }[];
};

export const Tabs = ({ tabs }: TTabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section>
			<div>
				{tabs.map((tab, index) => (
					<Button
						key={tab.label}
						onClick={() => setActiveTab(index)}
						stylesProps={activeTab === index ? 'activeTabBtn' : 'TabBtn'}
						text={tab.label}
					/>
				))}
				<Divider margin='-2px' color='rgba(128, 128, 128, 0.2)' />
			</div>
			<div className='tab-content'>{tabs[activeTab].content}</div>
		</section>
	);
};
