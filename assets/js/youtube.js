import { the } from './utils/helpers'
import Swiper from './vendors/swiper.esm'

export default () => {

	const key = 'AIzaSyAQ7gLbb5EBJeCYTpBsBR5NevCelpqxn2o'
	const id = 'UCXILlHWIzxaCyw13hR52JMQ'

	const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=5`

	console.log(apiUrl)

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


	const videoElement = (link, image, video) => {

		const h = image.high.height
		const w = image.high.width

		return `<div class="video-youtube swiper-slide">
			<a href="https://www.youtube.com/watch?v=${link}" target="_blank" rel="noopener">
				<figure>
					<img data-src="${image.high.url}" src="${svg(h, w)}" alt="${video.snippet.title}" height="${h}" width="${w}" class="swiper-lazy" />
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
		
		swiper.init()

	})


}