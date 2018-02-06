import { all, forEach, the} from './utils/helpers'
import scrollIt from './utils/scrollIt'


export default () => {

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

		}, true)

	})

}

