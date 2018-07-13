import { all, forEach, the} from './utils/helpers'
import scroll from 'scroll-to-element'

export default () => {

	const hamburger = the('#hamburger')

	if (!hamburger) return

	const controls = {
		header: the('#intro') || false,
		main: the('#main') || false,
		nav: the('#navigation') || false,
		open: 0
	}

	function toogleMenu(){
		if (!controls.open) {
			controls.open = 1
			hamburger.classList.add('menu-active')
			controls.header.classList.add('menu-active')
			controls.main.classList.add('menu-active')
			controls.nav.classList.add('menu-active')
		} else {
			controls.open = 0
			hamburger.classList.remove('menu-active')
			controls.header.classList.remove('menu-active')
			controls.main.classList.remove('menu-active')
			controls.nav.classList.remove('menu-active')
		}

	}

	hamburger.addEventListener('click',toogleMenu, true)

	const anchors = all('.anchor')
	const targets = []

	function startingAnchors(anchor){

		targets.push({
			anchor: anchor.getAttribute('href'),
			target: the(anchor.getAttribute('href'))
		})

		anchor.addEventListener('click', e => {

			e.preventDefault()
			e.stopPropagation()

			const selector = e.target.getAttribute('href')
			const target = targets.find(target => target.anchor == selector)

			scroll(target.target, {
				offset: 0,
				ease: 'inOutQuint',
				duration: 720
			})

			controls.open && toogleMenu()

		}, true)

	}

	forEach(anchors, startingAnchors)

}

