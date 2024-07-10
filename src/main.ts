/* REVEAL EFFECT
 ********************************************************************************/
const elements = document.querySelectorAll('.group-reveal')
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(({ isIntersecting, target }) => {
			target.classList.toggle('group-reveal', !isIntersecting)
			target.classList.toggle('group-revealed', isIntersecting)
		})
	},
	{ rootMargin: '96px' },
)
elements.forEach(element => observer.observe(element))

// document.addEventListener('astro:after-swap', () => {})
