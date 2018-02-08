import domready from 'domready'
import scrollDown from './scrollDown'
import menu from './menu'
import youtube from './youtube'
import medium from './medium'
import parallax from './parallax'

// import hamburger from './hamburger'

domready( _ => {

	youtube()
	medium()

	scrollDown()

	// smooth animations on menu anchors
	menu()

	parallax()
	
})
