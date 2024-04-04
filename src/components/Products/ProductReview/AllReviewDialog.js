import React from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	Typography,
} from '@material-tailwind/react';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import RatingBar from '../../RatingBar/RatingBar';

const AllReviewDialog = ({ data }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Button
				onClick={handleOpen}
				variant="outlined"
				className="bg-transparent border-solid border-[1px] border-gray-700 text-highlight"
			>
				Show All Reviews
			</Button>
			<Dialog
				open={open}
				size="lg"
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				className="bg-main"
			>
				<DialogBody className=" h-[80vh] overflow-y-scroll">
					{data?.map((item) => {
						return (
							<div
								key={'reviews-' + item.userName}
								className="py-4 md:px-2 border-solid border-b-[1px] border-gray-700"
							>
								<div className="flex gap-1 items-center">
									<Typography className="text-text font-semibold text-lg ">
										{item.userName}
									</Typography>
									<CheckBadgeIcon className="w-5 h-5 text-highlight" />
									<Typography className="text-text text-sm ml-2 italic">
										{item.time}
									</Typography>
								</div>
								<RatingBar
									value={Math.floor(item.rate)}
									relatedStyle={
										'text-highlight text-sm w-4 h-4'
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={'flex flex-row gap-1 my-2'}
								/>

								<Typography className="text-text text-sm">
									{item.comment}
								</Typography>
								<div className="flex gap-4 mt-4">
									{item?.img.map((imgLink) => (
										<div key={imgLink}>
											<img
												className="h-20 w-20 rounded-lg object-cover object-center"
												src={imgLink}
												alt="reviews"
											/>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="text-base"
					>
						<span>Close</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};

export default AllReviewDialog;
