const elementIsVisibleInViewport = (el, partiallyVisible = false) => {

	const { top, left, bottom, right } = el.getBoundingClientRect()
	const { innerHeight, innerWidth } = window

	if (partiallyVisible) {
		return (top < innerHeight) && (bottom > 0)
	} else {
		return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
	}

}

export { elementIsVisibleInViewport }