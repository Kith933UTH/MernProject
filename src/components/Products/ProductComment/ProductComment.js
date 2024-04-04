import React from 'react';
import {
	Timeline,
	TimelineBody,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineItem,
	Typography,
} from '@material-tailwind/react';
import {
	PaperAirplaneIcon,
	ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const ProductComment = ({ commentData }) => {
	return (
		<div className="w-full h-max border-solid border-[1px] border-gray-700 py-4 rounded-xl mt-6">
			<div className="flex flex-row items-center gap-2 rounded-md border-solid border-[1px] border-gray-700 bg-main mx-4 shadow-md shadow-main">
				<textarea
					rows={2}
					spellCheck={false}
					placeholder="Please ask your question, we will respond as soon as possible"
					className="rounded-lg text-text p-2 bg-transparent flex-1 placeholder:opacity-50"
				/>
				<div className="p-2">
					<PaperAirplaneIcon className="w-6 h-6 text-highlight hover:opacity-50" />
				</div>
			</div>

			<div className="flex flex-col gap-2 px-4 mt-4 border-solid border-t-[1px] border-gray-700">
				{commentData.map((item, index, arr) => {
					return (
						<div
							key={'reviews-' + item.userName}
							className={`py-4 md:px-2 ${
								index !== arr.length - 1 &&
								'border-solid border-b-[1px] border-gray-700'
							}`}
						>
							<div className="flex gap-1 items-center">
								<Typography className="text-text font-semibold text-lg ">
									{item.userName}
								</Typography>
								<ShieldCheckIcon className="w-5 h-5 text-highlight" />
								<Typography className="text-text text-sm ml-2 italic">
									{item.time}
								</Typography>
							</div>

							<Typography className="text-text text-sm">
								{item.comment}
							</Typography>

							{item.reply && (
								<Timeline className="mt-3 px-4 pt-4 rounded-lg bg-main relative before:absolute before:border-solid before:border-[10px] before:border-b-main before:border-t-transparent before:border-r-transparent before:border-l-transparent before:top-[-18px] before:left-[16px]">
									{item.reply?.map((rep, index, arr) => (
										<TimelineItem
											key={'rep' + rep.userName}
										>
											{index !== arr.length - 1 && (
												<TimelineConnector />
											)}
											<TimelineHeader className="h-3">
												<TimelineIcon className="bg-highlight" />
												<Typography className="text-text font-semibold text-base ">
													{rep.userName}
												</Typography>
												<Typography className="text-text text-sm ml-2 italic">
													{rep.time}
												</Typography>
											</TimelineHeader>
											<TimelineBody className="pb-4">
												<Typography className="text-text text-sm">
													{rep.comment}
												</Typography>
											</TimelineBody>
										</TimelineItem>
									))}
								</Timeline>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductComment;
