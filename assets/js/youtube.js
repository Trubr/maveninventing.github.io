import { the } from './utils/helpers'
import Swiper from './vendors/swiper.esm'

export default () => {

	const key = 'AIzaSyAQ7gLbb5EBJeCYTpBsBR5NevCelpqxn2o'
	const id = 'UCXILlHWIzxaCyw13hR52JMQ'

	const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=5`

	function fetcher(){

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

	function svg(width, height) {
		return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`
	}

	function videoElement(link, image, video) {

		const h = image.high.height
		const w = image.high.width

		return `<div class="video-youtube swiper-slide">
				<a href="https://www.youtube.com/watch?v=${link}" target="_blank" rel="noopener">
					<figure>
						<img data-src="${image.high.url}" src="${svg(w, h)}" alt="${video.snippet.title}" height="${h}" width="${w}" class="swiper-lazy" />
					</figure>
				</a>
			</div>`
	 }

	const carrousel = the('#watch-more .swiper-container')

	const swiper = new Swiper(carrousel, {
		init: false,
		slidesPerView: 5,
		spaceBetween: 20,
		slidesPerGroup: 5,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		preloadImages: false,
		lazy: true,
		watchSlidesVisibility: true,
		breakpoints: {
			480: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 5,
			},
			769: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30
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

	fetcher().then( res => {

		const thumbs = []

		res.items.forEach(video => {
			const thumb = videoElement(video.id.videoId, video.snippet.thumbnails, video)
			thumbs.push(thumb)
		})

		swiper.appendSlide(thumbs)
		swiper.init()
	})


}