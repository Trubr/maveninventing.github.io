
export default () => {

	const insert = name => {
		const el = document.createElement("script")
		el.src = `${name}.js`
		el.async = false // Keep the execution order
		document.head.appendChild(el)
	}

	const scripts = ["main"]

	if (!("IntersectionObserver" in window))
		scripts.unshift("intersection-observer-polyfill")

	scripts.forEach(insert)
	
}