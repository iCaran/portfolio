module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			ptsans: 'PT Sans',
			robotoSlab: 'Roboto Slab',
			merriWeather: 'Merriweather'
		},
		screen: {
			sm: '480px',
			md: '780px',
			lg: '830px'
		},
		extend: {
			colors: {
				primaryColor: '#0d1117',
				secondaryColor: 'white',
				additionalColor: 'rgba(31, 111, 235, 255)',
				optionColor1: '#243342',
				optionColor2: '#34495e',
				optionColor3: '#c54133',
				optionColor4: '#27ae60',
				optionColor5: '#edb20a',
				optionColor6: '#2479d0',
				optionColor7: '#7d3ea0'
			}
		}
	},

	plugins: []
};
