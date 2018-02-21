import { the, all, forEach} from './utils/helpers'

// preload images
export default _ => {

  /**
 * this replace img src with the data-src of the image
 * @param {Element} img DOM node
 */
  const preloadImage = img => {

    img.setAttribute('src', img.getAttribute('data-src'))
   
    img.addEventListener('load', () => {

      img.classList.add('loaded')
      img.classList.add('unblur')

    }, false)

  }

  /**
   * Select all the elements that we want to lazy load.
   */
  const lazys = all('[data-src]')

  /**
   * Checking for Browser support, if not has load it all.
   */
  if (!("IntersectionObserver" in window)){

    forEach(lazys, lazy => preloadImage(lazy))

  }else{
    /**
     * [onIntersection description]
     * @param  {[type]} entries [description]
    */
     const onIntersection = entries => {

      forEach(entries, entry => {
        if (entry.intersectionRatio > 0) {
          scroll.unobserve(entry.target)
          preloadImage(entry.target)
        }
      })

    }

    /**
     * instance of the IntersectionObserver
     * @param {[callback]} onIntersection
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    */
        const scroll = new IntersectionObserver(onIntersection, {
          rootMargin: '50px 0px',
          threshold: 0.10
        })

    /**
     * Targeting all selected elements to be observed
    */
    forEach(lazys, lazy => scroll.observe(lazy))
  }
}
