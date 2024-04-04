import React from 'react';
import DetailItem from './DetailItem';

const SmartWatchDetail = ({ detailList }) => {
	return (
		<>
			<div>
				{/* Screen */}
				{detailList.screen && (
					<DetailItem list={detailList.screen} title={'Screen'} />
				)}

				{/* design  */}
				{detailList.design && (
					<DetailItem list={detailList.design} title={'Design'} />
				)}

				{/* utilities */}
				{detailList.utilities && (
					<DetailItem
						list={detailList.utilities}
						title={'Utilities'}
					/>
				)}

				{/* battery */}
				{detailList.battery && (
					<DetailItem list={detailList.battery} title={'Battery'} />
				)}
				{/* configurationAndConnection */}
				{detailList.configurationAndConnection && (
					<DetailItem
						list={detailList.configurationAndConnection}
						title={'Configuration, Connection'}
					/>
				)}

				{/* otherInformation */}
				{detailList.otherInformation && (
					<DetailItem
						list={detailList.otherInformation}
						title={'Other information'}
					/>
				)}
			</div>
		</>
	);
};

export default SmartWatchDetail;
