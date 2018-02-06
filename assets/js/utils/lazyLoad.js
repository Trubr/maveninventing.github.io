import {all, forEach} from './helpers'

export default () => {

	const imgs = all('.lazy')

	const loadImg = img => img.src = img.dataset.src

	if ('IntersectionObserver' in window) { 

		const options = {
			root: null,
			rootMargin: '50px 0px',
			threshold: 0
		}

		// Create the intersection observer
		const observer = new IntersectionObserver( (entries, observer) => {

			forEach(entries, entry => {
				if (entry.intersectionRatio > observer.thresholds[0]) {
					load(entry.target, observer)
				}
			})

		}, options)


		forEach(imgs, img => observer.observe(img))

		function load(img, observer) {

			if (observer) {
				img.addEventListener('load', () => observer.unobserve(img))
			}

			const dataSrc = img.getAttribute('data-src')

			if (dataSrc) {
				img.setAttribute('src', dataSrc)
			}

		}

	} else {
		console.log('Intersection Observers not supported')
		forEach(imgs, img => loadImg(img))
	}



}

