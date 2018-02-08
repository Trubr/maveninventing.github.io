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

export default () => {
	const bgs = all('.section-header')

	forEach(bgs, bg =>{


		const { top } = getElemOffset(bg)

		const scroll = new ScrollHandler()

		scroll.init({

			after: _ => {

				const visible = elementIsVisibleInViewport(bg, true)

				if (visible) {
					const y = (scroll.lastPosY - top) / 7
					bg.style.backgroundPosition = `center ${y}px`
				}

			}

		})



	})

}