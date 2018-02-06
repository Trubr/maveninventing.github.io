import domready from 'domready'
import scrollDown from './scrollDown'
import anchors from './menuAnchors'
import youtube from './youtube'
import medium from './medium'

domready( _ => {
	scrollDown()

	// smooth animations on menu anchors
	anchors()


	youtube()
	medium()
})
