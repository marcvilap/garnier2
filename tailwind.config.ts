import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: { xs: '27rem', sm: '40rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '2rem', xl: '6rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Bodoni Moda', 'serif'],
			},
			spacing: Object.fromEntries([...Array(65).keys()].slice(17).map(val => [val * 4, `${val}rem`])),
			colors: {
				yellow: {
					300: '#f5d94c',
					500: '#d2b315',
					800: '#784f00',
				},
			},
			keyframes: {
				'parallax-l': {
					to: { transform: 'translateX(-33%)' },
				},
				'parallax-r': {
					to: { transform: 'translateX(33%)' },
				},
				'parallax-y': {
					from: { transform: 'translateY(4rem)' },
					to: { transform: 'translateY(-4rem)' },
				},
			},
			animation: {
				'parallax-l': 'parallax-l linear both',
				'parallax-r': 'parallax-r linear both',
				'parallax-t': 'parallax-y linear both',
				'parallax-b': 'parallax-y linear both reverse',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.animate-parallax-l, .animate-parallax-r': {
					'animation-timeline': 'view()',
					'will-change': 'transform',
				},
				'.animate-parallax-t, .animate-parallax-b': {
					'animation-timeline': 'view(-6rem)',
					'will-change': 'transform',
				},
				'.container-inline-size': {
					'container-type': 'inline-size',
				},
			})
		}),
	],
} satisfies Config
