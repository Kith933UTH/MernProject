/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				1200: '1200px',
			},
		},
		colors: {
			background: '#1a1a1a',
			main: '#2f2f2f',
			highlight: '#dfffbf',
			text: '#d5d5d5',
		},
		screens: {
			tablet: '960px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1200px',
			// => @media (min-width: 1280px) { ... }
		},
		fontFamily: {
			sans: ['Montserrat', 'Poppins', 'sans-serif'],
		},
	},
	plugins: [],
});
