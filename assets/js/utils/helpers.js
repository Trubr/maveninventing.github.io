const the = document.querySelector.bind(document)
const all = document.querySelectorAll.bind(document)

// Detect request animation frame
const animation = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  // IE Fallback, you can even fallback to onscroll
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }



/**
 * ForEach applyed for any type of list
 */
function forEach(list, callback) {
  Array.prototype.forEach.call(list, callback)
}


export function svg(width, height) {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`
}
/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {getRandomInt, animation, the, all, forEach}