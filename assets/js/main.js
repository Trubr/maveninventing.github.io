import domready from 'domready'
import scrollDown from './scrollDown'
import menu from './menu'
import youtube from './youtube'
import medium from './medium'
// import hamburger from './hamburger'

domready( _ => {
	scrollDown()

	// smooth animations on menu anchors
	menu()


	youtube()
	medium()
	
})
