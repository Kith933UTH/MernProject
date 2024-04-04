import { useState, React } from 'react';
import {
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
	ListItemPrefix,
	Radio,
	Checkbox,
} from '@material-tailwind/react';

import {
	BanknotesIcon,
	ChevronDownIcon,
	ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';
import RatingBar from '../RatingBar/RatingBar';

const Sidebar = () => {
	const [openList, setOpenList] = useState([1, 2]);

	const handleOpen = (value) => {
		const newList = [...openList];
		const index = newList.indexOf(value);
		if (index > -1) {
			newList.splice(index, 1);
		} else {
			newList.push(value);
		}

		setOpenList(newList);
	};

	return (
		<div className="w-full p-2 shadow-md shadow-main bg-main rounded-2xl">
			{/* sidebar title  */}
			<div className="p-2 w-full">
				<Typography
					variant="paragraph"
					className="text-text text:lg tablet:text-xl font-semibold ml-2"
				>
					Filter
				</Typography>
			</div>

			<hr className="mb-3 border-blue-gray-50 opacity-25" />
			{/* sidebar body  */}
			<div className="w-full">
				{/* price filter  */}
				<Accordion
					open={openList.includes(1)}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								openList.includes(1) ? 'rotate-180' : ''
							}`}
						/>
					}
					className="w-full"
				>
					<div className="p-0" selected={openList.includes(1)}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className="border-b-0 px-2 py-1 text-highlight hover:text-highlight hover:opacity-60"
						>
							<ListItemPrefix>
								<BanknotesIcon className="h-6 w-6" />
							</ListItemPrefix>
							<Typography className="mr-auto font-normal text-base tablet:text-lg">
								Price
							</Typography>
						</AccordionHeader>
					</div>
					<AccordionBody className="py-1 pl-2 text-text">
						<Radio
							name="price"
							label="Low to high"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4"
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className:
									'font-medium text-text text-sm hover:text-highlight hover:opacity-60',
							}}
							defaultChecked
						/>
						<Radio
							name="price"
							label="High to low"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4"
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className:
									'font-medium text-text text-sm hover:text-highlight hover:opacity-60',
							}}
						/>
					</AccordionBody>
				</Accordion>

				{/* rate filter  */}
				<Accordion
					open={openList.includes(2)}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								openList.includes(2) ? 'rotate-180' : ''
							}`}
						/>
					}
					className="w-full"
				>
					<div className="p-0" selected={openList.includes(2)}>
						<AccordionHeader
							onClick={() => handleOpen(2)}
							className="border-b-0 px-2 py-1 text-highlight hover:text-highlight hover:opacity-60"
						>
							<ListItemPrefix>
								<ChatBubbleOvalLeftIcon className="h-6 w-6" />
							</ListItemPrefix>
							<Typography className="mr-auto font-normal text-base tablet:text-lg">
								Rate
							</Typography>
						</AccordionHeader>
					</div>

					<AccordionBody className="py-1 pl-2 text-text">
						<Checkbox
							name="rate"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4 "
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className: 'mb-1',
							}}
							label={
								<RatingBar
									value={1}
									relatedStyle={
										'text-highlight text-sm w-4 h-4 '
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={
										'h-full flex flex-row gap-1 hover:opacity-60'
									}
								/>
							}
						/>

						<Checkbox
							name="rate"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4 "
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className: 'mb-1',
							}}
							label={
								<RatingBar
									value={2}
									relatedStyle={
										'text-highlight text-sm w-4 h-4 '
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={
										'h-full flex flex-row gap-1 hover:opacity-60'
									}
								/>
							}
						/>

						<Checkbox
							name="rate"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4 "
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className: 'mb-1',
							}}
							label={
								<RatingBar
									value={3}
									relatedStyle={
										'text-highlight text-sm w-4 h-4 '
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={
										'h-full flex flex-row gap-1 hover:opacity-60'
									}
								/>
							}
						/>

						<Checkbox
							name="rate"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4 "
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className: 'mb-1',
							}}
							label={
								<RatingBar
									value={4}
									relatedStyle={
										'text-highlight text-sm w-4 h-4 '
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={
										'h-full flex flex-row gap-1 hover:opacity-60'
									}
								/>
							}
						/>

						<Checkbox
							name="rate"
							color="light-green"
							className="hover:before:opacity-0 hover:border-highlight w-4 h-4 "
							containerProps={{
								className: 'p-3',
							}}
							labelProps={{
								className: 'mb-1',
							}}
							label={
								<RatingBar
									value={5}
									relatedStyle={
										'text-highlight text-sm w-4 h-4 '
									}
									unrelatedStyle={
										'text-text text-sm w-4 h-4 '
									}
									wrapperStyle={
										'h-full flex flex-row gap-1 hover:opacity-60'
									}
								/>
							}
						/>
					</AccordionBody>
				</Accordion>
			</div>
		</div>
	);
};

export default Sidebar;
