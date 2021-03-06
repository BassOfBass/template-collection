/**
 * Returns a degree value as radian for the purpose of degree calculations of &lt;canvas&gt; element
 * @param {number} degrees 
 */
export function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

/**
 * Rolls random value between `min` and `max` and returns the result;
 * 
 * TODO: provide type checking and conversions
 * @param {number} min
 * @param {number} max
 */
export function rollRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + (min);
}

/**
 * Return url query parameter out of the object.
 * @param {object} object 
 */
function getQuery(object) {
  const query = Object.entries(object)
  .reduce((query, [ key, value ]) => {

    return query += `${key}=${value}&`
    
  }, "?")
  .slice(0, -1)

  const encodedQuery = encodeURIComponent(query)

  return encodedQuery

}

/**
 * Taken from [gist](https://gist.github.com/fletcherrippon/d89aa1741d1713f0d80de1d78f359449#file-animateonscroll-js)
 * [Article itself](https://medium.com/swlh/nuxt-creating-custom-directives-for-static-srr-sites-bf287f0cb6bb)
 */
const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      // If element is in view
      if (entry.isIntersecting) {
        // Add class 'enter'
        entry.target.classList.add('enter') 
        // Unobserve element         
        animateOnScrollObserver.unobserve(entry.target)
      }
    })
  }
)

// Vue.directive('animate-on-scroll', {
//   bind: el => { 
//     // Add 'before-enter' class
//     el.classList.add('before-enter') 
//     // Observe element    
//     animateOnScrollObserver.observe(el)
//   }
// })

function getURLExtension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

/**
 * @param {number} number
 * @param {precision} [precision=0]
 */
function roundNumber(number, precision = 0) {
  const factor = 10 ** precision;
  const product = Math.round(number * factor * 10) / 10;
  return Math.round(product) / factor;
}
