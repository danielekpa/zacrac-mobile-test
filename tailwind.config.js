/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./App.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'src/**/*.js',
		'src/**/*.tsx',
		'/src/screens/**/*.{js,jsx,ts,tsx}',
		'./src/screens/**/*.{js,jsx,ts,tsx}',
	],
  theme: {
    extend: {
			colors: {
				icon: '#131117',
				lightTextColor: '#908BA6',
				textColor: '#2C2646',
				secondaryTextColor: '#AEABC2',
				actionBtnColor: '#6347EB',
				greenColor: '#31B447',
				bgColor: '#FCFCFD'
			},
			fontFamily: {
        sans: ['DM Sans'],
      },
		},
  },
  plugins: [],
}

