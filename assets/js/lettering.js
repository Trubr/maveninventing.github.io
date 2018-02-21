import {
	the,
	all,
	forEach
} from './utils/helpers'

import anime from 'animejs'

const letteringEffect = txts => {
	forEach(txts, txt => {
		txt.innerHTML = txt.innerText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
		animation(txt.querySelectorAll('.letter'))	
	})
}

const animation = array => {

	anime.timeline()
		.add({
			targets: array,
			opacity: 1,
			translateY: {
				value: [30, 0],
				duration: 720 
			},
			easing: [.19, 1, .22, 1],
			duration: 720,
			delay: (el, i) => 50 * i
		})

}

export default selector =>{

	const introTitle = all('#intro h1 div')	
	letteringEffect(introTitle)

}	