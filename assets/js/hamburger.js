import { the } from './utils/helpers'

export default () =>{

	const hamburger = the('#hamburger') || false
	
	if (!hamburger) return 

	const controls = {
		header: the('#intro') || false,
		main: the('#main') || false, 
		nav: the('#navigation') || false,
		open: 0
	}


	hamburger.addEventListener('click', function(){

		if(!controls.open){
			controls.open = 1
			this.classList.add('menu-active')
			controls.header.classList.add('menu-active')
			controls.main.classList.add('menu-active')
			controls.nav.classList.add('menu-active')
		}else{
			controls.open = 0
			this.classList.remove('menu-active')
			controls.header.classList.remove('menu-active')
			controls.main.classList.remove('menu-active')
			controls.nav.classList.remove('menu-active')
		}
	
	})

}