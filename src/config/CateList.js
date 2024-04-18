import { BsKeyboard, BsLaptop, BsPhone } from 'react-icons/bs';
import { ImTablet } from 'react-icons/im';
import { IoWatch } from 'react-icons/io5';
import { TbBatteryCharging, TbGridDots } from 'react-icons/tb';
import { MdCable } from 'react-icons/md';
import { BiHeadphone } from 'react-icons/bi';
import { CiDesktopMouse2 } from 'react-icons/ci';

const CateList = [
	{ path: 'laptop', title: 'Laptop', children: null, icon: <BsPhone /> },
	{ path: 'phone', title: 'Phone', children: null, icon: <BsLaptop /> },
	{ path: 'tablet', title: 'Tablet', children: null, icon: <ImTablet /> },
	{
		path: 'smartwatch',
		title: 'Smart Watch',
		children: null,
		icon: <IoWatch />,
	},
	{
		path: 'all-accessories',
		title: 'Accessories',
		icon: <TbGridDots />,
		children: [
			{
				path: 'charger',
				title: 'Charger',
				children: null,
				icon: <TbBatteryCharging />,
			},
			{
				path: 'cable',
				title: 'Cable',
				children: null,
				icon: <MdCable />,
			},
			{
				path: 'headphone',
				title: 'Headphone',
				children: null,
				icon: <BiHeadphone />,
			},
			{
				path: 'mouse',
				title: 'Mouse',
				children: null,
				icon: <CiDesktopMouse2 />,
			},
			{
				path: 'keyboard',
				title: 'Keyboard',
				children: null,
				icon: <BsKeyboard />,
			},
		],
	},
];
export default CateList;
