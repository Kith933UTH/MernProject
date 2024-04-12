import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	IconButton,
} from '@material-tailwind/react';
import { ProductCard } from '../Products/ProductCard/ProductCard';
import cartSlice from '../Cart/CartSlice';
import OptionList from '../OptionList/OptionList';

const AddToCartDialog = ({ icon, buttonStyle, data }) => {
	//open
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(!open);

	//dispatch
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(
			cartSlice.actions.addToCart({
				...data,
				color: colorList.find((color) => color.choose === true).title,
				variant: variantList.find((variant) => variant.choose === true)
					.title,
			})
		);
		handleOpen();
	};

	// choose
	const [colorList, setColorList] = useState(
		data.colors.map((color, index) => {
			return { title: color, choose: index === 0 };
		})
	);
	const [variantList, setVariantList] = useState([
		{ title: '8GB - 128GB', choose: true },
		{ title: '8GB - 256GB', choose: false },
		{ title: '8GB - 512GB', choose: false },
	]);
	const handleChooseColor = (value) => {
		setColorList((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};
	const handleChooseVariant = (value) => {
		setVariantList((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};

	return (
		<>
			<IconButton onClick={handleOpen} className={buttonStyle}>
				{icon}
			</IconButton>
			<Dialog
				open={open}
				handler={handleOpen}
				className="bg-main shadow-md shadow-gray-800 *:selection:!text-gray-900 *:selection:!bg-highlight"
			>
				<DialogBody>
					<ProductCard detail={true} data={data}>
						<OptionList
							wrapperStyle={'px-4 flex flex-row gap-1 mb-4'}
							data={variantList}
							handleChoose={handleChooseVariant}
						/>
						<OptionList
							wrapperStyle={'px-4 flex flex-row gap-1'}
							data={colorList}
							handleChoose={handleChooseColor}
						/>
					</ProductCard>
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
						onClick={handleAddToCart}
					>
						<span>Add to cart</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};

export default AddToCartDialog;
