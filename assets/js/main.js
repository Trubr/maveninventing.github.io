import fonts from './vendors/fontFace'
import scrollDown from './scrollDown'
import menu from './menu'
import lettering from './lettering'
import lazyLoad from './lazyLoad'
import loadBlog from './loadBlog'

// service worker code here
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js')
}

menu()

lettering()

scrollDown()

lazyLoad()

loadBlog()
