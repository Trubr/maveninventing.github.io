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

export default (selector, time = 2) => {

	let elements = []

	if (selector instanceof Element){
		elements.push(selector)
	}else{
		elements = all(selector)
	}


	forEach(elements, element => {

		let scrolling = false

		const scroll = new ScrollHandler()
		const { top } = getElemOffset(element)
		const compensate = top / time

		scroll.init({

			after: _ => {

				const visible = elementIsVisibleInViewport(element, true)

				if (visible) {
					const y = (scroll.lastPosY - compensate)
					element.style.transform = `translate3d(0, -${y}px, 0)`
				}

				
				if (!scrolling) {
					element.classList.add('scrolling')
					scrolling = true
				}

			}

		})



	})

}