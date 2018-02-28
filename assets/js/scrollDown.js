import { the } from './utils/helpers'
import scroll from 'scroll-to-element'

const getNextNode = parent =>{

	let nextSibling = parent.nextSibling
	
	while (nextSibling && nextSibling.nodeType != 1) {
		nextSibling = nextSibling.nextSibling
	}

	return nextSibling
	
}


export default () => {
	
	const scrollDown = the('.learn-more')
	const target = getNextNode(scrollDown.parentNode.parentNode)
	

	scrollDown.addEventListener('click', () => {
		scroll(target, {
		
			offset: 0,
			ease: 'inOutQuint',
			duration: 720
		})
	}, true)

}

