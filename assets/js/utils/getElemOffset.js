/**
 * Get element offset climbing up the down
 */
export default elem => {

	const width = elem.offsetWidth
	const height = elem.offsetHeight

	let top = 0
	let left = 0

	do {
		if (!isNaN(elem.offsetTop)) {
			top += elem.offsetTop
		}
		if (!isNaN(elem.offsetLeft)) {
			left += elem.offsetLeft
		}
	} while ((elem = elem.offsetParent) !== null)

	return { height, top }

}
