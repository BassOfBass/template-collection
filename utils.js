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

/* Node.js */

/**
 * `__dirname` variable is not available with ES6 modules, so it has to be created manually.
 */
export create__dirname() {
  const __dirname = path.dirname(new URL(import.meta.url).pathname); 
  
  return __dirname;
}
