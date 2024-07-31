/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				glitch: 'noise 2s infinite linear alternate-reverse', // https://codepen.io/chriscoyier/pen/xxKRQRm
				glitch2: 'noise2 15s infinite linear alternate-reverse'
			},
			keyframes: {
				noise: {
					'0%': {
						'clip-path': 'inset(48% 0 30% 0)'
					},
					'5%': {
						'clip-path': 'inset(27% 0 42% 0)'
					},
					'10%': {
						'clip-path': 'inset(17% 0 45% 0)'
					},
					'15%': {
						'clip-path': 'inset(7% 0 22% 0)'
					},
					'20%': {
						'clip-path': 'inset(92% 0 9% 0)'
					},
					'25%': {
						'clip-path': 'inset(25% 0 9% 0)'
					},
					'30%': {
						'clip-path': 'inset(67% 0 17% 0)'
					},
					'35%': {
						'clip-path': 'inset(30% 0 54% 0)'
					},
					'40%': {
						'clip-path': 'inset(92% 0 8% 0)'
					},
					'45%': {
						'clip-path': 'inset(7% 0 1% 0)'
					},
					'50%': {
						'clip-path': 'inset(100% 0 1% 0)'
					},
					'55%': {
						'clip-path': 'inset(55% 0 9% 0)'
					},
					'60%': {
						'clip-path': 'inset(95% 0 1% 0)'
					},
					'65%': {
						'clip-path': 'inset(11% 0 46% 0)'
					},
					'70%': {
						'clip-path': 'inset(82% 0 6% 0)'
					},
					'75%': {
						'clip-path': 'inset(7% 0 33% 0)'
					},
					'80%': {
						'clip-path': 'inset(62% 0 29% 0)'
					},
					'85%': {
						'clip-path': 'inset(28% 0 55% 0)'
					},
					'90%': {
						'clip-path': 'inset(2% 0 25% 0)'
					},
					'95%': {
						'clip-path': 'inset(68% 0 17% 0)'
					},
					'100%': {
						'clip-path': 'inset(24% 0 10% 0)'
					}
				},
				noise2: {
					'0%': {
						'clip-path': 'inset(48% 0 30% 0)'
					},
					'5%': {
						'clip-path': 'inset(27% 0 42% 0)'
					},
					'10%': {
						'clip-path': 'inset(17% 0 45% 0)'
					},
					'15%': {
						'clip-path': 'inset(7% 0 22% 0)'
					},
					'20%': {
						'clip-path': 'inset(92% 0 9% 0)'
					},
					'25%': {
						'clip-path': 'inset(25% 0 9% 0)'
					},
					'30%': {
						'clip-path': 'inset(67% 0 17% 0)'
					},
					'35%': {
						'clip-path': 'inset(30% 0 54% 0)'
					},
					'40%': {
						'clip-path': 'inset(92% 0 8% 0)'
					},
					'45%': {
						'clip-path': 'inset(7% 0 1% 0)'
					},
					'50%': {
						'clip-path': 'inset(100% 0 1% 0)'
					},
					'55%': {
						'clip-path': 'inset(55% 0 9% 0)'
					},
					'60%': {
						'clip-path': 'inset(95% 0 1% 0)'
					},
					'65%': {
						'clip-path': 'inset(11% 0 46% 0)'
					},
					'70%': {
						'clip-path': 'inset(82% 0 6% 0)'
					},
					'75%': {
						'clip-path': 'inset(7% 0 33% 0)'
					},
					'80%': {
						'clip-path': 'inset(62% 0 29% 0)'
					},
					'85%': {
						'clip-path': 'inset(28% 0 55% 0)'
					},
					'90%': {
						'clip-path': 'inset(2% 0 25% 0)'
					},
					'95%': {
						'clip-path': 'inset(68% 0 17% 0)'
					},
					'100%': {
						'clip-path': 'inset(24% 0 10% 0)'
					}
				}
			}
		}
	},
	plugins: []
};
