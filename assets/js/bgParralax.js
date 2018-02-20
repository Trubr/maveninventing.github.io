import {
	the,
	all,
	forEach
} from './utils/helpers'

import {
	ScrollHandler,
	getElemOffset,
	elementIsVisibleInViewport
} from './utils/utils'

export default selector => {

	const elements = all(selector)

	forEach(elements, element =>{

		const { top } = getElemOffset(element)

		const scroll = new ScrollHandler()

		scroll.init({

			after: _ => {

				const visible = elementIsVisibleInViewport(element, true)

				if (visible) {
					const y = (scroll.lastPosY - top) / 7
					element.style.backgroundPosition = `center ${y}px`
				}

			}

		})



	})

}