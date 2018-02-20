import { all, forEach, the} from './utils/helpers'
import scrollIt from './utils/scrollIt'


export default () => {

	const hamburger = the('#hamburger') || false

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

	forEach(anchors, anchor => {
		
		targets.push({
			anchor: anchor.getAttribute('href'),
			target: the(anchor.getAttribute('href'))
		})

		anchor.addEventListener('click', e => {

			e.preventDefault()
			e.stopPropagation()

			const selector = e.target.getAttribute('href')
			const target = targets.find(target => target.anchor == selector)

			scrollIt(target.target, 400, 'easeInOutQuart')

			controls.open && toogleMenu()

		}, true)



	})

}

