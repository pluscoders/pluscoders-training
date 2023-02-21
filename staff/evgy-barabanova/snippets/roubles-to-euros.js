/**
 * Converts an amount of euros into roubles.
 *
 * @example
 *
 * roublesToEuros(1020)
 * > 12
 *
 * @example
 *
 * roublesToEuros(425)
 * > 5
 *
 * @param {number} roubles The roubles to convert into euros.
 *
 * @returns {number} The resulting Euros from roubles.
 */
function roublesToEuros(roubles) {
  return roubles / 85;
}
