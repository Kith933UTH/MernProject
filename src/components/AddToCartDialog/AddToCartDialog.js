import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	IconButton,
} from '@material-tailwind/react';
import { ProductCard } from '../Products/ProductCard';

const AddToCartDialog = ({ icon, buttonStyle }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<IconButton onClick={handleOpen} className={buttonStyle}>
				{icon}
			</IconButton>
			<Dialog
				open={open}
				handler={handleOpen}
				className="bg-main shadow-md shadow-main"
			>
				<DialogBody>
					<ProductCard detail={true} />
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button
						variant="gradient"
						color="green"
						onClick={handleOpen}
					>
						<span>Add to cart</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};

export default AddToCartDialog;
