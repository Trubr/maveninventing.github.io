import {
	the,
	all,
	forEach
} from './utils/helpers'

import anime from 'animejs'


const wrapSpan = txt => {
	txt.innerHTML = txt.innerText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
}

const animation = array => {

	anime.timeline()
		.add({
			targets: array,
			opacity: 1,
			easing: 'linear',
			duration: 400,
			delay: (el, i) => 35 * i
		})

}

const letteringEffect = element =>{
	wrapSpan(element)
	animation(element.querySelectorAll('.letter'))	
}


export default selector =>{
	
	const introTitle = the('#intro h1')	
	letteringEffect(introTitle)

	// const introSubTitle = the('#intro h2')
	// letteringEffect(introSubTitle)

}	