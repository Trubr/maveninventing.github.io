import { the } from './utils/helpers'
import scrollIt from './utils/scrollIt'

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

	scrollDown.addEventListener('click', () => scrollIt(target, 400, 'easeInOutQuart'), true)

}

