import { the } from './utils/helpers'
import Swiper from './vendors/swiper.esm'

export default () => {

	const key = 'AIzaSyAQ7gLbb5EBJeCYTpBsBR5NevCelpqxn2o'
	const id = 'UCXILlHWIzxaCyw13hR52JMQ'

	const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=5`

	// const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=contentDetails`

	const fetcher = () =>{

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
			}
		}
	})

	swiper.on('init', () => carrousel.classList.add('active'))


	const videoElement = (link, image, video) => {
		return `<div class="video-youtube swiper-slide">
			<a href="https://www.youtube.com/watch?v=${link}" target="_blank">
				<figure>
					<img src="${image.high.url}" alt="${video.snippet.title}" height="${image.high.height}" width="${image.high.width}" />
				</figure>
			</a>
		 </div>`
	}


	fetcher().then( res => {

		const thumbs = []
		
		res.items.forEach(video => {
			const thumb = videoElement(video.id.videoId, video.snippet.thumbnails, video)
			thumbs.push(thumb)
		})

		swiper.appendSlide(thumbs)
		
		setTimeout( _ => swiper.init(), 500)

	})






}