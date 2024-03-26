import React, { useEffect, useRef, useState } from 'react';
import { IconButton, Drawer } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const SearchDrawer = React.forwardRef(function (
	{ open, closeSearchSection },
	searchInputRef
) {
	console.log('search rerender');
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');
	const [isSearchInputFocus, setIsSearchInputFocus] = useState(false);

	const handleSearchInputChange = (e) => {
		setSearchValue(e.target.value.toString());
	};

	const handleSubmitSearchAction = () => {
		if (searchValue !== '') {
			setSearchValue('');
			closeSearchSection();
			navigate(`/search?key=${searchValue}`);
		}
	};

	const handleSearchInputFocus = () => {
		setIsSearchInputFocus(!isSearchInputFocus);
	};

	return (
		<Drawer
			placement="top"
			open={open}
			onClose={closeSearchSection}
			dismiss={{
				enabled: true,
				escapeKey: true,
			}}
			className="p-4 w-screen !h-min bg-main"
		>
			<div className="mb-6 flex items-center justify-between">
				<div className="flex items-center justify-between w-1200 mx-auto gap-4 py-3">
					<div
						className={`overflow-hidden px-3 h-min gap-2 w-full flex border-2 border-blue-gray-100 border-solid ${
							isSearchInputFocus && 'border-highlight'
						}  rounded-lg`}
					>
						<input
							type="text"
							placeholder="Search..."
							className="h-min flex-1 transition-all text-lg leading-5 outline-none  shadow-none bg-main py-3 text-text placeholder:text-text placeholder:opacity-40"
							value={searchValue}
							onFocus={handleSearchInputFocus}
							ref={searchInputRef}
							onBlur={handleSearchInputFocus}
							onChange={handleSearchInputChange}
							onKeyDown={(e) =>
								e.keyCode === 13 && handleSubmitSearchAction()
							}
						></input>
						<MagnifyingGlassIcon
							onClick={handleSubmitSearchAction}
							className="w-6 cursor-pointer text-text"
						/>
					</div>
					<IconButton
						variant="text"
						color="blue-gray"
						onClick={closeSearchSection}
					>
						<XMarkIcon className="h-6 w-6 text-text" />
					</IconButton>
				</div>
			</div>
		</Drawer>
	);
});

export default React.memo(SearchDrawer);
