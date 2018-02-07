import { the } from './utils/helpers'
import Swiper from './vendors/swiper.esm'
import RSSParser from 'rss-parser'

const fetcher = apiUrl => {

	return new Promise((resolve, reject) => {

		const req = new XMLHttpRequest()

		req.open('GET', apiUrl, true)

		req.onreadystatechange = () => {

			if (req.readyState == 4) {

				if (req.status == 200) resolve(JSON.parse(req.responseText))

				else reject(Error(req.statusText))

			}

		}

		req.onerror = () => reject(Error("network error"))

		req.send()

	})

}


const getPosts = () => {

	return new Promise((resolve, reject) => {

		const parser = new RSSParser()

		const url = 'http://medium.com/feed/trubr'

		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

		parser.parseURL(`${CORS_PROXY}${url}`, (err, feed) => {
			resolve(feed)
			reject(err)
		})

	})

}


export default () => {

	const carrousel = the('#read-more .swiper-container')

	const swiper = new Swiper(carrousel, {
		init: false,
		slidesPerView: 5,
		spaceBetween: 20,
		slidesPerGroup: 5,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0,
			},
			1240: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30
			},
			1480: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 30
			}
		}
	})

	swiper.on('init', () => carrousel.classList.add('active'))


	const mediumPost = post => {

		const excerpt = post['content:encoded'].substring(0, 290) + ' […]'
		const cleanExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "")

		return `<article class="medium-post swiper-slide">
					<a href="${post.link}" target="_blank" rel="noopener">
						<h1>${post.title}</h1>
						<p>${cleanExcerpt}</p>
						<span>continue reading</small>
					</a>
				</article>`
	}


	const popule = res =>{

		const posts = res.items

		const thumbs = []
		posts.forEach(post => thumbs.push(mediumPost(post)))

		swiper.appendSlide(thumbs)
		setTimeout(_ => swiper.init(), 500)

	}


	getPosts().then(res => popule(res))


}