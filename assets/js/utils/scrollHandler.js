import { animation } from './helpers'

class ScrollHandler {

	constructor() {
		this.lastPosY = window.pageYOffset
		this.instance = false

	}

	init(options) {
		this.after = options.after || false
		this.before = options.before || false
		this.max = options.max || 0
		this.min = options.min || 0
		this.loop()
	}

	callback() {

		if (this.after != false) {
			if (this.lastPosY >= this.max) {
				this.after()
			}
		}

		if (this.before != false) {
			if (this.lastPosY <= this.min) {
				this.before()
			}
		}

	}

	loop() {

		if (!this.after && !this.before) {
			this.stop()
			return
		}

		const scrollTop = window.pageYOffset

		if (this.lastPosY === scrollTop) {
			this.instance = animation(this.loop.bind(this))
			return

		} else {

			this.lastPosY = scrollTop
			this.callback()
			this.instance = animation(this.loop.bind(this))

		}

	}

	stop(name = false) {

		if (name) {

			this[name] = false

		} else {

			this.after = false
			this.before = false
			window.cancelAnimationFrame(this.instance)
		}

	}

}

export { ScrollHandler }
