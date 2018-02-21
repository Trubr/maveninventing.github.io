import domready from 'domready'
import scrollDown from './scrollDown'
import menu from './menu'
import youtube from './youtube'
import medium from './medium'
// import bgParralax from './bgParralax'
import lettering from './lettering'
import scrollBasic from './scroll'
import lazyLoad from './lazyLoad'

// import parallax from './parallax'

// import hamburger from './hamburger'

domready( _ => {

	// smooth animations on menu anchors
	menu()
	
	lettering()

	scrollDown()

	lazyLoad()

	scrollBasic()

	// service worker code here
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./public/service-worker.js')
	}


	youtube()

	medium()


})
