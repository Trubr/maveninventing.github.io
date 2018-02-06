const isMobile = {
	Android: _ => navigator.userAgent.match(/Android/i),
	BlackBerry: _ => navigator.userAgent.match(/BlackBerry/i),
	iOS: _ => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: _ => navigator.userAgent.match(/Opera Mini/i),
	Windows: _ => navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i),
	any: _ => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
}

export { isMobile }
