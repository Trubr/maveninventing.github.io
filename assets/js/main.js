import scrollDown from './scrollDown'
import menu from './menu'
import lettering from './lettering'
import lazyLoad from './lazyLoad'
import loadBlog from './loadBlog'

	menu()
	
	lettering()

	scrollDown()

	lazyLoad()

	loadBlog()
	
	// service worker code here
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js')
	}
