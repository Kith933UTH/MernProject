import React from 'react';
import DetailItem from './DetailItem';

const TabletDetail = ({ detailList }) => {
	return (
		<>
			<div>
				{/* Screen */}
				{detailList.screen && (
					<DetailItem list={detailList.screen} title={'Screen'} />
				)}

				{/* selfieCamera  */}
				{detailList.selfieCamera && (
					<DetailItem
						list={detailList.selfieCamera}
						title={'Selfie camera'}
					/>
				)}

				{/* mainCamera */}
				{detailList.mainCamera && (
					<DetailItem
						list={detailList.mainCamera}
						title={'Main camera'}
					/>
				)}

				{/* osAndCpu */}
				{detailList.osAndCpu && (
					<DetailItem
						list={detailList.osAndCpu}
						title={'Operating System, CPU'}
					/>
				)}
				{/* memoryAndStorage */}
				{detailList.memoryAndStorage && (
					<DetailItem
						list={detailList.memoryAndStorage}
						title={'Memory, Storage'}
					/>
				)}

				{/* connection */}
				{detailList.connection && (
					<DetailItem
						list={detailList.connection}
						title={'Connection'}
					/>
				)}

				{/* battery */}
				{detailList.battery && (
					<DetailItem list={detailList.battery} title={'Battery'} />
				)}

				{/* utilities */}
				{detailList.utilities && (
					<DetailItem
						list={detailList.utilities}
						title={'Utilities'}
					/>
				)}
				{/* generalInformation */}
				{detailList.generalInformation && (
					<DetailItem
						list={detailList.generalInformation}
						title={'General information'}
					/>
				)}
			</div>
		</>
	);
};

export default TabletDetail;
