import domready from 'domready'
import scrollDown from './scrollDown'
import menu from './menu'
import youtube from './youtube'
import medium from './medium'
import bgParralax from './bgParralax'
import lettering from './lettering'
// import parallax from './parallax'

// import hamburger from './hamburger'

domready( _ => {

	youtube()
	medium()

	scrollDown()

	// smooth animations on menu anchors
	menu()

	lettering()
	
	//parallax('.about-illustration img', 1.1)
	//bgParralax('.section-header')
	

})
